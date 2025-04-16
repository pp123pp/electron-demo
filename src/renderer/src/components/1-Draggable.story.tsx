import {
    DndContext,
    KeyboardSensor,
    Modifiers,
    MouseSensor,
    PointerActivationConstraint,
    TouchSensor,
    useDraggable,
    useSensor,
    useSensors,
} from "@dnd-kit/core";

import type { Coordinates } from "@dnd-kit/utilities";

import React, { useState } from "react";
import { Axis, Draggable } from "./Draggable";

export default {
    title: "Core/Draggable/Hooks/useDraggable",
};

const defaultCoordinates = {
    x: 0,

    y: 0,
};

interface Props {
    activationConstraint?: PointerActivationConstraint;

    axis?: Axis;

    handle?: boolean;

    modifiers?: Modifiers;

    buttonStyle?: React.CSSProperties;

    style?: React.CSSProperties;

    label?: string;

    showConstraintCue?: boolean;
}

export function DraggableStory({
    activationConstraint,

    axis,

    handle,

    label = "Go ahead, drag me.",

    modifiers,

    style,

    buttonStyle,

    showConstraintCue,
}: Props) {
    const [{ x, y }, setCoordinates] =
        useState<Coordinates>(defaultCoordinates);

    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint,
    });

    const touchSensor = useSensor(TouchSensor, {
        activationConstraint,
    });

    const keyboardSensor = useSensor(KeyboardSensor, {});

    const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

    return (
        <DndContext
            sensors={sensors}
            onDragEnd={({ delta }) => {
                setCoordinates(({ x, y }) => {
                    return {
                        x: x + delta.x,

                        y: y + delta.y,
                    };
                });
            }}
            modifiers={modifiers}
        >
            <DraggableItem
                axis={axis}
                label={label}
                handle={handle}
                top={y}
                left={x}
                style={style}
                buttonStyle={buttonStyle}
            />
        </DndContext>
    );
}

interface DraggableItemProps {
    label: string;

    handle?: boolean;

    style?: React.CSSProperties;

    buttonStyle?: React.CSSProperties;

    axis?: Axis;

    top?: number;

    left?: number;
}

function DraggableItem({
    axis,
    label,
    style,
    top,
    left,
    handle,
    buttonStyle,
}: DraggableItemProps) {
    const { attributes, isDragging, listeners, setNodeRef, transform } =
        useDraggable({
            id: "draggable",
        });

    return (
        <Draggable
            ref={setNodeRef}
            dragging={isDragging}
            handle={handle}
            label={label}
            listeners={listeners}
            style={{ ...style, top, left }}
            buttonStyle={buttonStyle}
            transform={transform}
            axis={axis}
            {...attributes}
        />
    );
}

export const BasicSetup = () => <DraggableStory />;
