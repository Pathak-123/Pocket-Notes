import React, { useState } from 'react';

const NewGroupPopup = ({ isPopupOpen, setIsPopupOpen, handleAddGroup, groupsColor,setGroupsColor,setSelectedGroup, errors,setErrors }) => {
  const handleColorClick = (color) => {
    setGroupsColor(color);
  };
  const [newGroupName, setNewGroupName] = useState('');
  const handleCreateClick = () => {
    const success = handleAddGroup(newGroupName, groupsColor);
    if (success) {
      setSelectedGroup(newGroupName);
      setNewGroupName('');
      setGroupsColor('');
    }
  };

  return (
    isPopupOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={() => {setIsPopupOpen(false);setNewGroupName('');setGroupsColor('');setErrors(false);}}>
      <div className="bg-white p-4 rounded flex flex-col  w-[500px]  max-w-2xl max-h-full" onClick={(e) => e.stopPropagation()}>
      <h1 className='text-3xl text-bold italic text-center pb-4'>Create New Group</h1>
      <div className="flex flex-row mb-4 justify-between items-center">
      <label className="block text-left text-bold" htmlFor="groupName">Name</label>
        <input
        id="groupName"
          type="text"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          className="border p-2 mb-2 w-[300px]"
        />
        </div>
       <div className='flex flex-row mb-4 flex-start items-center'>
       <label className="block text-left mb-2 text-bold">Choose Color</label>
       <div className='w-[370px] flex flex-row justify-center items-center p-2'>
            {['red', 'blue', 'green', 'pink', 'yellow'].map(color => (
              <div
                key={color}
                className={`circle text-white flex items-center justify-center w-8 h-8 text-lg font-bold mr-3 ${groupsColor === color ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                style={{ backgroundColor: color, borderRadius: "50%", cursor: "pointer" }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
            </div>
          </div>
          {errors && (
            <div className="text-red-500 mb-4 text-center">
              <span className='text-xl text-bold italic'>Please select a valid name or color</span>
            </div>
          )}
          
        
        <button onClick={() => {handleCreateClick()}} className="mb-4 p-2 text-white rounded-lg bg-black shadow appearance-none border rounded  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">  Create</button>
      </div>
    </div>
    )
  );
};

export default NewGroupPopup;
