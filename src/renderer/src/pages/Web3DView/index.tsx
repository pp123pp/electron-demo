import { DndContext } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import LayerManagement from "@renderer/components/LayerManagement";
import Footer from "@renderer/components/Viewer3D/Footer";
import Header from "@renderer/components/Viewer3D/Header";
import InitWeb3D from "@renderer/web3D/InitWeb3D";
import { memo, useEffect, useRef, useState } from "react";
import { Web3DWrapper } from "./style";

export default memo(function Web3DView() {
    const container = useRef<HTMLDivElement>(null);
    const [initViewer, setInitViewer] = useState(true);

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
                <DndContext modifiers={[restrictToWindowEdges]}>
                    <LayerManagement />
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
