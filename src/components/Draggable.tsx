import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities'
import { Box } from '@mui/material';

export type DragState = {
  id: number,
  areaId?: number,
  type: string,
  value: string,
  state?: number,
}

export type DraggableProps = DragState & {
  children: JSX.Element|JSX.Element[]|React.ReactFragment,
  clickHandler?: (dragState: DragState) => void
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
  const { type } = props
  const { dragId, children, clickHandler, ...dataState } = props
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: dragId, data: { ...dataState } });
  const { width, height } = type === 'entrance' ? { width: 143, height: 64 } : { width: 64, height: 64 }
  const style = transform ? {
    transform: CSS.Translate.toString(transform),
  } : {}

  const Draggable: JSX.Element = (
    <Box position="relative" width={width} height={height} alignItems='center' justifyContent='center'
      ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </Box>
  );

  if (clickHandler) {
    return (
      <Box onClick={() => clickHandler(dataState)}>{Draggable}</Box>
    )
  }

  return Draggable
}