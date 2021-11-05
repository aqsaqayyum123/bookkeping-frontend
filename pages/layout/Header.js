import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import AppsIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PopupState, bindTrigger, bindMenu } from 'material-ui-popup-state';

const Header = () => {
  return (
    <div className='flex shadow-sm bg-blue-100  p-4 justify-between  '>
      <div className='flex space-x-3  '>
        <p className='text-white-400'>Bookkeeping </p>
        {/* <CropLandscapeIcon className='text-gray-300' />
        <DashboardIcon className='text-gray-300' /> */}
      </div>

      <div className='flex space-x-4 text-gray-400 mr-3'>
        <AppsIcon />
        <ExitToAppIcon />
        <p className='text-gray-600 font-semibold'>Close</p>
      </div>
    </div>
  );
};

export default Header;
