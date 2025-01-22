import { defineStore } from "pinia";

export const useSidebarStore = defineStore('sidebarStore', () => {
    const isSidebarOpen = ref(false);
    const toogleSidebar = () => isSidebarOpen.value = !isSidebarOpen.value;
    return { isSidebarOpen, toogleSidebar }
});