import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <div>
      <p>asdasd</p>
      <Outlet />
    </div>
  );
};
