import { Stack } from "@mui/material"
import { useSelector } from "react-redux"
import { AreaState, CRATERIA, CROC, EAST_MARIDIA, GREEN_BRINSTAR, KRAID, LOWER_NORFAIR, RED_BRINSTAR, TOURIAN, UPPER_NORFAIR, WEST_MARIDIA, WRECKED_SHIP } from "../redux/state/AreasState"
import { RootState } from "../redux/state/RootState"
import Area from "./Area"

export default function Areas() {
    const { areas} = useSelector((state: RootState) => state)
    const crateria: AreaState = areas[CRATERIA]
    const greenBrinstar: AreaState = areas[GREEN_BRINSTAR]
    const redBrinstar: AreaState = areas[RED_BRINSTAR]
    const westMaridia: AreaState = areas[WEST_MARIDIA]
    const upperNorfair: AreaState = areas[UPPER_NORFAIR]
    const croc: AreaState = areas[CROC]
    const kraid: AreaState = areas[KRAID]
    const wreckedShip: AreaState = areas[WRECKED_SHIP]
    const eastMaridia: AreaState = areas[EAST_MARIDIA]
    const lowerNorfair: AreaState = areas[LOWER_NORFAIR]
    const tourian: AreaState = areas[TOURIAN]

    return (
        <Stack direction='column' spacing={1}>
            <Stack direction='row' spacing={3} pt={2}>
                <Area {...crateria} />
                <Area {...westMaridia} />
            </Stack>
            <Stack direction='row' spacing={3} pt={2}>
                <Area {...redBrinstar} />
                <Area {...greenBrinstar} />
            </Stack>
            <Stack direction='row' spacing={3} pt={2}>
                <Area {...upperNorfair} />
                <Area {...croc} />
                <Area {...kraid} />
            </Stack>
            <Stack direction='row' spacing={3} pt={2}>
                <Area {...wreckedShip} />
                <Area {...eastMaridia} />
                <Area {...lowerNorfair} />
                <Area {...tourian} />
            </Stack>
        </Stack>
    )
}