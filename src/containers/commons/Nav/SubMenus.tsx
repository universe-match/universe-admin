import React from 'react';

import List from '@mui/material/List';

import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';

import LinkedMenu from './LinkedMenu';

const subMenuList = [
  {
    key: 'logout',
    to: '/logout',
    label: '๋ก๊ทธ์์',
    icon: <MeetingRoomOutlinedIcon />,
  },
];

function SubMenus() {
  return (
    <List>
      {subMenuList.map(({ key, to, label, icon }) => (
        <LinkedMenu key={key} href={to} label={label} icon={icon} />
      ))}
    </List>
  );
}

export default SubMenus;
