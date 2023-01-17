import { Stack } from "@mui/material"
import { useSelector } from "react-redux"
import { CHARGE_BEAM, GRAPPLE_BEAM, GRAVITY_SUIT, HIGH_JUMP, ICE_BEAM, ItemState, MORPH_BALL, MORPH_BOMBS, PLASMA_BEAM, SCREW_ATTACK, SPACE_JUMP, SPAZER_BEAM, SPEED_BOOSTER, SPRING_BALL, VARIA_SUIT, WAVE_BEAM, XRAY_SCOPE } from "../redux/state/ItemsState"
import { RootState } from "../redux/state/RootState"
import Draggable from "./Draggable"
import Item from "./Item"

export default function Items() {
    const { items } = useSelector((state: RootState) => state)

    const morphBall: ItemState = items[MORPH_BALL]
    const morphBombs: ItemState = items[MORPH_BOMBS]
    const variaSuit: ItemState = items[VARIA_SUIT]
    const gravitySuit: ItemState = items[GRAVITY_SUIT]
    const chargeBeam: ItemState = items[CHARGE_BEAM]
    const iceBeam: ItemState = items[ICE_BEAM]
    const waveBeam: ItemState = items[WAVE_BEAM]
    const spazerBeam: ItemState = items[SPAZER_BEAM]
    const plasmaBeam: ItemState = items[PLASMA_BEAM]
    const speedBooster: ItemState = items[SPEED_BOOSTER]
    const highJump: ItemState = items[HIGH_JUMP]
    const spaceJump: ItemState = items[SPACE_JUMP]
    const screwAttack: ItemState = items[SCREW_ATTACK]
    const springBall: ItemState = items[SPRING_BALL]
    const grappleBeam: ItemState = items[GRAPPLE_BEAM]
    const xrayScope: ItemState = items[XRAY_SCOPE]

    const itemMap: ItemState[] = [
        morphBall, morphBombs, variaSuit, gravitySuit, chargeBeam, iceBeam, waveBeam, spazerBeam, 
        plasmaBeam, speedBooster, highJump, spaceJump, screwAttack, springBall, grappleBeam, xrayScope
    ]


    const elements = itemMap.map((item: ItemState) => {
        const { id, value } = item
        const xpos = 16 * id
        return (
            <Draggable key={id} id={id} type='item' value={value}>
                <Item xpos={xpos} />
            </Draggable>
        )
    })

    return (
        <Stack direction='row' spacing={3}>
            {elements}
        </Stack>
    )
}