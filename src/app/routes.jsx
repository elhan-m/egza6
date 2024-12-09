import { useRoutes } from 'react-router-dom';
import { About } from '../pages/About';
import Projects from '../pages/Projects';
import Contacts from '../pages/Contacts';
import { Layout } from '../widgets/Layout';

export function Myrouter() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'projects',
          element: <Projects />,
        },
        {
          path: 'contacts',
          element: <Contacts />,
        },
      ],
    },
  ]);

  console.log("Routes object: ", routes);
  return routes;
}
