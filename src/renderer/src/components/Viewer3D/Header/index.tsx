import { CSSProperties, memo } from "react";
import { Wrapper } from "./style";

export default memo(function Header({
    style,
    className,
}: {
    style?: CSSProperties;
    className?: string;
}) {
    return (
        <Wrapper className={className || ""} style={{ ...style }}>
            <div className="item">三维模型展示</div>
            <div className="menu item">模型导入</div>
            <div className="menu item">环境</div>
        </Wrapper>
    );
});
