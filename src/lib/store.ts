import { create } from "zustand";

interface WindowSizeState {
    isMobile: boolean;
    setWindowSize: (isMobile: boolean) => void;
}

const useStore = create<WindowSizeState>((set) => ({
    isMobile: false,
    setWindowSize: (isMobile) => set({ isMobile }),
}));

export default useStore;
