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
import { Wrapper } from "./style";

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
            <Wrapper style={style} className={classNames(className)}>
                <div className="title">
                    <div className="left">
                        <UnorderedListOutlined /> 图层
                    </div>
                    <div className="right">
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
            </Wrapper>
            <Wrapper style={style} className={classNames(className)}>
                <div className="title">
                    <div className="left">
                        <UnorderedListOutlined /> 图层
                    </div>
                    <div className="right">
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
            </Wrapper>
        </DndContext>
    );
});
