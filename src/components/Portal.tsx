import { Stack, Typography, useTheme } from "@mui/material"
import Draggable, { DraggablePortalProps } from "./Draggable"
import Droppable from "./Droppable"
import Entry from "./Entry"

export type PortalProps = {
    portal: any
}
type Portal = {
    entry: DraggablePortalProps,
    exit?: DraggablePortalProps
}

export default function Portal(props: PortalProps) {
    const { portal } = props
    const { entry, exit } = portal
    const { areaId: entryAreaId, type: entryType, value: entryValue, xpos: entryXpos, ypos: entryYpos, state: entryState } = entry
    const { type: exitType, value: exitValue, xpos: exitXpos, ypos: exitYpos, state: exitState } = exit ?? {}

    const theme = useTheme()
    const color = theme.palette.text.primary
    const border = `2px solid ${color}`

    return (
        <Droppable type='portal' value={entryValue}>
            <Stack direction='column' border={border}>
                <Typography textAlign='center' color={color}>{entryValue}</Typography>
                <Stack direction='row'>
                    <Draggable key={entryType}>
                        <Entry areaId={entryAreaId} type={entryType} value={entryValue} state={entryState} xpos={entryXpos} ypos={entryYpos} />
                    </Draggable>
                    {/*TODO: make an exit and remove the image and put area background and portal name */}
                    <Entry areaId={0} type={exitType ?? ''} value={exitValue ?? ''} state={exitState ?? ''} xpos={exitXpos ?? 320} ypos={exitYpos ?? 0} />
                </Stack>
            </Stack>
        </Droppable>
    )
}