import { Outlet } from "react-router"
import CommonLayout from "./components/layout/CommonLayout"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <CommonLayout> 
      <Outlet></Outlet>
    </CommonLayout>
  )
}

export default App
