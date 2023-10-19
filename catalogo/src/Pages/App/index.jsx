import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Contact from '../Contact'
import './index.css'
import NotFound from '../NotFound'
import Cart from '../Cart'
import Navbar from '../../Components/Navbar'
//import 'boxicons'



// function App(){
//     return(
//     <div>
//         ola papu :v
//     </div>
//     )
// }

//Declaración de rutas
const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/home', element: <Home/>},
        { path: '/contacto', element: <Contact/>},
        { path: '/cart', element: <Cart/>},
        { path: '/*', element: <NotFound/>}
    ])
    return routes
}

const App = () => {
    return(
        <BrowserRouter>
            
            <Navbar/>
            <br />
            <AppRoutes/>
            
        </BrowserRouter>

    )
}

export default App