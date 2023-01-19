import { Box, Typography } from "@mui/material"

export type PortalDoorProps = {
    name: string|JSX.Element
    color: string,
    bgColor: string
    exit?: boolean
}

export default function PortalDoor(props: PortalDoorProps) {
    const { name, color, bgColor, exit  } = props

    const top = exit ? 31 : 0

    return (
        <>
            <Box zIndex={-1003} position='absolute' bgcolor={bgColor} top={top} width='100%' height={30} />
            <Typography zIndex={-1001} position='absolute' whiteSpace='nowrap' top={top} left='50%' textAlign='center' fontWeight='bolder' fontSize={20} color={color} style={{ transform: 'translateX(-50%)' }}>
                {name}
            </Typography>

        </>
    )
}