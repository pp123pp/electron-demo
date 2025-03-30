import { useDraggable } from "@dnd-kit/core";
import { Wrapper } from "./style";

export function Draggable(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: "draggable",
    });

    // attributes： 一个对象，包含使组件可拖动所需的 HTML 属性
    // listeners： 包含用户拖动组件时触发的事件监听器的对象
    // setNodeRef： 用于设置组件 DOM 节点引用的函数
    // transform： 一个对象，包含组件当前的 x 和 y 移位（以像素为单位）

    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          }
        : undefined;

    return (
        <Wrapper ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </Wrapper>
    );
}
