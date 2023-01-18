import * as React from 'react';

import { createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import { DndContext } from '@dnd-kit/core';
import Areas from './Areas';
import Bosses from './Bosses';
import Items from './Items';
import ItemCounts from './ItemCounts';
import { useDispatch } from 'react-redux';

export default function App() {
    const dispatch = useDispatch()

    const handleDragEnd = (event: any) => {
        const { activatorEvent, collisions } = event
        const draggable = activatorEvent?.target
        const droppable = collisions[0]?.data?.droppableContainer?.node?.current

        if (draggable && droppable) {
            const dragId = draggable.getAttribute('data-id')
            const dragAreaId = draggable.getAttribute('data-area-id')
            const dragType = draggable.getAttribute('data-type')
            const dragValue = draggable.getAttribute('data-value')
            const dropId = droppable.getAttribute('data-id')
            const dropAreaId = droppable.getAttribute('data-area-id')
            const dropType = droppable.getAttribute('data-type')
            const dropValue = droppable.getAttribute('data-value')

            const dragEvent = {
                dragId, dragAreaId, dragType, dragValue, dropId, dropAreaId, dropType, dropValue
            }

            if (dragType === 'entrance' && dropType === 'area') {
                return;
            }
            console.log("Dragged [" + dragType + "=" + dragValue + "] to [" + dropType + "=" + dropValue + "]")
            switch (dragType) {
                case 'entrance': dispatch({ type: "PORTAL/update-portals", value: dragEvent })
                break;
                case 'boss': dispatch({ type: "AREA/update-boss", value: dragEvent })
                break;
                case 'item': dispatch({ type: "AREA/update-item", value: dragEvent })
                break;
                case 'itemCount': dispatch({ type: "AREA/update-itemCount", value: dragEvent })
                default: 
            }
        }
    }

    const defaultTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <DndContext onDragEnd={handleDragEnd}>
                <Stack direction="row" spacing={1} margin={2}>
                    <Stack direction="column" gap={2}>
                        <Areas />
                        <Items />
                        <Stack direction="row" justifyContent='space-between' paddingRight={1.25}>
                            <ItemCounts />
                            <Bosses/>
                        </Stack>
                    </Stack>
                </Stack>
            </DndContext>
        </ThemeProvider>
    )
}

