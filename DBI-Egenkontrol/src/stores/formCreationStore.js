import { defineStore } from 'pinia';


const defaultNewFormState = () => ({
  name: '', 
  allowSaveReportsTemporarily: false,
  allowDeleteAndEdit: false,
  allowUseForOtherTasks: false,
  frequency: '',
  receiptRecipient: '',
  deviationRecipient: '',
  addRightsGroup: '', 

 
  questions: [], 
  folderId: null, 
});

export const useFormCreationStore = defineStore('formCreation', {
  state: () => ({
    
    currentNewForm: defaultNewFormState(),
  }),

  actions: {
    
    updateBasicInfo(info) {
      this.currentNewForm = { ...this.currentNewForm, ...info };
      console.log('Pinia: Basic info updated:', this.currentNewForm);
    },

    
    updateQuestions(questions) {
      this.currentNewForm.questions = questions;
      console.log('Pinia: Questions updated:', this.currentNewForm.questions);
    },

 
    setFolderId(folderId) {
      this.currentNewForm.folderId = folderId;
    },

    
    resetForm() {
      this.currentNewForm = defaultNewFormState();
      console.log('Pinia: Form reset.');
    },
  },
  
});