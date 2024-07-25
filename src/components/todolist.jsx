

import Todoitem from "./todoitem"

function Todolist(props) {
   
    const activityarr = props.activityarr
    const setactivityarr= props.setactivityarr

     
    return (
        <div className="flex-grow">
            <div className="bg-[#BDB4EA] border rounded-md p-2">
                <h1 className="text-2xl font-medium text-red-600">Activity!!!:</h1>
                {activityarr.length===0?<p>you have not add nothig</p>:""} 
              {
                activityarr.map(function(item,index)
            {
               return <Todoitem activity={item.activity} index={index} id={item.id} activityarr={activityarr} setactivityarr={setactivityarr}/>
            })
              }
              
            </div>
        </div>
      


    )
}

export default Todolist

