import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUserId: null,
    isAdmin: false,
  }),
  actions: {
    setCurrentUser(userId, isAdmin) {
      this.currentUserId = userId;
      this.isAdmin = isAdmin;
    },
    logout() {
      this.currentUserId = null;
      this.isAdmin = false;
    },
  },
});