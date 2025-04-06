import {
    CheckSquareOutlined,
    CloseOutlined,
    DownOutlined,
    UnorderedListOutlined,
} from "@ant-design/icons";
import { DndContext } from "@dnd-kit/core";
import classNames from "classnames";
import { CSSProperties, memo } from "react";
import ContextMenu from "../ContextMenu";

export default memo(function ({
    style,
    className = "",
}: {
    style?: CSSProperties;
    className?: string;
}) {
    const handleAction1 = () => console.log("区域 1 的选项 1 被点击");
    const handleAction2 = () => console.log("区域 1 的选项 2 被点击");

    return (
        <DndContext>
            <div
                style={{
                    ...style,
                    width: "315px",
                    height: "470px",
                }}
                className={`${classNames(className)} bg-black-50 absolute z-1`}
            >
                <div className="flex justify-between h-[30px] bg-[#1b1b1b] text-14 cursor-move px-2">
                    <div className="flex justify-center items-center">
                        <UnorderedListOutlined /> 图层
                    </div>
                    <div className="flex justify-center items-center">
                        <CheckSquareOutlined className="icon" />
                        <DownOutlined className="icon" />
                        <CloseOutlined className="icon" />
                    </div>
                </div>
                <ContextMenu
                    className="contextMenu"
                    menuItems={[
                        { label: "选项 1", action: handleAction1 },
                        { label: "选项 2", action: handleAction2 },
                    ]}
                >
                    <div className="content"></div>
                </ContextMenu>
            </div>
        </DndContext>
    );
});
