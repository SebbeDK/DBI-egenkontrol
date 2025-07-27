
import { defineStore } from 'pinia';
import {
  
  
  createFolder,
  subscribeToFolders, 
  updateFolder,
  deleteFolder,
  subscribeToFilesInFolder, 
  createFileInFolder,
  updateFileInFolder,
  deleteFileInFolder,
} from '@/services/firestoreService'; 

export const useFolderStore = defineStore('folder', {
  
  state: () => ({
    folders: [], 
    selectedFolderId: null, 
    filesInSelectedFolder: [], 
    foldersLoading: false, 
    filesLoading: false, 
    foldersError: null, 
    filesError: null, 

    
    
    _unsubscribeFolders: null,
    _unsubscribeFiles: null,
  }),

  
  getters: {
    
    getSelectedFolder: (state) => {
      return state.folders.find(folder => folder.id === state.selectedFolderId);
    },
  },

  
  actions: {
    
    initFolderListeners() {
      
      if (this._unsubscribeFolders) {
        this._unsubscribeFolders();
      }

      this.foldersLoading = true;
      this.foldersError = null; 

      
      this._unsubscribeFolders = subscribeToFolders((fetchedFolders) => {
        this.folders = fetchedFolders; 
        this.foldersLoading = false;

       
        if (this.selectedFolderId && !fetchedFolders.some(f => f.id === this.selectedFolderId)) {
          this.selectedFolderId = null;
        }
        
        if (fetchedFolders.length === 0) {
          this.selectedFolderId = null;
        }
        
        if (this.selectedFolderId === null && fetchedFolders.length > 0) {
          this.selectedFolderId = fetchedFolders[0].id;
        }
      }, (error) => {
        
        this.foldersError = error;
        this.foldersLoading = false;
        console.error("Fejl ved lytning til mapper:", error);
      });
    },

   
    initFilesListener(folderId) {
      
      if (this._unsubscribeFiles) {
        this._unsubscribeFiles();
      }

      this.filesLoading = true;
      this.filesError = null; 
      this.filesInSelectedFolder = []; 

      if (!folderId) {
        this.filesLoading = false;
        return; 
      }

      this._unsubscribeFiles = subscribeToFilesInFolder(folderId, (fetchedFiles) => {
        this.filesInSelectedFolder = fetchedFiles; 
        this.filesLoading = false;
      }, (error) => {
        
        this.filesError = error;
        this.filesLoading = false;
        console.error("Fejl ved lytning til filer:", error);
      });
    },

    
    setSelectedFolder(folderId) {
      this.selectedFolderId = folderId;
      this.initFilesListener(folderId); 
    },

   

    /
    async addFolder(folderData) {
      this.foldersLoading = true;
      this.foldersError = null;
      try {
        const newFolder = await createFolder(folderData);
        
        this.setSelectedFolder(newFolder.id);
      } catch (error) {
        this.foldersError = error;
        console.error("Fejl i addFolder:", error);
        throw error; 
      } finally {
        this.foldersLoading = false;
      }
    },

    
    async updateFolder(folderId, newData) {
      this.foldersLoading = true;
      this.foldersError = null;
      try {
        await updateFolder(folderId, newData);
      } catch (error) {
        this.foldersError = error;
        console.error("Fejl i updateFolder:", error);
        throw error;
      } finally {
        this.foldersLoading = false;
      }
    },

    
    async deleteFolder(folderId) {
      this.foldersLoading = true;
      this.foldersError = null;
      try {
        await deleteFolder(folderId);
        
      } catch (error) {
        this.foldersError = error;
        console.error("Fejl i deleteFolder:", error);
        throw error;
      } finally {
        this.foldersLoading = false;
      }
    },

    
    async addFileToFolder(folderId, fileData) {
      this.filesLoading = true;
      this.filesError = null;
      try {
        await createFileInFolder(folderId, fileData);
        
      } catch (error) {
        this.filesError = error;
        console.error("Fejl i addFileToFolder:", error);
        throw error;
      } finally {
        this.filesLoading = false;
      }
    },

    
    async updateFileInFolder(folderId, fileId, newData) {
      this.filesLoading = true;
      this.filesError = null;
      try {
        await updateFileInFolder(folderId, fileId, newData);
      } catch (error) {
        this.filesError = error;
        console.error("Fejl i updateFileInFolder:", error);
        throw error;
      } finally {
        this.filesLoading = false;
      }
    },

    
    async deleteFileInFolder(folderId, fileId) {
      this.filesLoading = true;
      this.filesError = null;
      try {
        await deleteFileInFolder(folderId, fileId);
      } catch (error) {
        this.filesError = error;
        console.error("Fejl i deleteFileInFolder:", error);
        throw error;
      } finally {
        this.filesLoading = false;
      }
    },

    
    clearAllListeners() {
      if (this._unsubscribeFolders) {
        this._unsubscribeFolders();
        this._unsubscribeFolders = null;
        console.log("Firestore folder listener unsubscribed.");
      }
      if (this._unsubscribeFiles) {
        this._unsubscribeFiles();
        this._unsubscribeFiles = null;
        console.log("Firestore files listener unsubscribed.");
      }
    },
  },
});