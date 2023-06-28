import { useRoutes } from 'react-router-dom';

//Pages
import Info from '../pages/info/Info';
import Plan from '../pages/plan/Plan';
import PlanYear from '../pages/plan/plaYear/PlanYear';
import AddOns from '../pages/addOns/AddOns';
import Summary from '../pages/summary/Summary';
import SummaryYear from '../pages/summary/summaryYear/SummaryYear';
import AddOnsYear from '../pages/addOns/addOnsYear/AddOnsYear'

const MainRouter = () => {
  const router = useRoutes([
    {path:'/', element: <Info />},
    {path:'/plan', element: <Plan />},
    {path:'/planyear', element: <PlanYear />},
    {path:'/addons', element: <AddOns />},
    {path:'/addonsyear', element: <AddOnsYear />},
    {path:'/summary', element: <Summary />},
    {path:'/summaryear', element: <SummaryYear />},
  ])

  return router;
}

export default MainRouter;