
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";








function App()
{

   


 const [user,setuser] = useState([
   {
     username:"stanly",
     password:"1234"
   },
   {
     username:"stanlyy",
     password:"12344"
   }
 ])


return(
  <div>
  
 <BrowserRouter>

 <Routes>
   <Route path="/" element={<Login user={user} setuser={setuser}/>}></Route>
   <Route path="/signup" element={<Signup user={user} setuser={setuser}/>}></Route>
   <Route path="/landing" element={<Landing/>}></Route>
   
 </Routes>

 </BrowserRouter>
</div>
)


 
} 

export default App
