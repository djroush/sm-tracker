import { Stack } from "@mui/material"
import { crateria, greenBrinstar, westMaridia, redBrinstar, upperNorfair, croc, kraid, wreckedShip, eastMaridia, lowerNorfair, tourian } from "../models/Area"
import Area from "./Area"

export default function Areas() {
    return (
        <Stack direction='column' spacing={3}>
            <Stack direction='row' spacing={3}>
                <Area {...crateria} />
                <Area {...westMaridia} />
            </Stack>
            <Stack direction='row' spacing={3}>
                <Area {...greenBrinstar} />
                <Area {...redBrinstar} />
            </Stack>
            <Stack direction='row' spacing={3}>
                <Area {...upperNorfair} />
                <Area {...croc} />
                <Area {...tourian} />
            </Stack>
            <Stack direction='row' spacing={3}>
                <Area boss {...kraid} />
                <Area boss {...wreckedShip} />
                <Area boss {...eastMaridia} />
                <Area boss {...lowerNorfair} />
            </Stack>
        </Stack>
    )
}