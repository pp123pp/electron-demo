import classNames from "classnames";
import { CSSProperties, memo, MouseEvent, ReactNode, useState } from "react";
import { Wrapper } from "./style";

interface MenuItem {
    label: string;
    action: () => void;
}

export default memo(function ({
    children,
    menuItems,
    className = "",
    style,
}: {
    style?: CSSProperties;
    className: string;
    children: ReactNode;
    menuItems: MenuItem[];
}) {
    const [menu, setMenu] = useState({ visible: false, x: 0, y: 0 });

    const handleClick = () => {
        setMenu({ ...menu, visible: false });
    };

    const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
        setMenu({
            visible: true,
            x: e.pageX,
            y: e.pageX,
        });
    };

    const handleMenuItemClick = (item: MenuItem) => {
        item.action(); // 执行菜单项的操作
        setMenu({ ...menu, visible: false });
    };

    return (
        <Wrapper
            style={style}
            className={classNames(className)}
            onClick={handleClick}
            onContextMenu={handleContextMenu}
        >
            {children}
            {menu.visible && (
                <div
                    style={{
                        position: "absolute",
                        left: menu.x,
                        top: menu.y,
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                        zIndex: 1000,
                    }}
                >
                    <ul>
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleMenuItemClick(item)}
                            >
                                {item.label}
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </Wrapper>
    );
});
