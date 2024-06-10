import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.style.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div>
        <Link className="logo-container" to="/">
          <CrwnLogo className='logo' />
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
