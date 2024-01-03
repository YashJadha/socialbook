'use client'

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarPage from '../components/navbar';
import Image from 'next/image';
import style from './dash.module.css'
import dpaccount from '../Images/dpForproject.jpeg'
import Link from 'next/link';
import { FaUserFriends } from "react-icons/fa";
import { BsFillBookmarkFill, BsMessenger, BsThreeDots, BsSearch } from "react-icons/bs";
import { FaClockRotateLeft, FaRadio } from "react-icons/fa6";
import { MdPeople, MdSmartDisplay, MdBloodtype } from 'react-icons/md'
import { ImHome } from "react-icons/im";
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { AiFillSignal } from 'react-icons/ai'
import { FaHandHoldingHeart } from "react-icons/fa6";
import { RiTreeFill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { PiFilmReelBold } from "react-icons/pi";
import { MdAddCircle } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { TbPhotoFilled } from "react-icons/tb";
import { BsEmojiSmile } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";


const Responsive = () => {
    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
            />
            <Slider {...settings}>
                <div className={style.createreel} style={{ margin: "0 1rem" }}>
                    <Image
                        src={'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                        width={100}
                        height={100}
                        className={style.img_create}
                        quality={100}
                    />
                    <div className={style.addbtn}>
                        <MdAddCircle size={35} color="#0866ff" className={style.ad2btn} />
                        <div style={{ fontSize: "16px", fontFamily: "inherit", fontWeight: "500", marginTop: "-5px" }}>
                            Create Story
                        </div>
                    </div>

                </div>

                <div className={style.newreel}>
                    <Image
                        src={dpaccount}
                        width={100}
                        height={100}
                        className={style.backreelimg}
                        quality={100}
                    />
                    <Image
                        src={dpaccount}
                        width={100}
                        height={100}
                        className={style.dpimg}
                        quality={100}
                    />
                    <div className={style.nameperson}>Your name</div>

                </div>
                <div className={style.newreel}>
                    <Image
                        src={dpaccount}
                        width={100}
                        height={100}
                        className={style.backreelimg}
                        quality={100}
                    />
                    <Image
                        src={dpaccount}
                        width={100}
                        height={100}
                        className={style.dpimg}
                        quality={100}
                    />
                    <div className={style.nameperson}>Your name</div>

                </div>
                <div className={style.newreel}>
                    <Image
                        src={dpaccount}
                        width={100}
                        height={100}
                        className={style.backreelimg}
                        quality={100}
                    />
                    <Image
                        src={dpaccount}
                        width={100}
                        height={100}
                        className={style.dpimg}
                        quality={100}
                    />
                    <div className={style.nameperson}>Your name</div>

                </div>
                <div className={style.newreel}>
                    <Image
                        src={dpaccount}
                        width={100}
                        height={100}
                        className={style.backreelimg}
                        quality={100}
                    />
                    <Image
                        src={dpaccount}
                        width={100}
                        height={100}
                        className={style.dpimg}
                        quality={100}
                    />
                    <div className={style.nameperson}>Your name</div>

                </div>
                <div className={style.newreel}>
                    <Image
                        src={dpaccount}
                        width={100}
                        height={100}
                        className={style.backreelimg}
                        quality={100}
                    />
                    <Image
                        src={dpaccount}
                        width={100}
                        height={100}
                        className={style.dpimg}
                        quality={100}
                    />
                    <div className={style.nameperson}>Your name</div>

                </div>

            </Slider>
        </div>
    );
};

export default function Dashboardmain() {

    const router = useRouter();

    const session = useSession();
    if (session.status === "unauthenticated") {
        router.push('/dashboard')
    }

    const [response, setResponse] = useState('');
    async function resn() {
        const res = await session.data.user.username;
        setResponse(res);
    }
    resn();

    const [show, setShow] = useState(true);
    let white = '#fff'
    const [like, setLike] = useState(white)

    const handleshow = () => {
        setShow(!show);
    }

    const setColorchange = () => {
        let blue = '#0866ff';
        setLike(blue);
    }
    return (
        <div className={style.maindash}>
            <NavbarPage />
            <div className={style.main_dash}>
                <div className={style.firstelement}>
                    <Link className={style.startitem} href={'/'}>
                        <div>
                            <Image
                                className={style.imgaccount}
                                src={dpaccount}
                                width={30}
                                height={30}
                                quality={100}
                            />
                        </div>
                        <div className={style.namedp}>
                            {response}
                        </div>
                    </Link>
                    <Link href={'/'} className={style.startitem}>
                        <FaUserFriends size={24} color="#0866ff" />
                        <div className={style.nameitems}>
                            Friends
                        </div>
                    </Link>
                    <Link href={'/'} className={style.startitem}>
                        <BsFillBookmarkFill size={24} color="#A020F0" />
                        <div className={style.nameitems}>
                            Saved
                        </div>
                    </Link>
                    <Link href={'/signup'} className={style.startitem}>
                        <FaClockRotateLeft size={24} color="#0866ff" />
                        <div className={style.nameitems}>
                            Memories
                        </div>
                    </Link>
                    <Link href={'/'} className={style.startitem}>
                        <MdPeople size={24} color="#0866ff" />
                        <div className={style.nameitems}>
                            Groups
                        </div>
                    </Link>
                    <Link href={'/'} className={style.startitem}>
                        <MdSmartDisplay size={24} color="#0866ff" />
                        <div className={style.nameitems}>
                            videos
                        </div>
                    </Link>
                    <Link href={'/'} className={style.startitem}>
                        <ImHome size={24} color="#0866ff" />
                        <div className={style.nameitems}>
                            MarketPlace
                        </div>
                    </Link>
                    <Link href={'/'} className={style.startitem}>
                        <FaRadio size={24} color="#0866ff" />
                        <div className={style.nameitems}>
                            Feeds
                        </div>
                    </Link>
                    <Link href={'/'} className={style.startitem}>
                        <AiFillSignal size={24} color="#0866ff" />
                        <div className={style.nameitems}>
                            AdsManager
                        </div>
                    </Link>
                    <Link href={'/'} className={style.startitem}>
                        <FaHandHoldingHeart size={24} color="#0866ff" />
                        <div className={style.nameitems}>
                            FundRaiser
                        </div>
                    </Link>
                    <Link href={'/'} className={style.startitem}>
                        <MdBloodtype size={27} color="red" />
                        <div className={style.nameitems}>
                            Blood Donation
                        </div>
                    </Link>
                    <Link href={'/'} className={style.startitem}>
                        <RiTreeFill size={27} color=" #2A7E19" />
                        <div className={style.nameitems}>
                            climate science center
                        </div>
                    </Link>
                    <Link href={'/'} className={style.startitem}>
                        <IoGameController size={27} color=" #2A7E19" />
                        <div className={style.nameitems}>
                            Play Games
                        </div>
                    </Link>

                </div>
                <div className={style.secondelement}>
                    <div className={style.mainmiddle}>
                        <div className={style.storybar}>
                            <div className={style.storynav}>
                                <div className={style.story_navitem}><IoBookSharp size={30} color="#0866ff" /> <div>Stories</div></div>
                                <div className={style.story_navitem}><PiFilmReelBold size={30} color="#0866ff" /> <div>Reels</div></div>
                            </div>
                            <hr className={style.hr} />
                            <div className={style.mainstory}>

                                <Responsive />

                            </div>
                        </div>
                        <div className={style.mind}>
                            <div className={style.flexmind}>
                                <Image
                                    src={dpaccount}
                                    width={100}
                                    height={100}
                                    quality={100}
                                    className={style.minddp}
                                />
                                <div className={style.inpt}>
                                    Whats on your mind name  ?
                                </div>
                            </div>
                            <hr className={style.mindhr} />
                            <div className={style.downflexitems}>
                                <div className={style.innermind}>
                                    <IoVideocam size={25} color="red" />
                                    <div style={{ fontSize: "18px", fontFamily: "inherit", fontWeight: "600", color: "#1c1c1c" }}>Live video</div>
                                </div>
                                <div className={style.innermind}>
                                    <TbPhotoFilled size={25} color="#7FFF00" />
                                    <div style={{ fontSize: "18px", fontFamily: "inherit", fontWeight: "600", color: "#1c1c1c" }}>Photo / Video</div>
                                </div>
                                <div className={style.innermind}>
                                    <BsEmojiSmile size={25} color="yellow" />
                                    <div style={{ fontSize: "18px", fontFamily: "inherit", fontWeight: "600", color: "#1c1c1c" }}>Feeling/ Activity</div>
                                </div>
                            </div>
                        </div>
                        <div className={style.mainpost}>
                            {
                                show &&
                                <div>

                                    <div className={style.postnav}>
                                        <div className={style.oneside}>
                                            <Image
                                                src={dpaccount}
                                                height={100}
                                                width={100}
                                                quality={100}
                                                className={style.postimg}
                                            />
                                            <div className={style.postname}>
                                                Your name
                                            </div>
                                        </div>
                                        <MdCancel size={26} className={style.icon} onClick={() => handleshow()} />
                                    </div>
                                    <div className={style.realpost}>
                                        <Image
                                            src={dpaccount}
                                            width={100}
                                            height={100}
                                            quality={100}
                                            className={style.mainpost_img}
                                        />
                                    </div>
                                    <div className={style.mainsection}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <AiOutlineLike size={35} onClick={() => setColorchange()} style={{ backgroundColor: like, padding: "5px", borderRadius: "50%", border: "none" }} />
                                            <div style={{ fontSize: "18px", fontFamily: "inherit", fontWeight: "600", color: "#000" }}>Like</div>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <input type="text" name="comment" placeholder="Comment" className={style.comnt} />
                                            <IoSend size={35} className={style.comntbtn} />
                                        </div>
                                        <div>
                                            <FaShare size={35} className={style.sharebtn} />
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className={style.mainpost}>
                            {
                                show &&
                                <div>

                                    <div className={style.postnav}>
                                        <div className={style.oneside}>
                                            <Image
                                                src={dpaccount}
                                                height={100}
                                                width={100}
                                                quality={100}
                                                className={style.postimg}
                                            />
                                            <div className={style.postname}>
                                                Your name
                                            </div>
                                        </div>
                                        <MdCancel size={26} className={style.icon} onClick={() => handleshow()} />
                                    </div>
                                    <div className={style.realpost}>
                                        <Image
                                            src={dpaccount}
                                            width={100}
                                            height={100}
                                            quality={100}
                                            className={style.mainpost_img}
                                        />
                                    </div>
                                    <div className={style.mainsection}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <AiOutlineLike size={35} onClick={() => setColorchange()} style={{ backgroundColor: like, padding: "5px", borderRadius: "50%", border: "none" }} />
                                            <div style={{ fontSize: "18px", fontFamily: "inherit", fontWeight: "600", color: "#000" }}>Like</div>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <input type="text" name="comment" placeholder="Comment" className={style.comnt} />
                                            <IoSend size={35} className={style.comntbtn} />
                                        </div>
                                        <div>
                                            <FaShare size={35} className={style.sharebtn} />
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className={style.mainpost}>
                            {
                                show &&
                                <div>

                                    <div className={style.postnav}>
                                        <div className={style.oneside}>
                                            <Image
                                                src={dpaccount}
                                                height={100}
                                                width={100}
                                                quality={100}
                                                className={style.postimg}
                                            />
                                            <div className={style.postname}>
                                                Your name
                                            </div>
                                        </div>
                                        <MdCancel size={26} className={style.icon} onClick={() => handleshow()} />
                                    </div>
                                    <div className={style.realpost}>
                                        <Image
                                            src={dpaccount}
                                            width={100}
                                            height={100}
                                            quality={100}
                                            className={style.mainpost_img}
                                        />
                                    </div>
                                    <div className={style.mainsection}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <AiOutlineLike size={35} onClick={() => setColorchange()} style={{ backgroundColor: like, padding: "5px", borderRadius: "50%", border: "none" }} />
                                            <div style={{ fontSize: "18px", fontFamily: "inherit", fontWeight: "600", color: "#000" }}>Like</div>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <input type="text" name="comment" placeholder="Comment" className={style.comnt} />
                                            <IoSend size={35} className={style.comntbtn} />
                                        </div>
                                        <div>
                                            <FaShare size={35} className={style.sharebtn} />
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                        <div style={{ marginTop: "2rem" }}></div>
                    </div>
                </div>
                <div className={style.thirdelement}>
                    <div className={style.mainContact}>
                        <div className={style.contactnav}>
                            <div className={style.contactname}>Contact</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <IoIosSearch size={25} />
                                <BsThreeDots size={25} />
                            </div>
                        </div>
                        <div className={style.profilecontact}>
                            <Image
                                src={dpaccount}
                                width={100}
                                height={100}
                                quality={100}
                                className={style.postimg}
                            />
                            <div>Name person</div>
                        </div>
                        <div className={style.profilecontact}>
                            <Image
                                src={dpaccount}
                                width={100}
                                height={100}
                                quality={100}
                                className={style.postimg}
                            />
                            <div>Name person</div>
                        </div>
                        <div className={style.profilecontact}>
                            <Image
                                src={dpaccount}
                                width={100}
                                height={100}
                                quality={100}
                                className={style.postimg}
                            />
                            <div>Name person</div>
                        </div>
                        <div className={style.profilecontact}>
                            <Image
                                src={dpaccount}
                                width={100}
                                height={100}
                                quality={100}
                                className={style.postimg}
                            />
                            <div>Name person</div>
                        </div>
                        <div className={style.profilecontact}>
                            <Image
                                src={dpaccount}
                                width={100}
                                height={100}
                                quality={100}
                                className={style.postimg}
                            />
                            <div>Name person</div>
                        </div>
                        <div className={style.profilecontact}>
                            <Image
                                src={dpaccount}
                                width={100}
                                height={100}
                                quality={100}
                                className={style.postimg}
                            />
                            <div>Name person</div>
                        </div>
                        <div className={style.profilecontact}>
                            <Image
                                src={dpaccount}
                                width={100}
                                height={100}
                                quality={100}
                                className={style.postimg}
                            />
                            <div>Name person</div>
                        </div>
                        <div className={style.profilecontact}>
                            <Image
                                src={dpaccount}
                                width={100}
                                height={100}
                                quality={100}
                                className={style.postimg}
                            />
                            <div>Name person</div>
                        </div>
                        <div className={style.profilecontact}>
                            <Image
                                src={dpaccount}
                                width={100}
                                height={100}
                                quality={100}
                                className={style.postimg}
                            />
                            <div>Name person</div>
                        </div>
                        <div className={style.profilecontact}>
                            <Image
                                src={dpaccount}
                                width={100}
                                height={100}
                                quality={100}
                                className={style.postimg}
                            />
                            <div>Name person</div>
                        </div>
                        <div className={style.profilecontact}>
                            <Image
                                src={dpaccount}
                                width={100}
                                height={100}
                                quality={100}
                                className={style.postimg}
                            />
                            <div>Name person</div>
                        </div>
                        <div className={style.profilecontact}>
                            <Image
                                src={dpaccount}
                                width={100}
                                height={100}
                                quality={100}
                                className={style.postimg}
                            />
                            <div>Name person</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}