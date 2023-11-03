import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from '../../Context'
import Home from '../Home'
import Contact from '../Contact'
import './index.css'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckouSIdeMenu'

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
        { path: '/*', element: <NotFound/>}
    ])
    return routes
}
//Componente app
function App() {
    return(
        <CartContextProvider>
            <BrowserRouter>
            
                <Navbar/>
                <br />
                <AppRoutes/>
                <CheckoutSideMenu/>

            </BrowserRouter>
        </CartContextProvider>
        

    )
}

export default App