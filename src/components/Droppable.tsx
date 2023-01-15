import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export type DroppableProps = {
    type: string,
    value?: string,
    children: any
}

export default function Droppable(props: DroppableProps) {
    const id = uuidv4()
    return <DroppableInner id={id} {...props} />
}

function DroppableInner(props: any) {
    const { id, type, value, children } = props
    const { isOver, setNodeRef } = useDroppable({ id });
    const style = {
        filter: isOver ? 'brightness(70%)' : undefined,
    };
    return (
        <Box data-type={type} data-value={value} ref={setNodeRef} style={style}>
            {children}
        </Box>
    );
}