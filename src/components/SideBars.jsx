import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars  } from '@fortawesome/free-solid-svg-icons';
export default function SideBars({mobile,setMobile}){
    return (
        <FontAwesomeIcon icon={faBars} className='text-black ml-4  sm:text-lg cursor-pointer md:hidden ' onClick={()=>setMobile(!mobile)}/>
    )
}