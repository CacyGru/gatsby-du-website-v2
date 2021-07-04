import React from 'react';
import * as BoxIcons from 'react-icons/bi';
import * as BootStrap from 'react-icons/bs';
import * as FontAwesome from 'react-icons/fa';
import * as AiOutline from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Drum UP',
    path: '/',
    icon: <BoxIcons.BiHomeSmile />,
    className: 'startLink',
  },
  {
    title: 'Unterricht',
    path: '/unterricht',
    icon: <FontAwesome.FaDrum />,
    className: 'unterricht',
  },
  {
    title: 'Teamtraining',
    path: '/teamtraining',
    icon: <AiOutline.AiOutlineTeam />,
    className: 'teamtraining',
  },
  {
    title: 'Musik',
    path: '/music',
    icon: <FontAwesome.FaMusic />,
    className: 'music',
  },
  {
    title: 'Über Mich',
    path: '/uebermich',
    icon: <BootStrap.BsFileRichtext />,
    className: 'uebermich',
  },
  {
    title: 'Kontakt',
    path: '/kontakt',
    icon: <AiOutline.AiOutlineContacts />,
    className: 'kontakt',
  },
];
