
import Button from '@mui/material/Button';
import { Dialog } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import {Slide} from '@mui/material';
import * as React from 'react';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const CountryDropDown=()=>{
    const context = React.useContext(MyContext);
    const [isOpenModal, setIsOpenModal]=useState(false);
    const [selectedTab, setSelectedTab]=useState(null);
    const [countryList, setCountryList]=useState([]);

    const selectCountry=(index, country)=>{
        setSelectedTab(index);
        setIsOpenModal(false);
        context.setSelectedCountry(country);
    } 
    React.useEffect(()=>{
        setCountryList(context.countryList);
    }, [])

    const filterList=(e) =>{
        const keyword = e.target.value.toLowerCase();
        if (keyword!==""){
            const list = countryList.filter((item)=>{
                return item.country.toLowerCase().includes(keyword);
            });
            setCountryList(list);
        }else{
            setCountryList(context.countryList);
        }

    }

    return(
        <>
        <Button variant="outlined" className='countryDrop' onClick={()=>setIsOpenModal(true)}>
            {/* variant: outlined contained text  */}
            <div className="countryDrop">
                <p className="label">Your Location</p>
                <span className="name">{context.selectedCountry!==""?context.selectedCountry.length>10?context.selectedCountry?.substr(0,10)+
                '...':context.selectedCountry: 'Select Location'}</span>
            </div>       
            <span className='ml-auto'><FaAngleDown/></span>                     
        </Button>
        <Dialog open={isOpenModal} TransitionComponent={Transition}  onClose={()=>setIsOpenModal(false)} className='locationModal'>
            <h4>Chose your delivery location:</h4>
            <p>Enter your address and we will specify the offer for your area.</p>
            <Button className='close_' onClick={()=>setIsOpenModal(false)}><MdClose/></Button>
            <div className='headerSearch w-100'>
                <input type='text' placeholder='Search Country' onChange={filterList}/>
                <Button><IoIosSearch/></Button>
            </div>
            <ul className='countryList'>
                <li><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
                {
                    countryList?.length!==0 && countryList?.map((item, index)=>{
                        return(
                            <li key={index}><Button onClick={()=>selectCountry(index, item.country)}
                            className={`${selectedTab===index ? 'active' : ''}`}
                            >{item.country}</Button></li>
                        )
                    })
                }
            </ul>

        </Dialog>
        </>
    )
}
export default CountryDropDown;