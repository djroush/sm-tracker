import { Stack } from "@mui/material"
import { useSelector } from "react-redux"
import { BossState, DRAYGON, KRAID, PHANTOON, RIDLEY } from "../redux/state/BossesState"
import { RootState } from "../redux/state/RootState"
import Boss from "./Boss"
import Draggable from "./Draggable"
import Droppable from "./Droppable"

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
            <Draggable key={id}><Boss id={id} type='boss' value={value} state={state} xpos={xpos}/></Draggable>
        )
    })

    return (
        <Droppable type='bosses'>
            <Stack direction='row' spacing={1}>
                {elements}
            </Stack>
        </Droppable>
    )
}