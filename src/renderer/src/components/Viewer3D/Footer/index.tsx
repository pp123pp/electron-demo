import { useWeb3DStore } from "@renderer/store/Web3D";
import CONSTANTS from "@renderer/web3D/CONSTANTS";
import { CSSProperties, memo, useCallback, useEffect, useState } from "react";
import { Wrapper } from "./style";

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
        <Wrapper style={{ ...style }}>
            <div className={`info ${className || ""}`}>
                相机位置:X:{cameraParams.position[0]} Y:
                {cameraParams.position[1]} Z:{cameraParams.position[2]}
            </div>
            <div className="info">俯仰角:{cameraParams.pitch} rad</div>
            <div className="info">偏航角:{cameraParams.heading} rad</div>
            {/* <div className="info">
                鼠标位置:{worldPosition[0]}, {worldPosition[1]},{" "}
                {worldPosition[2]}
            </div> */}
        </Wrapper>
    );
});
