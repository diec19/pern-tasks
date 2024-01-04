import {Link} from "react-router-dom"
import {Card} from "../components/ui"

const NotFound = () => {

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
    <Card>
       <h1 className="text-4x1 font-bold my-2">Page Not Found</h1>
       <h3 className="text-2x1">404</h3>

       <Link to="/">Ir a la pagina principal</Link>
    </Card>
    </div>
  )
}

export default NotFound