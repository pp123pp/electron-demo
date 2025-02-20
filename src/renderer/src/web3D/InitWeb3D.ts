import VEngine from "@renderer/assets/build/VEngine.module";

export default class InitWeb3D {
    viewer: VEngine.Viewer;
    eventHandler: VEngine.ScreenSpaceEventHandler;
    constructor(container: HTMLElement) {
        this.viewer = new VEngine.Viewer({
            container,
            viewType: "3d",
            axes: true,
            baseUrl: "http://model-parser-server-fat.vanke.com/model-parser2",
            env: "fat",
        });

        this.eventHandler = new VEngine.ScreenSpaceEventHandler(
            this.viewer.container,
        );

        this.viewer.extend(VEngine.mapSelectEventMixin);

        this.scene.renderer.localClippingEnabled = true;

        this.createEnv();

        let model = new VEngine.Model({
            useDefaultView: false,
            // url: 'https://dc-file-dev.obs.cn-south-1.myhuaweicloud.com/capacity-model/models_0730/P7000/01-gz/header.json',
            // url: 'https://dc-file-dev.obs.cn-south-1.myhuaweicloud.com/capacity-model/models_0730/P7000/01-gz/header.json',

            // url: 'https://dc-file-dev.obs.cn-south-1.myhuaweicloud.com/capacity-model/models_0730/P7819/01-gz/header.json',
            // url: './data/2/header.json',
            // url: 'http://localhost:8888/gz/04-gz/header.json',
            url: "https://dc-file-dev.obs.cn-south-1.myhuaweicloud.com/capacity-model/models_0730/P0001-01/02-gz/header.json",
            // url: "./model/header.json",

            // url: 'https://dc-file-dev.obs.cn-south-1.myhuaweicloud.com/capacity-model/models_0730/P1207/01-gz/header.json',
            // url: 'https://dc-file-dev.obs.cn-south-1.myhuaweicloud.com:443/capacity-model/models_0730/zyctest/P1207/01-gz/header.json',
        });

        let viewer = this.viewer;
        viewer.scene.primitives.addObject(model);

        model.readyPromise.then(() => {
            viewer.flyTo(model);
        });
    }

    get scene() {
        return this.viewer.scene;
    }

    get drawHelper() {
        return this.viewer.drawHelper;
    }

    createEnv() {
        const { scene } = this;

        const dirLight = new VEngine.DirectionalLight(0xffffff, 3);
        dirLight.color.setHSL(0.1, 1, 0.95);
        dirLight.position.set(-1, 1.75, 1);
        dirLight.position.multiplyScalar(30);
        scene.addPrimitive(dirLight);

        const hemiLight = new VEngine.HemisphereLight(0xffffff, 0xffffff, 2);
        scene.addPrimitive(hemiLight);

        const sky = new VEngine.Sky();
        scene.addPrimitive(sky);

        // viewer.extend(VEngine.mapSelectEventMixin);
        scene.lightCollection.showBackground = false;

        scene.screenSpaceCameraController.maxDistance = 500;
        scene.fog = new VEngine.THREE.FogExp2(
            new VEngine.THREE.Color(0xffffff),
            0.001,
        );

        scene.effectComposerCollection.selectFillColorPass.highlightColor =
            new VEngine.ColorVec4(0, 1, 1, 0.5);

        scene.preUpdate.addEventListener(() => {
            scene.effectComposerCollection.selectFillColorPass.highlightColor.w =
                Math.sin(scene.frameState.frameNumber / 20.0) * 0.2 + 0.5;
        });
    }
}
