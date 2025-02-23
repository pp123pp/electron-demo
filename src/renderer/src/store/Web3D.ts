import VEngine from "@renderer/assets/build/VEngine.module";

import { create } from "zustand";

// export const cameraStore = create<{ camera: VEngine.Camera }>((set) => ({
//     camera: undefined,
//     setCamera: (camera: VEngine.Camera) => set({ camera }),
// }));

export const useWeb3DStore = create<{
    viewer: VEngine.Viewer;
    setViewer: (viewer: VEngine.Viewer) => void;
    scene: VEngine.Viewer;
    setScene: (viewer: VEngine.Scene) => void;
    camera: VEngine.Camera;
    setCamera: (camera: VEngine.Camera) => void;
    eventHandler: VEngine.ScreenSpaceEventHandler;
    setEventHandler: (eventHandler: VEngine.ScreenSpaceEventHandler) => void;
}>((set) => ({
    camera: undefined,
    setCamera: (camera) => set({ camera }),
    viewer: undefined,
    setViewer: (viewer: VEngine.Viewer) => set({ viewer }),
    scene: undefined,
    setScene: (scene: VEngine.Scene) => set({ scene }),
    eventHandler: undefined,
    setEventHandler: (eventHandler: VEngine.ScreenSpaceEventHandler) =>
        set({ eventHandler }),
}));
