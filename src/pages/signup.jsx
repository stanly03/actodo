import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Signup(props) {
    const navigate = useNavigate()
    const user = props.user
    const setuser= props.setuser
    

    const [eusername,seteusername] = useState()
    const [epassword,setepassword] = useState()


    function handleuchange(evt)
    {
        seteusername(evt.target.value)

    }
    
    function handlepchange(evt)
    {
        setepassword(evt.target.value)

    }

    function addusers()
    {
        setuser([...user,{username:eusername,password:epassword}])
        navigate("/")
    }



    return (<div className="bg-black p-10">
        <div className="bg-gray-500 border rounded-md p-4">
            <h1 className="text-3xl text-white">Hey hi</h1>
            <p>I help you manage your activities after you login :)</p>
            <div className="flex flex-col">
                <input type="text"
                    className="w-52 border rounded-md p-1 m-1"
                    placeholder="enter your name" 
                    onChange={handleuchange}/>

                <input type="text"
                    className="w-52 border rounded-md p-1 m-1"
                    placeholder="enter your password"
                    onChange={handlepchange} />

                <input type="text"
                    className="w-52 border rounded-md p-1 m-1"
                    placeholder="confirm password" />

                <button
                    className="bg-purple-400 w-max p-1  broder rounded-md hover:bg-red-700 text-white m-1" onClick={addusers}>Signup</button>

                <p>Already have an account?</p><Link to={"/"} className="underline hover:text-green-300">login</Link>
            </div>
        </div>
    </div>)
}

export default Signup