import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';import Draggable from './Draggable';


export default function RemoveBossIcon() {
    return (
        <Draggable key='removeBoss' id={0} type='icon' value='Remove Boss'>
            <RemoveCircleTwoToneIcon sx={{ 'title':'Remove Boss', fontSize:60, color:'#BDBDBD', position: 'absolute', zIndex: -1000 }} width={64} height={64} />
        </Draggable>
    )
}