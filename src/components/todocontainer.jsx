import Addtodoform from "../addtodoform"
import Todolist from "./todolist"
import { useState } from "react"
function Todocontainer() {
    const[activityarr,setactivityarr]= useState([
        {
            id: 1,
            activity:"stay hydrated"
        },
        {
            id: 2,
            activity:"wake up at 6 am"
        },{
            id: 3,
            activity:"study well"
        },
        {
            id: 4,
            activity:"go to gym everyday"
        }
    ])
    return (
        <div>
        


            <div className="flex gap-5 flex-wrap">
                <Addtodoform activityarr={activityarr} setactivityarr={setactivityarr} />

                <Todolist activityarr={activityarr} setactivityarr={setactivityarr}/>









            </div>
        </div>

    )
}

export default Todocontainer