import { Box, Divider, Stack, Typography, useTheme } from "@mui/material"
import { PortalState } from "../redux/state/PortalState"
import Draggable from "./Draggable"
import Droppable from "./Droppable"

export type AreaPortalProps = {
    portal: PortalState
}

export default function AreaPortal(props: AreaPortalProps) {
    const { portal } = props
    const { id, areaId, entrance, entranceColor, exit, exitColor } = portal

    const theme = useTheme()
    const color = theme.palette.text.primary
    const border = `2px solid ${color}`
    const bgColor = theme.palette.background.default

    return (
        <Droppable id={id} areaId={areaId} type='areaPortal' value={entrance}>
            <Stack display='flex' direction='column' border={border}>
                <Draggable id={id} areaId={areaId} type='entrance' value={entrance}>
                    <Box zIndex={-1001} position='absolute' bgcolor={entranceColor} width='100%' height='100%'/>
                    <Typography zIndex={-1000} position='absolute' whiteSpace='nowrap' fontWeight='bolder' fontSize={20} left='50%' top='50%' color={color} style={{transform:'translate(-50%, -50%)'}}>
                        {entrance}
                    </Typography>
                </Draggable>
                <Divider light/>
                <Divider/>
                {(exit && exitColor) ? (
                    <Typography bgcolor={exitColor} textAlign='center' whiteSpace='nowrap' height={30} fontWeight='bolder' fontSize={20} color={color} >{exit}</Typography>
                ) : (
                    <Typography bgcolor={bgColor} textAlign='center' whiteSpace='nowrap' height={30}>&nbsp;</Typography>
                )}
            </Stack>
        </Droppable>
    )
}