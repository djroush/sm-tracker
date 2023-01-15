import { DraggablePortalProps } from "../components/Draggable"
import { areaMap } from "./Area"

const areaPortals: string[][] = [
    [],                                                                         //Unknown
    ['Kago', 'G4', 'Crab', 'Moat', 'Retro PBs'],                                //Crateria
    ['West Elev', 'Green Hills', 'Noob Bridge'],                               //Green Brinstar    
    ['Top Elev', 'Top Exit', 'Mid Tower', 'Tube', 'Bottom Above', 'Bottom Below'], //Red Brinstar
    ['Red Fish', 'Main Street', 'Map Station', 'Crab Shaft'],                   //West Maridia
    ['Top Left', 'Top Right', 'Croc Entry', 'Lava Dive', 'Back Door'],          //Upper Norfair
    ['Croc'],                                                                   //Crocomire
    ['Kraid'],                                                                  //Kraid
    ['West Ocean', 'Crab Maze'],                                                //Wrecked Ship
    ['Aqueduct', 'Highway'],                                                    //East Maridia
    ['Ridley Mouth', 'Escape'],                                                 //Lower Norfair
    ['Tourian']                                                                 //Tourian
]

export const portalMap: DraggablePortalProps[][] = areaPortals.map((portals, areaId) => {
    const areaColor = areaMap[areaId].bgColor
     
    return portals.map((portal, xindex) => { 
        return {
            id: xindex, areaId, areaColor, value:portal, xpos: 64*xindex, ypos: 64*areaId, type: 'portal', state: 'active'
        }
    })
})
