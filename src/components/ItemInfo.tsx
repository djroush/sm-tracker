import { Divider, Grid, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../redux/state/RootState"

export default function ItemInfo() {
    const { itemCount } = useSelector((state: RootState) => state)
    const { found, seen, located, unknown } = itemCount

    const itemInfo = (name: string, value: number) => {
        return (
            <Grid item xs={6}>
                <Typography fontWeight='bold' fontSize={16} textAlign='center'>{name}</Typography>
                <Divider />
                <Typography fontWeight='bold' fontSize={20} textAlign='center'>{value}</Typography>
            </Grid>
        )
    }

    return (
        <Grid container maxWidth='12%'>
            {itemInfo('Found', found)}
            {itemInfo('Seen', seen)}
            {itemInfo('Located', located)}
            {itemInfo('Unknown', unknown)}
        </Grid>
    )
}