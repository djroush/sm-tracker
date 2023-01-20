import { Box, useTheme } from "@mui/material"
import { PortalState } from "../redux/state/PortalState"
import Draggable from "./Draggable"
import Droppable from "./Droppable"
import PortalDoor from "./PortalDoor"

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
    const exitName: string | null | JSX.Element = (hasPortal && exit) ?? <>&nbsp;</>
    const exitBgColor = (hasPortal && exitColor) ?? themeBgColor

    return (
        <Droppable id={id} areaId={areaId} type='areaPortal' value={entrance}>
            <Box zIndex={-999} position='absolute' width={143} height={60} padding={0.25} border={border} />
            <Draggable id={id} areaId={areaId} type='entrance' value={entrance}>
                <PortalDoor name={entrance} color={color} bgColor={bgColor}/>
            </Draggable>
            <PortalDoor name={exitName??''} color={color} bgColor={exitBgColor} exit/>
        </Droppable>
    )
}