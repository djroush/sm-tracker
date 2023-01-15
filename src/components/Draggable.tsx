import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities'
import { Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export type DraggableProps = {
    type: string,
    value: string,
    state: string,
    xpos: number
}
export type DraggablePortalProps = DraggableProps & {
  areaId: number
  ypos: number
}

export default function Draggable(props: any) {
  const id = uuidv4()
  return <DraggableInner id={id} {...props} />
}

function DraggableInner(props: any) {
    const {id, children} = props
    const {attributes, listeners, setNodeRef, transform} = useDraggable({id: id});
    const style = transform ? {
        transform: CSS.Translate.toString(transform),
      } : undefined;
        return (
        <Button ref={setNodeRef} style={style} {...listeners} {...attributes}>
          {children}
        </Button>
      );    
}