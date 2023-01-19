import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Box } from '@mui/material';

export type DroppableProps = {
    id: number,
    areaId?: number,
    type: string,
    value?: string,
    state?: string,
    children: any
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
    const { id, areaId, type, value, dropId, children } = props
    const { setNodeRef } = useDroppable({ id: dropId });
  

    return (
        <Box data-id={id} data-area-id={areaId} data-type={type} data-value={value}
            ref={setNodeRef} position='relative' >
            {children}
        </Box>
    );
}