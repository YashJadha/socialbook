'use client'

import Image from 'next/image';
import Link from 'next/link';
import style from './nav.module.css'
import logoimg from '../Images/createlogo.png'
import { IoHome } from "react-icons/io5";
import { FaUser, FaUserFriends, FaUsers, FaVideo } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { LuGamepad2 } from "react-icons/lu";
import { TbGridDots } from "react-icons/tb";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import Dplogo from '../Images/dpForproject.jpeg'
import { IoSearchSharp } from "react-icons/io5";
// import { ThemeContext } from '@/context/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { BiSolidCalendarStar } from "react-icons/bi";
import { PiRadioFill } from "react-icons/pi";
import { BsFlagFill } from "react-icons/bs";
import { MdFeaturedVideo } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import { BsCalendar2EventFill } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { MdOutlineCancel } from "react-icons/md";

export default function NavbarPage() {

    const arr1 = ["Menu", "Messenger", "Notification", "Account"];


    const session = useSession();
    const [hold, setHold] = useState('');

    async function resn() {
        const nameI = await session.data.user.username;
        setHold(nameI);
    }
    resn();

    const [show, setShow] = useState(false);
    function handleshow() {
        setShow(!show);
    }

    const [menu, setMenu] = useState(false);
    function handleshowmenu() {
        setMenu(!menu);
    }

    function signoutfun() {
        signOut("credentials")
    }

    if (session.status === "unauthenticated") {
        redirect('/login');
    }
    return (
        <nav className={style.navbar}>
            <div className={style.startitems}>
                {/* <div className={style.mainhead}>Social Web</div> */}
                <FaFacebook size={45} color="#0866ff" />
                <input type="search" className={style.inptsearch} placeholder="Sarch here" />
                <IoSearchSharp size={35} className={style.searchicon} />
            </div>
            <div className={style.ulicons}>
                <Link href={'/'} className={style.mainlogo}>
                    <IoHome size={28} color="#0866ff" />
                </Link>
                <Link href={'/'} className={style.mainlogo}>
                    <FaUserFriends size={28} color="#0866ff" />
                </Link>
                <Link href={'/'} className={style.mainlogo}>
                    <MdGroups2 size={30} color="#0866ff" />
                </Link>
                <Link href={'/'} className={style.mainlogo}>
                    <LuGamepad2 size={28} color="#0866ff" />
                </Link>
            </div >

            <div className={style.lastitems}>
                <div href={'/'} onClick={handleshowmenu}>
                    <TbGridDots size={28} color={menu ? "#000" : "#0866ff"} />
                </div>
                {
                    menu &&
                    <div className={style.menumodal} style={{ display: menu ? "show" : "block" }}>
                        <div className={style.tophead}>
                            <div>
                                Menu
                            </div>
                            <MdOutlineCancel size={24} color="red" onClick={(e) => setMenu(false)} />
                        </div>
                        <div className={style.innerflexmodal}>
                            <div className={style.onesidemodal}>
                                <div className={style.mainicon}>
                                    <input type="search" name="searchbar" placeholder='search menu' id="" className={style.modalinpt} />
                                </div>

                                {/* first */}
                                <div>
                                    <div className={style.social}>Social</div>
                                    <div className={style.maineventmodal}>
                                        <BiSolidCalendarStar size={30} color="red" />
                                        <div>
                                            <div className={style.headeventmodal}>
                                                Events
                                            </div>
                                            <div className={style.descriptioneventmodal}>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.maineventmodal}>
                                        <FaUserFriends size={30} color="#0080ff" />
                                        <div>
                                            <div className={style.headeventmodal}>
                                                Friends
                                            </div>
                                            <div className={style.descriptioneventmodal}>
                                                Search for freinds and people may you know.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.maineventmodal}>
                                        <FaUsers size={30} color="#0080ff" />
                                        <div>
                                            <div className={style.headeventmodal}>
                                                Groups
                                            </div>
                                            <div className={style.descriptioneventmodal}>
                                                Connect with people who share your interest.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.maineventmodal}>
                                        <PiRadioFill size={30} color="#0080ff" />
                                        <div>
                                            <div className={style.headeventmodal}>
                                                New Feeds
                                            </div>
                                            <div className={style.descriptioneventmodal}>
                                                See Relevent post from people & Pages you follows.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.maineventmodal}>
                                        <BsFlagFill size={30} color="orange" />
                                        <div>
                                            <div className={style.headeventmodal}>
                                                Pages
                                            </div>
                                            <div className={style.descriptioneventmodal}>
                                                Discover and Connect with business on facebook
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />

                                {/* second */}
                                <div>
                                    <div className={style.social}>Entertainment</div>
                                    <div className={style.maineventmodal}>
                                        <MdFeaturedVideo size={30} color="#0080ff" />
                                        <div>
                                            <div className={style.headeventmodal}>
                                                Gaming Videos
                                            </div>
                                            <div className={style.descriptioneventmodal}>
                                                Watch and connect with your favourite games and streamers.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.maineventmodal}>
                                        <LuGamepad2 size={30} color="#0080ff" />
                                        <div>
                                            <div className={style.headeventmodal}>
                                                Play Games
                                            </div>
                                            <div className={style.descriptioneventmodal}>
                                                Play Your favourite games adventures and wonderfully !!
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.maineventmodal}>
                                        <MdOutlineOndemandVideo size={30} color="#0080ff" />
                                        <div>
                                            <div className={style.headeventmodal}>
                                                Videos
                                            </div>
                                            <div className={style.descriptioneventmodal}>
                                                Video destination personalized to Your interest and connections.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.secondsidemodal}>
                                <div style={{ fontSize: "20px", fontFamily: "inherit", fontWeight: "600", }}>Create</div>
                                <Link href={'/dashboard'} className={style.secondsideicon}>
                                    <TbEdit size={23} />
                                    <div >Post</div>
                                </Link>
                                <Link href={'/dashboard'} className={style.secondsideicon}>
                                    <FaBookOpen size={23} />
                                    <div >Story</div>
                                </Link>
                                <Link href={'/dashboard'} className={style.secondsideicon}>
                                    <AiFillInstagram size={23} />
                                    <div >Reels</div>
                                </Link>
                                <Link href={'/dashboard'} className={style.secondsideicon}>
                                    <FaStar size={23} />
                                    <div >Life Event</div>
                                </Link>

                                <hr style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }} />

                                <Link href={'/dashboard'} className={style.secondsideicon}>
                                    <BsFlagFill size={23} />
                                    <div >Page</div>
                                </Link>
                                <Link href={'/dashboard'} className={style.secondsideicon}>
                                    <RiAdvertisementFill size={23} />
                                    <div >Ads.</div>
                                </Link>
                                <Link href={'/dashboard'} className={style.secondsideicon}>
                                    <FaUser size={23} />
                                    <div >Group</div>
                                </Link>
                                <Link href={'/dashboard'} className={style.secondsideicon}>
                                    <BsCalendar2EventFill size={23} />
                                    <div >Events</div>
                                </Link>
                                <Link href={'/dashboard'} className={style.secondsideicon}>
                                    <FaBagShopping size={23} />
                                    <div >Marketing Listing</div>
                                </Link>

                            </div>
                        </div>
                    </div>
                }
                <Link href={'/'}>
                    <HiChatBubbleBottomCenterText size={28} color="#0866ff" />
                </Link>
                <Link href={'/'}>
                    <IoIosNotifications size={28} color="#0866ff" />
                </Link>
                {/* <button className={style.modebtn} onClick={theme === "light" ? switchdark : switchlight}>
                    {theme === "light" ? "🌙" : "☀️"}
                </button> */}
                <div onClick={handleshow}>
                    <Image
                        className={style.imgdp}
                        src={Dplogo}
                        quality={100}
                        width={100}
                        height={100}
                    />
                </div>
                {
                    show &&
                    <div className={style.model} style={{ display: show ? "block" : "none" }}>
                        <div className={style.mainprofile}>
                            <div className={style.flexinmodel}>
                                <Image
                                    className={style.imgdp}
                                    src={Dplogo}
                                    quality={100}
                                    width={100}
                                    height={100}
                                />
                                <div style={{ fontFamily: "inherit", fontSize: "25px", fontWeight: "700", marginRight: "auto" }}>{hold}</div>
                            </div>
                            <hr style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }} />
                            <Link href={''} className={style.linkprofile}>
                                See My Profile
                            </Link>
                        </div>
                        <div className={style.allflexmain}>
                            <IoSettingsSharp size={25} />
                            <div className={style.fontmodel}>Settings & Privacy</div>
                            <IoIosArrowForward size={25} />
                        </div>
                        <div className={style.allflexmain}>
                            <FaQuestionCircle size={25} />
                            <div className={style.fontmodel}>Help & Support</div>
                            <IoIosArrowForward size={25} />
                        </div>
                        <div className={style.allflexmain}>
                            <MdNightlight size={25} />
                            <div className={style.fontmodel}>Display & Accessibility</div>
                            <IoIosArrowForward size={25} />
                        </div>
                        <div className={style.allflexmain}>
                            <MdFeedback size={25} />
                            <div className={style.fontmodel} >Give Feed-back</div>
                        </div>
                        <div className={style.allflexmain} onClick={signoutfun}>
                            <IoLogOut size={25} />
                            <div className={style.fontmodel} >Log Out</div>
                        </div>

                        <div style={{ marginTop: "10px" }}>
                            Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  ·   · Meta © 2023
                        </div>
                    </div>
                }
            </div>
        </nav>
    )
}
