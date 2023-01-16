import * as React from 'react';

import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { DndContext } from '@dnd-kit/core';
import Areas from './Areas';
import Bosses from './Bosses';
import Items from './Items';
import ItemCounts from './ItemCounts';
import { useDispatch } from 'react-redux';
import { idText } from 'typescript';

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

            if (dragValue) {
                if (dropValue) {
                    console.log("Dragged [" + dragType + "=" + dragValue + "] to [" + dropType + "=" + dropValue + "]")
                } else {
                    console.log("Dragged [" + dragType + "=" + dragValue + "] to [" + dropType + "]")
                }
            }
            dispatch({ type: "AREA/update-tracker", value: dragEvent })
        }
    }
    const defaultTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={defaultTheme}>
            <DndContext onDragEnd={handleDragEnd}>
                <Stack direction="row" spacing={1}>
                    <Stack direction="column" spacing={2}>
                        <Box padding={2}>
                            <Areas />
                        </Box>
                        <Box padding={2}>
                            <Items />
                        </Box>
                        <Stack direction="row" paddingX={1} paddingY={1} spacing={12}>
                            <ItemCounts />
                            <Bosses />
                        </Stack>
                    </Stack>
                </Stack>
            </DndContext>
        </ThemeProvider>
    )
}

