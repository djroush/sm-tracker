import { Box, Divider, Stack, Typography, useTheme } from "@mui/material"
import { PortalState } from "../redux/state/PortalState"
import Draggable from "./Draggable"
import Droppable from "./Droppable"

export type AreaPortalProps = {
    portal: PortalState,
    bgColor: string
}

export default function AreaPortal(props: AreaPortalProps) {
    const { portal, bgColor } = props
    const { id, areaId, entrance, exit, exitColor } = portal

    const theme = useTheme()
    const color = theme.palette.text.primary
    const border = `2px solid ${color}`
    const themeBgColor = theme.palette.background.default

    const hasPortal = exit && exitColor
    const testing:  string|null|JSX.Element = (hasPortal && exit) ?? <>&nbsp;</>
    const exitBgColor = (hasPortal && exitColor) ?? themeBgColor


//    const test = exit && exitColor ? exit : {&nbsp;
    return (
        <Droppable id={id} areaId={areaId} type='areaPortal' value={entrance}>
                <Draggable id={id} areaId={areaId} type='entrance' value={entrance}>
                <Box zIndex={-999} height='100%' width='100%' position='absolute' border={border}/>
                    <Box zIndex={-1003} position='absolute' bgcolor={bgColor} width='100%' height='50%'/>
                    <Typography zIndex={-1001} position='absolute' whiteSpace='nowrap' top='0%'left='50%' bgcolor={bgColor} textAlign='center'  height={30} fontWeight='bolder' fontSize={20} color={color} style={{transform:'translateX(-50%)'}}>
                        {entrance}
                    </Typography>
                </Draggable>
                <Box zIndex={-1003} position='absolute' bgcolor={exitBgColor} top='50%' width='100%' height='50%'/>
                    <Typography zIndex={-1001} position='absolute' whiteSpace='nowrap' top='50%'left='50%' bgcolor={exitBgColor} textAlign='center'  height={30} fontWeight='bolder' fontSize={20} color={color} style={{transform:'translateX(-50%)'}}>
                        {testing}
                    </Typography>
        </Droppable>
    )
}