import { Box, Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { AreaState } from "../redux/state/AreasState"
import { RootState } from "../redux/state/RootState"
import AreaBoss from "./AreaBoss"
import AreaItem from "./AreaItem"
import Droppable from "./Droppable"
import AreaPortal from "./AreaPortal"
import { PortalState } from "../redux/state/PortalState"


export default function Area(props: AreaState) {
    const { id, value, bgColor, bossId } = props

    //TODO: unhardcode these
    const areaType = "boss"
    const areaValue = "Boss"
    const areaState = "default"
    const areaXpos = 0

    const {portals} = useSelector((state: RootState) => state)
    const areaPortals:PortalState[] = portals.filter(portal => portal.areaId === id)
    const elements = areaPortals.map(portal => <AreaPortal key={portal.id} portal={portal} />)
        
    return (
        <Droppable type='area' value={value}>
            <Box position='relative' bgcolor={bgColor} padding={1} >
                <Stack direction='row' justifyContent="space-between" alignItems='center' paddingY={0.5}>
                    <Typography textTransform='uppercase' fontWeight='bolder' fontSize={20}>{value}</Typography>
                    {/* TODO: add fix item count here */}
                    <Stack direction='row' spacing={1} justifyContent='center' paddingY={0.5} minHeight={40}>
                        {id % 2 === 1 ? null : (<>
                        <AreaItem id={1} type="item" value="morphBall" state='default' xpos={16*(id+1)} />
                        <AreaItem id={id} type="item" value="variaSuit" state='default' xpos={16*id} />
                        </>)}
                    </Stack>
                </Stack>

                <Stack direction='row' alignItems='center'>
                    {elements}
                    {!bossId ? null : (
                        <Box justifyContent='center' margin={1}>
                            <AreaBoss id={0} type={areaType} value={areaValue} state={areaState} xpos={areaXpos} />
                        </Box>
                    )}
                </Stack>
            </Box>
        </Droppable >
    )
}