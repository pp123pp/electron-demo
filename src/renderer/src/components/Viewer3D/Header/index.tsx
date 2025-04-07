import { CSSProperties, memo } from "react";

export default memo(function Header({
    style,
    className,
}: {
    style?: CSSProperties;
    className?: string;
}) {
    return (
        <div
            className={`${className} flex h-full bg-[#2f3034]`}
            style={{ ...style }}
        >
            <div className="header-item">三维模型展示</div>
            <div className="header-menu header-item">模型导入</div>
            <div className="header-menu header-item">环境</div>
        </div>
    );
});
