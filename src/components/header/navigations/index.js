import { FaAngleDown, FaAngleRight, FaArrowDown } from "react-icons/fa";
import { IoBagOutline, IoSearch } from 'react-icons/io5';
import { Button } from '@mui/material';
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import HomeBanner from "../../HomeBanner";
import Home from "../../home";

const Navigation = () =>{
    const [isOpenSidebarNav, setIsOpenSidebarNav]=useState(true);

    return(
        <>
                <nav>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-2 navPart1'>
                                <div className="catWrapper">
                                    <Button className='allCatTab align-items-center' onClick={()=> setIsOpenSidebarNav(!isOpenSidebarNav)}>
                                        <span><IoIosMenu/></span>
                                        <span className="text">CATEGORIES</span>
                                        <span className="icon2 ml-2"><FaAngleDown/></span>
                                    </Button>
                                    <div className={`sidebarNav ${isOpenSidebarNav===true ? 'open':''}`}>
                                        <ul>
                                            <li>
                                                <Link to="/"><Button>Men<FaAngleRight className="ml-auto"/>
                                                    </Button></Link>
                                                <div className="submenu">
                                                    <Link to="/"><Button>Clothing</Button></Link>
                                                    <Link to="/"><Button>Footwear</Button></Link>
                                                    <Link to="/"><Button>Watches</Button></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="/"><Button>Men<FaAngleRight className="ml-auto"/></Button></Link>
                                                <div className="submenu">
                                                    <Link to="/"><Button>Clothing</Button></Link>
                                                    <Link to="/"><Button>Footwear</Button></Link>
                                                    <Link to="/"><Button>Watches</Button></Link>
                                                    <Link to="/"><Button>Clothing</Button></Link>
                                                    <Link to="/"><Button>Footwear</Button></Link>
                                                    <Link to="/"><Button>Watches</Button></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="/"><Button>Men<FaAngleRight className="ml-auto"/></Button></Link>
                                                <div className="submenu">
                                                    <Link to="/"><Button>Clothing</Button></Link>
                                                    <Link to="/"><Button>Footwear</Button></Link>
                                                    <Link to="/"><Button>Watches</Button></Link>
                                                    <Link to="/"><Button>Clothing</Button></Link>
                                                    <Link to="/"><Button>Footwear</Button></Link>
                                                    <Link to="/"><Button>Watches</Button></Link><Link to="/"><Button>Clothing</Button></Link>
                                                    <Link to="/"><Button>Footwear</Button></Link>
                                                    <Link to="/"><Button>Watches</Button></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="/"><Button>Men<FaAngleRight className="ml-auto"/></Button></Link>
                                                <div className="submenu">
                                                    <Link to="/"><Button>Clothing</Button></Link>
                                                    <Link to="/"><Button>Footwear</Button></Link>
                                                    <Link to="/"><Button>Watches</Button></Link>
                                                    <Link to="/"><Button>Watches</Button></Link>
                                                    <Link to="/"><Button>Watches</Button></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="/"><Button>Men<FaAngleRight className="ml-auto"/></Button></Link>
                                                <div className="submenu">
                                                    <Link to="/"><Button>Clothing</Button></Link>
                                                    <Link to="/"><Button>Footwear</Button></Link>
                                                    <Link to="/"><Button>Footwear</Button></Link>
                                                    <Link to="/"><Button>Footwear</Button></Link>
                                                    <Link to="/"><Button>Footwear</Button></Link>
                                                    <Link to="/"><Button>Footwear</Button></Link>
                                                    <Link to="/"><Button>Watches</Button></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="/"><Button>Men<FaAngleRight className="ml-auto"/></Button></Link>
                                            
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-10 navPart2'>
                                    <ul className="list list-inline">
                                        <li className="list-inline-item">
                                            <Link to="/"><Button>HOME</Button></Link>
                                            <div className="submenu shadow">
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Footwear</Button></Link>
                                                <Link to="/"><Button>Watches</Button></Link>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/"><Button>MEN</Button></Link>
                                            <div className="submenu shadow">
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/"><Button>WOMEN</Button></Link>
                                            <div className="submenu shadow">
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/"><Button>BEAUTY</Button></Link>
                                            <div className="submenu shadow">
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/"><Button>WATCHES</Button></Link>
                                            <div className="submenu shadow">
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/"><Button>KIDS</Button></Link>
                                            <div className="submenu shadow">
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/"><Button>GIFT</Button></Link>
                                            <div className="submenu shadow">
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/"><Button>BLOG</Button></Link>
                                            <div className="submenu shadow">
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                            </div>
                                        </li>
                                        {/* <li className="list-inline-item"><Link to="/"><Button>CONTACT</Button></Link></li> */}
                                    </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <Home/>
        </>
    )
}
export default Navigation;