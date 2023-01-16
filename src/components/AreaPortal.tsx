import { Stack, Typography, useTheme } from "@mui/material"
import { PortalState } from "../redux/state/PortalState"
import Draggable from "./Draggable"
import Droppable from "./Droppable"

export type AreaPortalProps = {
    portal: PortalState
}

export default function AreaPortal(props: AreaPortalProps) {
    const { portal } = props
    const { id, areaId, entrance, exit } = portal

    const theme = useTheme()
    const color = theme.palette.text.primary
    const border = `2px solid ${color}`
    const sx = {backgroundColor: theme.palette.background.default}

    return (
        <Droppable type='portal' value={entrance} >
            <Stack direction='column' border={border} minWidth={160}>
                <Draggable data-id={id} data-area-id={areaId} data-type='portal'>
                    <Typography textAlign='center' padding={0.5} color={color}>{entrance}</Typography>
                </Draggable>
                <Typography sx={sx} textAlign='center' padding={0.5} textTransform='uppercase' color={color}>{exit}&nbsp;</Typography>
            </Stack>
        </Droppable>
    )

    //Image based implementation of portal
    // return (
    //     <Droppable type='portal' value={entryValue}>
    //         <Stack direction='column' border={border}>
    //             <Typography textAlign='center' color={color}>{entryValue}</Typography>
    //             <Stack direction='row'>
    //                 <Draggable key={entryType}>
    //                     <Entry areaId={entryAreaId} type={entryType} value={entryValue} state={entryState} xpos={entryXpos} ypos={entryYpos} />
    //                 </Draggable>
    //                 {/*TODO: make an exit and remove the image and put area background and portal name */}
    //                 <Entry areaId={0} type={exitType ?? ''} value={exitValue ?? ''} state={exitState ?? ''} xpos={exitXpos ?? 320} ypos={exitYpos ?? 0} />
    //             </Stack>
    //         </Stack>
    //     </Droppable>
    // )
}