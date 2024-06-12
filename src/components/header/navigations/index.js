import { FaAngleDown, FaArrowDown } from "react-icons/fa";
import { IoBagOutline, IoSearch } from 'react-icons/io5';
import { Button } from '@mui/material';
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Navigation = () =>{
    return(
        <>
                <nav>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-3 navPart1'>
                                <Button className='allCatTab align-items-center'>
                                    <span><IoIosMenu/></span>
                                    <span className="text">CATEGORIES</span>
                                    <span className="icon2 ml-2"><FaAngleDown/></span>
                                </Button>
                            </div>
                            <div className='col-sm-9 navPart2'>
                                    <ul className="list list-inline">
                                        <li className="list-inline-item"><Link to="/">HOME</Link></li>
                                        <li className="list-inline-item"><Link to="/">FASHION</Link></li>
                                        <li className="list-inline-item"><Link to="/">ELECTRONIC</Link></li>
                                        <li className="list-inline-item"><Link to="/">BAKERY</Link></li>
                                        <li className="list-inline-item"><Link to="/">GROCERY</Link></li>
                                        <li className="list-inline-item"><Link to="/">BLOG</Link></li>
                                        <li className="list-inline-item"><Link to="/">CONTACT US</Link></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </nav>
        </>
    )
}
export default Navigation;