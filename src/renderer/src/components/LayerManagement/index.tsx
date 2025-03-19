import { DndContext, useDraggable } from "@dnd-kit/core";
import classNames from "classnames";
import { CSSProperties, memo, useState } from "react";
import { Wrapper } from "./style";

export default memo(function ({
    style,
    className = "",
}: {
    style?: CSSProperties;
    className?: string;
}) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: "draggable",
    });

    const [originTransform, setOriginTransform] = useState({
        transform,
    });

    if (!transform) {
        debugger;
    }

    const style2 = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          }
        : undefined;

    return (
        <DndContext>
            <Wrapper
                ref={setNodeRef}
                style={style2}
                {...listeners}
                {...attributes}
                className={classNames(className)}
            ></Wrapper>
        </DndContext>
    );
});
