import { db } from "../firebase";
import { useUserStore } from '@/stores/userStore';


import {
  collection,
  addDoc,       
  getDocs,      
  doc,          
  updateDoc,    
  deleteDoc,    
  query,        
  orderBy,      
  onSnapshot,   
} from "firebase/firestore";


const FOLDERS_COLLECTION_NAME = "folders"; 



export const createFolder = async (folderData) => {
  try {
      const userStore = useUserStore(); 
      const folderWithOwner = {
      ...folderData,
      created_by: userStore.currentUserId, 
    };

        const docRef = await addDoc(collection(db, FOLDERS_COLLECTION_NAME), folderWithOwner);
    console.log("Mappe oprettet med ID: ", docRef.id);
    return { id: docRef.id, ...folderWithOwner };
  } catch (error) {
    console.error("Fejl ved oprettelse af mappe: ", error);
    throw error;
  }
};


export const subscribeToFolders = (callback) => {
  
  const q = query(collection(db, FOLDERS_COLLECTION_NAME), orderBy("createdAt", "asc"));

  
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const folders = snapshot.docs.map((doc) => ({
      id: doc.id, 
      ...doc.data(), 
    }));
    callback(folders); 
  }, (error) => {
    console.error("Fejl ved lytning til mapper: ", error);
  });

  return unsubscribe; 
};


export const updateFolder = async (folderId, newData) => {
  try {
    const folderRef = doc(db, FOLDERS_COLLECTION_NAME, folderId);
    await updateDoc(folderRef, newData);
    console.log("Mappe opdateret succesfuldt");
  } catch (error) {
    console.error("Fejl ved opdatering af mappe: ", error);
    throw error;
  }
};


export const deleteFolder = async (folderId) => {
  try {
    
    await deleteDoc(doc(db, FOLDERS_COLLECTION_NAME, folderId));
    console.log("Mappe slettet succesfuldt");
  } catch (error) {
    console.error("Fejl ved sletning af mappe: ", error);
    throw error;
  }
};



export const createFileInFolder = async (folderId, fileData) => {
  try {
    const userStore = useUserStore();
    const fileWithOwner = {
      ...fileData,
      created_by: userStore.currentUserId, 
    };

    const filesCollectionRef = collection(db, FOLDERS_COLLECTION_NAME, folderId, "files");
    const docRef = await addDoc(filesCollectionRef, fileWithOwner);
    console.log("Fil oprettet i mappe med ID: ", docRef.id);
    return { id: docRef.id, ...fileWithOwner };
  } catch (error) {
    console.error("Fejl ved oprettelse af fil i mappe: ", error);
    throw error;
  }
};


export const subscribeToFilesInFolder = (folderId, callback) => {
  if (!folderId) {
   
    callback([]);
    return () => {}; 
  }

 
  const q = query(
    collection(db, FOLDERS_COLLECTION_NAME, folderId, "files"),
    orderBy("date", "desc") 
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const files = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(files); 
  }, (error) => {
    console.error("Fejl ved lytning til filer i mappe: ", error);
  });

  return unsubscribe;
};

// 
export const updateFileInFolder = async (folderId, fileId, newData) => {
  try {
    const fileRef = doc(db, FOLDERS_COLLECTION_NAME, folderId, "files", fileId);
    await updateDoc(fileRef, newData);
    console.log("Fil opdateret succesfuldt");
  } catch (error) {
    console.error("Fejl ved opdatering af fil: ", error);
    throw error;
  }
};


export const deleteFileInFolder = async (folderId, fileId) => {
  try {
    await deleteDoc(doc(db, FOLDERS_COLLECTION_NAME, folderId, "files", fileId));
    console.log("Fil slettet succesfuldt");
  } catch (error) {
    console.error("Fejl ved sletning af fil: ", error);
    throw error;
  }
};