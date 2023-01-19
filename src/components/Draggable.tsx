import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities'
import { Box } from '@mui/material';

export type DraggableProps = {
  id: number,
  areaId?: number,
  type: string,
  value: string,
  state?: string,
  children: any
}


//Still used by Entrance for now
export type DraggableInnerProps = DraggableProps & {
  dragId: string
}

export default function Draggable(props: DraggableProps) {
  const { id, type } = props
  const dragId = type + '-' + (id ?? 0)

  return <DraggableInner dragId={dragId} {...props} />
}

function DraggableInner(props: DraggableInnerProps) {
  const { id, areaId, type, value, dragId, children } = props
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: dragId });
  const { width, height } = type === 'entrance' ? {width:143,height:64} : {width:64,height:64}
  const style = transform ? {
    transform: CSS.Translate.toString(transform),
  } : {}

  return (
    <Box data-id={id} data-area-id={areaId} data-type={type} data-value={value}
      position="relative" width={width} height={height} 
      ref={setNodeRef} style={style} {...listeners} {...attributes}>
          {children}
    </Box>
  );
}