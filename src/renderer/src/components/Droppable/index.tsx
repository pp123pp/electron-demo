import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
    const { isOver, setNodeRef } = useDroppable({
        id: "droppable",
    });

    // isOver: 布尔值，表示可拖动组件当前是否位于可下垂组件的上方
    // setNodeRef: 用于设置组件 DOM 节点引用的函数

    const style = {
        color: isOver ? "blue" : undefined,
    };

    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}
