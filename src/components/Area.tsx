import { Box, Grid, Stack, styled, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { AreaState } from "../redux/state/AreasState"
import { RootState } from "../redux/state/RootState"
import AreaBoss from "./AreaBoss"
import Droppable from "./Droppable"
import AreaPortal from "./AreaPortal"
import { PortalState } from "../redux/state/PortalState"
import AreaItem from "./AreaItem"
import { DragState } from "./Draggable"
import { BossState } from "../redux/state/BossesState"
import { ItemState } from "../redux/state/ItemsState"


export default function Area(props: AreaState) {
    const { id, value, bgColor, itemIds, bossId } = props
    const { portals, bosses, items } = useSelector((state: RootState) => state)
    const dispatch = useDispatch()
    const areaBoss = bossId ? bosses[bossId] : undefined
    const state = areaBoss?.state ?? 0


    const data: DragState = areaBoss ? {...areaBoss, type: 'boss'} : {} as DragState

    const bossClickHandler = (data: DragState) => {
        dispatch({'type':'BOSSES/toggle-boss', data})
    }

    const itemClickHandler = (data: DragState) => {
        dispatch({'type':'ITEMS/toggle-item', data})
    }

    const areaPortals: PortalState[] = portals.filter(portal => portal.areaId === id)
    const AreaPortals = areaPortals.map(portal => (
        <Grid key={portal.id} item>
            <AreaPortal portal={portal} bgColor={bgColor} />
        </Grid>
    ));

    const AreaItems = itemIds.map((itemId, index) => {
        const key = id.toString() + '-' + index.toString()
        const item: ItemState = items.find(item => item.id === itemId) ?? {} as ItemState
        const ypos = item.state ? 0 : 48 
        const itemData: DragState = {...item, type: 'item'}
        return (
            <Box key={key} onClick={() => itemClickHandler(itemData)}>
                <AreaItem xpos={16 * itemId} ypos={ypos}/>
            </Box>
        )
    })

    const PortalHeader = styled(Typography)({
        display: 'flex',
        textTransform: 'uppercase',
        fontWeight: 'bolder',
        whiteSpace: 'nowrap',
        fontSize: 20,
        maxWidth: 120,
        alignSelf: 'center',
        position: 'absolute',
        left: 4,
        top: 4,
        marginRight: 16
    })

    return (
        <Droppable id={id} areaId={id} type='area' value={value}>
            <Stack direction="column" position='relative' zIndex={0}>
                <PortalHeader>{value}</PortalHeader>
                <Box minHeight={40} bgcolor={bgColor} gap={1} display='flex' flexDirection='row' flexBasis='content' flexWrap='wrap' justifyContent='flex-end' padding={0.5}>
                    <Box width={100} />
                    {AreaItems}
                </Box>
                <Grid container paddingTop={1} alignItems='center' spacing={1.5}>
                    {AreaPortals}
                    {bossId === undefined ? null : (
                        <Box onClick={() => bossClickHandler(data)}>
                            <AreaBoss xpos={16 * bossId} ypos={16 * (1 - state)} outlineColor={bgColor} />
                        </Box>
                    )}
                </Grid>
            </Stack>
        </Droppable >
    )
}