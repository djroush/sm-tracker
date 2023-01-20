import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Box } from '@mui/material';

export type DroppableProps = {
    id: number,
    areaId?: number,
    type: string,
    value?: string,
    state?: string,
    children: any,
    clickHandler?: (event: any) => void
}

export type DroppableInnerProps = DroppableProps & {
    dropId: string
}

export default function Droppable(props: DroppableProps) {
    const { id, type } = props
    const dropId = type + '-' + (id ?? 0)
    return <DroppableInner dropId={dropId} {...props} />
}

function DroppableInner(props: DroppableInnerProps) {
    const { dropId, children, clickHandler, ...dataState } = props
    const { setNodeRef } = useDroppable({ id: dropId, data: dataState });

    const Droppable: JSX.Element = (
        <Box ref={setNodeRef} position='relative' >
            {children}
        </Box>
    );

    if (clickHandler) {
        return (
            <Box onClick={() => clickHandler(dataState)}>{Droppable}</Box>
        )
    }

    return Droppable;
}