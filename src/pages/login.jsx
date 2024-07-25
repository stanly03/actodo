import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"



function Login(props) {
    const navigate = useNavigate()
    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()
    const [ruser, setruser] = useState(true)

    const user = props.user
   
    function handleuchange(evt) {
        seteusername(evt.target.value)

    }

    function handlepchange(evt) {
        setepassword(evt.target.value)

    }

    function cheak() {

        var userfound = false


        user.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login Successfull")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
        })
        if(userfound===false)
        {
            console.log("please signup beforeyou login")
            setruser(false)
        }



    }





    return (<div className="bg-black p-10">
        <div className="bg-gray-500 border rounded-md p-4">
            <h1 className="text-3xl text-white">Hey hi</h1>

            {ruser ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-600 text-2xl w-max p-1 m-1 animate-pulse">please signup before you login</p>}
            <div className="flex flex-col">
                <input type="text"
                    className="w-52 border rounded-md p-1 m-1"
                    placeholder="enter you name"
                    onChange={handleuchange}
                />

                <input type="text"
                    className="w-52 border rounded-md p-1 m-1"
                    placeholder="enter your password"
                    onChange={handlepchange}
                />


                <button
                    className="bg-lime-300 w-max p-1  broder rounded-md hover:bg-red-700 text-black m-1" onClick={cheak} >Login</button>

                <p>Already have an account?</p><Link to={"/Signup"} className="underline hover:text-green-300">Signup</Link>
            </div>
        </div>
    </div>)
}

export default Login