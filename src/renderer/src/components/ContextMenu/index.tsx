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
    className?: string;
    children?: ReactNode;
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
            y: e.pageY,
        });
    };

    const handleMenuItemClick = (item: MenuItem) => {
        item.action(); // 执行菜单项的操作
        setMenu({ ...menu, visible: false });
        // setMenu({ ...menu, visible: true });
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
                    className="menu"
                    style={{
                        left: menu.x,
                        top: menu.y,
                    }}
                >
                    <ul>
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleMenuItemClick(item)}
                            >
                                <span>{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Wrapper>
    );
});
