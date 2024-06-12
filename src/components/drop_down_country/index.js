
import Button from '@mui/material/Button';
import { Dialog } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';

const CountryDropDown=()=>{
    const [isOpenModal, setIsOpenModal]=useState(false);


    return(
        <>
        <Button variant="outlined" className='countryDrop' onClick={()=>setIsOpenModal(true)}>
            {/* variant: outlined contained text  */}
            <div className="countryDrop">
                <span className="label">Your Location</span>
                <span className="name">India</span>
            </div>       
            <span className='ml-auto'><FaAngleDown/></span>                     
        </Button>
        <Dialog open={isOpenModal} className='locationModal'>
            <h4>Chose your delivery location:</h4>
            <p>Enter your address and we will specify the offer for your area.</p>
            <Button className='close_' onClick={()=>setIsOpenModal(false)}><MdClose/></Button>
            <div className='headerSearch w-100'>
                <input type='text' placeholder='Search Country'/>
                <Button><IoIosSearch/></Button>
            </div>
            <ul className='countryList'>
            <li><Button>India</Button></li>
                <li><Button>SriLanka</Button></li>
                <li><Button>Pakistan</Button></li>
                <li><Button>Afganisthan</Button></li>
                <li><Button>Kazakastha</Button></li>
                <li><Button>Turkisthan</Button></li>
                <li><Button>USA</Button></li>
                <li><Button>California</Button></li>
                <li><Button>Argentina</Button></li>
                <li><Button>New York</Button></li><li><Button>India</Button></li>
                <li><Button>SriLanka</Button></li>
                <li><Button>Pakistan</Button></li>
                <li><Button>Afganisthan</Button></li>
                <li><Button>Kazakastha</Button></li>
                <li><Button>Turkisthan</Button></li>
                <li><Button>USA</Button></li>
                <li><Button>California</Button></li>
                <li><Button>Argentina</Button></li>
                <li><Button>New York</Button></li><li><Button>India</Button></li>
                <li><Button>SriLanka</Button></li>
                <li><Button>Pakistan</Button></li>
                <li><Button>Afganisthan</Button></li>
                <li><Button>Kazakastha</Button></li>
                <li><Button>Turkisthan</Button></li>
                <li><Button>USA</Button></li>
                <li><Button>California</Button></li>
                <li><Button>Argentina</Button></li>
                <li><Button>New York</Button></li>
            </ul>

        </Dialog>
        </>
    )
}
export default CountryDropDown;