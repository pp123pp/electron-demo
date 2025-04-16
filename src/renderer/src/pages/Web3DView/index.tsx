import LayerManagement from "@renderer/components/LayerManagement";
import Footer from "@renderer/components/Viewer3D/Footer";
import Header from "@renderer/components/Viewer3D/Header";
import InitWeb3D from "@renderer/web3D/InitWeb3D";
import { memo, useEffect, useRef, useState } from "react";

export default memo(function Web3DView() {
    const container = useRef<HTMLDivElement>(null);
    const [initViewer, setInitViewer] = useState(true);

    useEffect(() => {
        setInitViewer(false);
        if (initViewer) return;
        new InitWeb3D(container.current!);
    }, [container.current]);

    return (
        <div className="h-screen flex flex-col justify-between text-white">
            <Header
                style={{
                    height: "40px",
                }}
            />
            <div ref={container} className="w-full h-full flex bg--black-50">
                <LayerManagement />
            </div>
            <Footer
                style={{
                    height: "30px",
                }}
            />
        </div>
    );
});
