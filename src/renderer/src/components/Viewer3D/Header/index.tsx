import { CSSProperties, memo } from "react";

export default memo(function Header({
    style,
    className,
}: {
    style?: CSSProperties;
    className?: string;
}) {
    return (
        <div className={`${className} flex h-full bg-[#2f3034]`} style={{ ...style }}>
            <div className="item">三维模型展示</div>
            <div className="menu item">模型导入</div>
            <div className="menu item">环境</div>
        </div>
    );
});
