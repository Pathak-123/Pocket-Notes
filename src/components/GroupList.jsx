import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars } from '@fortawesome/free-solid-svg-icons';
import SideBars from './SideBars';

const GroupList = ({ groups, groupsColor, selectedGroup, setSelectedGroup, setIsPopupOpen, mobile, setMobile,selectedColor,setSelectedColor}) => (
  <div className={`w-[280px] absolute md:relative z-10 md:translate-x-0 transform md:block p-4 bg-gray-100 overflow-y-auto h-full ${mobile ? 'translate-x-0' : '-translate-x-[280px]'}`}>
    <SideBars mobile={mobile}
        setMobile={setMobile}/>
   <h2 className='text-2xl font-bold text-black ml-5 py-5 '>Pocket Notes</h2>
    <button onClick={() => {setIsPopupOpen(true);setMobile(!mobile)}} className="mb-4 p-2 text-white rounded-lg bg-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"> <span className='text-lg'>+</span> Create New Group</button>
    {groups.map((group, index) => (
        <div className={`flex items-center px-4 py-2  rounded-full ${selectedGroup === group.name ? 'bg-customColor' : ''}` } key={index}>
        <span className="w-12 h-9 bg-blue-500 rounded-full circle flex justify-center items-center" style={{ backgroundColor: group.color }}>
        {group.name.split(' ')
          .map(word => word.charAt(0).toUpperCase())
          .join('')}
      </span>
      <div
        key={index}
        className={`p-2 cursor-pointer w-full font-bold text-lg`}
        onClick={() => {setSelectedGroup(group.name);setSelectedColor(group.color) ; setMobile(!mobile)} }
      >
        {group.name}
      </div>
      </div>
    ))}
  </div>
  
);

export default GroupList;
