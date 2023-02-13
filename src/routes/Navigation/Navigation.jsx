import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink to='/services'>Services</NavLink>
      <Outlet />
    </div>
  );
};

export default Navigation;
