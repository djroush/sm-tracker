import { Box, Stack, Typography } from "@mui/material"
import { portalMap } from "../models/Portal"
import AreaBoss from "./AreaBoss"
import AreaItem from "./AreaItem"
import Draggable, { DraggablePortalProps } from "./Draggable"
import Droppable from "./Droppable"
import Portal from "./Portal"

export type AreaProps = {
    id: number,
    value: string,
    bgColor: string,
    boss?: boolean
}

export default function Area(props: AreaProps) {
    const { id, value, bgColor, boss } = props
    const portals: DraggablePortalProps[] = portalMap[id]

    //TODO: unhardcode these
    const areaType = "boss"
    const areaValue = "Boss"
    const areaState = "default"
    const areaXpos = 0

    const elements = portals.map(portal => {
        return (
            <Portal portal={{ entry: portal, exit: null }} />
        )
    })
    return (
        <Droppable type='area' value={value}>
            <Box position='relative' bgcolor={bgColor} >
                <Stack direction='row' justifyContent="space-between" alignItems='center' padding={0.5}>
                    <Typography textTransform='uppercase' fontWeight='bolder'>{value}</Typography>
                    {/* TODO: add fix item count here */}
                    <Stack direction='row' spacing={1}>
                        <AreaItem type="item" value="morphBall" state='default' xpos={0} />
                        <AreaItem type="item" value="variaSuit" state='default' xpos={32} />
                        <AreaItem type="item" value="waveBeam" state='default' xpos={96} />
                        <AreaItem type="item" value="plasmaBeam" state='default' xpos={128} />
                    </Stack>
                </Stack>

                <Stack direction='row' alignItems='center'>
                    {elements}
                    {!boss ? null : (
                        <Stack direction='column' sx={{ border: '2px solid white', minHeight: '100%' }}>
                            <Typography textAlign='center'>Boss</Typography>
                            <Stack direction='row'>
                                <Draggable key={areaType}>
                                    <AreaBoss type={areaType} value={areaValue} state={areaState} xpos={areaXpos} />
                                </Draggable>
                            </Stack>
                        </Stack>
                    )}
                </Stack>
            </Box>
        </Droppable >
    )
}