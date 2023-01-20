import { Box, Stack } from "@mui/material"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { BossState, DRAYGON, KRAID, PHANTOON, RIDLEY } from "../redux/state/BossesState"
import { RootState } from "../redux/state/RootState"
import Boss from "./Boss"
import Draggable, { DragState } from "./Draggable"

export default function Bosses() {
    const { bosses } = useSelector((state: RootState) => state)
    const dispatch = useDispatch()
    const kraid: BossState = bosses[KRAID]
    const phantoon: BossState = bosses[PHANTOON]
    const draygon: BossState = bosses[DRAYGON]
    const ridley: BossState = bosses[RIDLEY]

    const bossMap = [kraid, phantoon, draygon, ridley]

    const clickHandler = (data: DragState) => {
        dispatch({'type':'BOSSES/toggle-boss', data})
    }
    const elements = bossMap.map((boss) => {
        const { id, value, state } = boss
        const xpos = 16 * id
        const ypos = 16 * (1- state)
        return (
            <Draggable key={id} id={id} type='boss' value={value} state={state} clickHandler={clickHandler}>
                <Boss xpos={xpos} ypos={ypos}/>
            </Draggable>
        )
    })

    return (
        <Stack direction='row' spacing={3}>
            {elements}
        </Stack>
    )
}