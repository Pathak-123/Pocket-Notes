import React from 'react';

const NoteList = ({ notes }) => (
  <React.Fragment>
    {notes.map((note, index) => (
      <div  key={index} className='px-5 py-5'>                                                         
              <div className='flex md:flex- flex-col'>
               
                 <p className='md:w-[calc(100%-150px)]'>{note.text}</p>
                 
                  <p className='block flex justify-end'>{note.createdAt}</p>
                
              </div>
              <hr className="my-5 border-black" />
            </div>
    ))}
  </React.Fragment>
);

export default NoteList;
