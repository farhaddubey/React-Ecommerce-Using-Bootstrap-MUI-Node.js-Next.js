import gfgl from '../../assets//gfgl/gfgl.png';
import { Link } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa";
import { IoBagOutline, IoSearch } from 'react-icons/io5';
import { Button } from '@mui/material';
import CountryDropDown from '../drop_down_country';
import { FaRegCircleUser } from 'react-icons/fa6';
import SearchBox from './SearchBox';
import Navigation from './navigations';
import { useContext } from 'react';
import { MyContext } from '../../App';
const Header= ()=>{

    const context = useContext(MyContext);

    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-purple">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Due to the <b>COVID 19</b> epidemic, orders may be processed with a slightly delay.
                        </p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={gfgl} alt='Logo'/></Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>
                                {
                                context.countryList.length!==0 && <CountryDropDown/>
                                }
                                {/* Header Search Bar Starts Here  */}
                                <SearchBox/>
                                {/* Header Search Bar Ends Here  */}

                                <div className='part3 d-flex align-items-center ml-auto'>
                                <Button className='circle mr-3'><FaRegCircleUser/></Button>
                                <div className='ml-auto cartTab'>
                                    <span className='price'>"$4.34</span>
                                    <Button className='circle ml-2'><IoBagOutline/></Button>
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
                <Navigation/>




            </div>
        </>
    )

}
export default Header;