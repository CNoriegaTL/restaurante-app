import { Outlet } from 'react-router-dom';
import Navigation from '../routes/Navigation/Navigation';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};
