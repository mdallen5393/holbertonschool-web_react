import { checkIsIndex, getFooterCopy, getFullYear } from '../utils/utils';
import React, { useContext } from 'react';
import AppContext from '../App/AppContext';

const Footer = ({ className }) => {
  const { user } = useContext(AppContext);

  return (
    <div className={className}>
      <p>Copyright {getFullYear()} - {getFooterCopy(checkIsIndex())}</p>
      {user.isLoggedIn && <p><a href="#">Contact us</a></p>}
    </div>
  );
};

export default Footer;
