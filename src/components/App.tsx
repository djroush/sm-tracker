import * as React from 'react';

import { Box, createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import { DndContext } from '@dnd-kit/core';
import Areas from './Areas';
import Bosses from './Bosses';
import Items from './Items';
import ItemCounts from './ItemCounts';

export default function App() {
    const handleDragEnd = (event: any) => {
        const { activatorEvent, collisions } = event
        const draggable = activatorEvent?.target
        const droppable = collisions[0]?.data?.droppableContainer?.node?.current

        if (draggable && droppable) {
            const dragType = draggable.getAttribute('data-type')
            const dragValue = draggable.getAttribute('data-value')
            const dropType = droppable.getAttribute('data-type')
            const dropValue = droppable.getAttribute('data-value')
            if (dropValue) {
                console.log("Dragged [" + dragType + "=" + dragValue + "] to [" + dropType + "=" + dropValue + "]")
            } else {
                console.log("Dragged [" + dragType + "=" + dragValue + "] to [" + dropType +  "]")
            }
        }
    }

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
        
            <DndContext onDragEnd={handleDragEnd}>
                <Stack direction="row" spacing={2}>
                    <Stack direction="column" spacing={2}>
                        <Box padding={2}>
                            <Areas />
                        </Box>
                        <Stack direction="row" padding={2} spacing={9}>
                            <Items />
                            <Bosses />
                        </Stack>
                    </Stack>
                    <ItemCounts />
                </Stack>
            </DndContext>
        </ThemeProvider>
    )
}

