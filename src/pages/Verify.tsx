import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"


export default function Verify() {
const location = useLocation()
const [email] = useState(location.state)
const navigate = useNavigate()
console.log(location.state)

useEffect(()=> {
if(!email){
navigate("/")
}
},[email])
  return (
    <div>
       <h1>This is the Varify page</h1>
    </div>
  )
}
