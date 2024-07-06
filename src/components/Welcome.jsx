import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock,faBars  } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import NotesProfile from './Notes_Profile.png';
import SideBars from './SideBars';
export default function Welcome({mobile, setMobile}){
    return (
    <div className='flex flex-col items-center justify-between bg-customColor flex-grow'>
        <div className='absolute top-4 left-5 md:hidden'> <SideBars mobile={mobile}
        setMobile={setMobile}/>
        </div>
    <img src={NotesProfile} alt='Description' className='mb-4' />
    <div>
    Send and receive messages without keeping your phone online.
     <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    </div>
    <footer>
    <FontAwesomeIcon icon={faLock} /><span className='ml-2'> end-to-end encrypted</span>
    </footer>
</div>
    )

}