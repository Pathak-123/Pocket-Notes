import React, { useState, useEffect } from 'react';
import GroupList from './components/GroupList';
import NoteList from './components/NoteList';
import NewGroupPopup from './components/NewGroupPopup';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faArrowLeft,faBars  } from '@fortawesome/free-solid-svg-icons';
import Welcome from './components/Welcome';
import SideBars from './components/SideBars';
function App() {
  const [groups, setGroups] = useState([]);
  const [groupsColor, setGroupsColor] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mobileMenu,setMobileMenu]=useState(false);
  const [errors,setErrors]=useState(false);
  

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(storedGroups);
    const storedGroupsCol = JSON.parse(localStorage.getItem('groupsColor')) || [];
    setGroupsColor(storedGroupsCol);
    
    if (storedGroups.length > 0) {
      // setSelectedGroup(storedGroups[0].name);
    }
  }, []);

  useEffect(() => {
    if (selectedGroup) {
      const storedNotes = JSON.parse(localStorage.getItem(selectedGroup)) || [];
      setNotes(storedNotes);
    }
  }, [selectedGroup]);

  const handleAddGroup = (newGroupName,color) => {
    let isDuplicate = groups.some(group => group.name === newGroupName);
   
   
    if (!isDuplicate && newGroupName.trim() !== '' && color.trim()!=='') {
      setErrors(false);
      setGroups([...groups, { name: newGroupName, color: color }]);
      const updatedGroups = [...groups, { name: newGroupName,color: color }];
      setGroups(updatedGroups);
      
      localStorage.setItem('groups', JSON.stringify(updatedGroups));
      // setNewGroupName('');
      // setGroupsColor('')
      setIsPopupOpen(false);
      return true; 
    }
    else{
      setErrors(true);
    }
    return false; 
    
  
  };

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      const newNoteObj = {
        text: newNote,
        createdAt: new Date().toLocaleString()
      };
      const updatedNotes = [...notes, newNoteObj];
      setNotes(updatedNotes);
      localStorage.setItem(selectedGroup, JSON.stringify(updatedNotes));
      setNewNote('');
    }
  };
  const selectedCurrentColor = groups.find(group => group.name === selectedGroup);
  const categoryColor = selectedCurrentColor ? selectedCurrentColor.color : 'bg--gray-100';
  return (
    <div className="flex h-screen">
      <GroupList
        groups={groups}
        groupsColor={groupsColor}
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
        setIsPopupOpen={setIsPopupOpen}
        mobile={mobileMenu}
        setMobile={setMobileMenu}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      {
        groups.length==0 || ! selectedGroup ? <Welcome mobile={mobileMenu}
        setMobile={setMobileMenu} /> :
      
      <div className="flex-grow  flex flex-col justify-between md:w-[calc(100%-280px)]">
      {/* <div> */}
          <header className='pl-4 py-4  bg-headingColor text-white text-left flex flex-row items-center flex-start'>
          <SideBars mobile={mobileMenu}
        setMobile={setMobileMenu}/>
         <span className="w-10 h-10 bg-blue-500 rounded-full circle flex justify-center items-center mr-1 ml-5" style={{ backgroundColor: categoryColor }}>
        {selectedGroup.split(' ')
          .map(word => word.charAt(0).toUpperCase())
          .join('')}
      </span>
        <h2 className="text-2xl  text-black" style={{ fontFamily: 'Roboto' }}>{selectedGroup}</h2>
        </header>

        <div className='flex-1 overflow-y-auto bg-customColor'>
          <div className='space-y-4'>
        <NoteList notes={notes} />
        </div>
        </div>
       
        <footer className="flex  p-4 bg-gray-500 shadow items-center">
          <div className='relative flex-grow'>
          <textarea
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddNote()}
            className="border p-2 flex-grow mr-2 w-full h-24" placeholder='Enter Your Text Here...'
          />
          <button onClick={handleAddNote} disabled={newNote.trim().length == 0  } className="absolute right-5 bottom-5 text-blue-600 disabled:text-blue-300">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
          </div>
          {/* <button onClick={handleAddNote} disabled={newNote.trim().length == 0  } className="p-2 bg-blue-500 text-white rounded absolute right-6 disabled:bg-blue-300"><FontAwesomeIcon icon={faPaperPlane} className="mr-2" /></button> */}
        {/* </div> */}
      </footer>
      </div>
}
      <NewGroupPopup
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
        handleAddGroup={handleAddGroup}
        groupsColor={groupsColor}
        setGroupsColor={setGroupsColor}
        setSelectedGroup={setSelectedGroup}
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );
}

export default App;
