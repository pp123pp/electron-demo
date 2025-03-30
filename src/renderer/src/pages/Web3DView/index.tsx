import { DndContext } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { Coordinates } from "@dnd-kit/utilities";
import { Draggable } from "@renderer/components/Draggable";
import LayerManagement from "@renderer/components/LayerManagement";
import Footer from "@renderer/components/Viewer3D/Footer";
import Header from "@renderer/components/Viewer3D/Header";
import InitWeb3D from "@renderer/web3D/InitWeb3D";
import { memo, useEffect, useRef, useState } from "react";
import { Web3DWrapper } from "./style";

const defaultCoordinates = {
    x: 0,
    y: 0,
};

export default memo(function Web3DView() {
    const container = useRef<HTMLDivElement>(null);
    const [initViewer, setInitViewer] = useState(true);

    const [{ x, y }, setCoordinates] =
        useState<Coordinates>(defaultCoordinates);

    useEffect(() => {
        setInitViewer(false);
        if (initViewer) return;
        new InitWeb3D(container.current!);
    }, [container.current]);

    return (
        <Web3DWrapper>
            <Header
                style={{
                    height: "40px",
                }}
            />
            <div ref={container} className="container">
                <DndContext
                    modifiers={[restrictToParentElement]}
                    onDragEnd={({ delta }) => {
                        console.log(delta);
                        setCoordinates(({ x, y }) => {
                            return {
                                x: x + delta.x,
                                y: y + delta.y,
                            };
                        });
                    }}
                >
                    <Draggable>
                        <LayerManagement style={{ left: x, top: y }} />
                    </Draggable>
                </DndContext>
            </div>
            <Footer
                style={{
                    height: "30px",
                }}
            />
        </Web3DWrapper>
    );
});
