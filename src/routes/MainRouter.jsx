import { useRoutes } from 'react-router-dom';

//Pages
import Info from '../pages/info/Info';
import Plan from '../pages/plan/Plan';
import AddOns from '../pages/addOns/AddOns';
import Summary from '../pages/summary/Summary';

const MainRouter = () => {
  const router = useRoutes([
    {path:'/', element: <Info />},
    {path:'/plan', element: <Plan />},
    {path:'/addOns', element: <AddOns />},
    {path:'/addOns', element: <AddOns />},
    {path:'/summary', element: <Summary />},
  ])

  return router;
}

export default MainRouter;