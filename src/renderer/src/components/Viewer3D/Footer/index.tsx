import { useWeb3DStore } from "@renderer/store/Web3D";
import CONSTANTS from "@renderer/web3D/CONSTANTS";
import { CSSProperties, memo, useCallback, useEffect, useState } from "react";

export default memo(function Footer({
    style,
    className,
}: {
    style?: CSSProperties;
    className?: string;
}) {
    const [cameraParams, setCameraParams] = useState({
        position: [0, 0, 0],
        pitch: 0,
        heading: 0,
    });

    const camera = useWeb3DStore((state) => state.camera);

    const cameraChangeEvent = useCallback(() => {
        const { position, pitch, heading } = camera;
        setCameraParams({
            position: [
                position.x.toFixed(2),
                position.y.toFixed(2),
                position.z.toFixed(2),
            ],
            pitch: pitch.toFixed(2),
            heading: heading.toFixed(2),
        });
    }, [camera]);

    useEffect(() => {
        if (!camera) return;
        CONSTANTS.camera.change.addEventListener(cameraChangeEvent);
    }, [camera]);

    return (
        <div
            style={{ ...style }}
            className="flex border-white bg-[#2f3034] box-border"
        >
            <div className={`footerItem ${className || ""}`}>
                相机位置:X:{cameraParams.position[0]} Y:
                {cameraParams.position[1]} Z:{cameraParams.position[2]}
            </div>
            <div className="footerItem">俯仰角:{cameraParams.pitch} rad</div>
            <div className="footerItem">偏航角:{cameraParams.heading} rad</div>
        </div>
    );
});
