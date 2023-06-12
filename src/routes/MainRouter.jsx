import { useRoutes } from 'react-router-dom'

//Pages
import Info from '../pages/info/Info'
import Plan from '../pages/plan/Plan'

const MainRouter = () => {
  const router = useRoutes([
    {path:'/', element: <Info />},
    {path:'/plan', element: <Plan />},
  ])

  return router
}

export default MainRouter