import { Box, Stack, Typography } from "@mui/material"
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
    const portalElements = areaPortals.map(portal => <AreaPortal key={portal.id} portal={portal} />)
    const itemElements = itemIds.map(itemId => <AreaItem key={itemId} xpos={16*itemId} />)

    return (
        <Droppable id={id} areaId={id} type='area' value={value}>
            <Stack direction="column" position='relative' zIndex={0} spacing={1}>
                <Stack direction='row' justifyContent="space-between" alignItems='center' height={32} bgcolor={bgColor} >
                    <Typography textTransform='uppercase' fontWeight='bolder' fontSize={20} paddingLeft={1}>{value}</Typography>
                    {/* TODO: add fix item count here */}
                    <Stack direction='row' spacing={1} justifyContent='center'>
                        {itemElements}
                    </Stack>
                </Stack>

                <Stack direction='row' alignItems='center' spacing={1}>
                    <Stack direction='row' spacing={1.5}>
                    {portalElements}
                    </Stack>

                    {/*TODO: unhardcode this */}
                    {bossId === undefined ? null : (
                        <AreaBoss xpos={16 * bossId} />
                    )}
                </Stack>
            </Stack>
        </Droppable >
    )
}