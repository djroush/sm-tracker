import * as React from 'react';

import { createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import Areas from './Areas';
import Bosses from './Bosses';
import Items from './Items';
import ItemCounts from './ItemCounts';
import { useDispatch } from 'react-redux';
import RemoveBossIcon from './RemoveBoss';

export default function App() {
    const dispatch = useDispatch()

    const handleDragEnd = (event: any) => {
        const dragData = event?.active?.data?.current 
        const dropData = event?.over?.data?.current

        if (dragData && dropData) {
            const dragEvent = {
                drag: dragData,
                drop: dropData,
                dragId: dragData.id , dragAreaId: dragData.areaId, dragType: dragData.type, dragValue: dragData.value,
                dropId: dropData.id , dropAreaId: dropData.areaId, dropType: dropData.type, dropValue: dropData.value,
            }

            if (dragData.type === 'entrance' && dropData.type === 'area') {
                return;
            }
            console.log("Dragged [" + dragData.type + "=" + dragData.value + "] to [" + dropData.type + "=" + dropData.value + "]")
            switch (dragData.type) {
                case 'entrance': dispatch({ type: "PORTAL/update-portals", event: dragEvent })
                    break;
                case 'boss': dispatch({ type: "BOSS/update-boss", event: dragEvent })
                    break;
                case 'item': dispatch({ type: "ITEMS/update-item", event: dragEvent })
                    break;
                case 'itemCount': dispatch({ type: "ITEMCOUNT/update-itemCount", event: dragEvent })
                    break;
                case 'icon': dispatch({ type: "BOSS/delete-boss", event: dragEvent })
                default:
            }
        }
    }

    const defaultTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8
            },
        })
    )

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <DndContext sensors={sensors} onDragEnd={handleDragEnd} >
                <Stack direction="row" spacing={1} margin={2}>
                    <Stack direction="column" gap={2}>
                        <Areas />
                        <Items />
                        <Stack direction="row" justifyContent='space-between' paddingRight={1.25}>
                            <ItemCounts />
                            <Bosses />
                            <RemoveBossIcon />
                        </Stack>
                    </Stack>
                </Stack>
            </DndContext>
        </ThemeProvider>
    )
}

