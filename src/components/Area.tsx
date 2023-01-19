import { Box, Grid, Stack, styled, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { AreaState } from "../redux/state/AreasState"
import { RootState } from "../redux/state/RootState"
import AreaBoss from "./AreaBoss"
import Droppable from "./Droppable"
import AreaPortal from "./AreaPortal"
import { PortalState } from "../redux/state/PortalState"
import AreaItem from "./AreaItem"


export default function Area(props: AreaState) {
    const { id, value, bgColor, itemIds, bossId } = props

    const { portals } = useSelector((state: RootState) => state)
    const areaPortals: PortalState[] = portals.filter(portal => portal.areaId === id)
    const AreaPortals = areaPortals.map(portal => (
        <Grid item>
            <AreaPortal key={portal.id} portal={portal} bgColor={bgColor} />
        </Grid>
    ));

    const AreaItems = itemIds.map((itemId, index) => {
        const key = id.toString() + '-' + index.toString()
        return (
            <AreaItem key={key} xpos={16 * itemId} />
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
                        <AreaBoss xpos={16 * bossId} outlineColor={bgColor} />
                    )}
                </Grid>
            </Stack>
        </Droppable >
    )
}