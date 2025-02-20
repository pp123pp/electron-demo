import InitWeb3D from "@renderer/web3D/InitWeb3D";
import { memo, useEffect, useRef, useState } from "react";
import { Web3DWrapper } from "./style";

export default memo(function Web3DView() {
    const container = useRef<HTMLDivElement>(null);
    const [initViewer, setInitViewer] = useState(true);
    console.log("aaa");

    useEffect(() => {
        setInitViewer(false);
        if (initViewer) return;
        const initWeb3D = new InitWeb3D(container.current!);
    }, [container.current]);

    return <Web3DWrapper>
        <div className="container" ref={container}></div>
    </Web3DWrapper>;
});
