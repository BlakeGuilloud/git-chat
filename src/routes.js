import App from './App';
import { LoginContainer } from './containers';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: LoginContainer },
  childRoutes: [],
}

export default routes;
