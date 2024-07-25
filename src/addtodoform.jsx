import { useState } from "react"
import Todocontainer from "./components/todocontainer"
function Addtodoform(props) {
    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    const [newactivity,setnewactivity]=useState("")


    function handlechange(evt)
    {
        setnewactivity(evt.target.value)
    }


     function addactivity ()
     {
        setactivityarr([...activityarr,{id:activityarr.length+1,acttivity:newactivity}])
     }





    return (
        <div>


            <h1 className="text-2xl font-medium">Manage  Activity</h1>
            <input value={newactivity} onChange={handlechange} type="text " className=" p-1 bg-transparent  border border-black" />
            <button onClick={addactivity} className="bg-black text-white p-1 border border-black">
                Add
            </button>
        </div>




    )
}
export default Addtodoform

