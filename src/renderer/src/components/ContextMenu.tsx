import classNames from "classnames";
import { CSSProperties, memo, MouseEvent, ReactNode, useState } from "react";

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
        <div
            className={`${classNames(className)} col-block`}
            onClick={handleClick}
            onContextMenu={handleContextMenu}
        >
            {children}
            {menu.visible && (
                <div
                    className="w-[200px] fixed bg-[#292a2e] text-[#e6e6e6] rounded-sm"
                    style={{
                        left: menu.x,
                        top: menu.y,
                    }}
                >
                    <ul className="p-0 m-0">
                        {menuItems.map((item, index) => (
                            <li
                                className="m-0 text-left cursor-pointer h-[30px]  hover:bg-[#3d3d3d]"
                                key={index}
                                onClick={() => handleMenuItemClick(item)}
                            >
                                <span>{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});
