import { Stack } from "@mui/material"
import { useSelector } from "react-redux"
import { BossState, DRAYGON, KRAID, PHANTOON, RIDLEY } from "../redux/state/BossesState"
import { RootState } from "../redux/state/RootState"
import Boss from "./Boss"
import Draggable from "./Draggable"

export default function Bosses() {
    const { bosses } = useSelector((state: RootState) => state)
    const kraid: BossState = bosses[KRAID]
    const phantoon: BossState = bosses[PHANTOON]
    const draygon: BossState = bosses[DRAYGON]
    const ridley: BossState = bosses[RIDLEY]
    
    const bossMap = [kraid, phantoon, draygon, ridley]

    const elements = bossMap.map((boss) => {
        const {id, value, state} = boss
        const xpos = 16*id
        return (
            <Draggable key={id} id={id} type='boss' value={value} state={state}>
                <Boss xpos={xpos}/>
            </Draggable>
        )
    })

    return (
        <Stack direction='row' spacing={3}>
            {elements}
        </Stack>
    )
}