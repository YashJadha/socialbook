'use client'

import { ToastContainer, toast } from 'react-toastify';
import style from './login.module.css'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from 'next/link'
import { redirect } from 'next/navigation';

export default function LoginForm() {


    const session = useSession();
    // const router = useRouter();



    async function loginhandler(formData) {
        let data = {};
        formData.forEach((value, key) => (data[key] = value));
        const res = await signIn('credentials', data);
    }

    if (session.status === "authenticated") {
        redirect('/userinfo');
    }

    return (
        <div className="mainpage_login">
            <div className={style.maindiv}>
                <div className={style.mainform}>

                    <div className={style.headlogin}>Login</div>

                    <button onClick={() => signIn('google')} className={style.signbtn}>
                        <Image
                            src={'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'}
                            height={45}
                            quality={100}
                            width={45}
                        />
                        <span className={style.spanbtn}>
                            Sign With Google
                        </span>
                    </button>

                    <div className={style.or}>
                        Or
                    </div>

                    <form action={loginhandler}>

                        <div className={style.inpts}>
                            <MdEmail size={20} color="#fff" />
                            <input type="email" name="email" id="" placeholder="Enter Email" className={style.inptfield} />
                        </div>
                        <div className={style.inpts}>
                            <RiLockPasswordFill size={20} color="#fff" />
                            <input type="password" name="password" id="" placeholder="Enter password" className={style.inptfield} />
                        </div>

                        <div className={style.term}>
                            <input type="radio" name="radiobtn" id="" style={{ cursor: "pointer" }} />
                            <div>I agree all statements in <span style={{ color: "red", fontSize: "18px", fontFamily: "-moz-initial", cursor: "pointer", textDecoration: "underline", fontWeight: "bold" }} >terms and services</span></div>
                        </div>

                        <input value="Sign In" type="submit" className={style.submit} />
                    </form>

                    <Link href={'/register'} className={style.register}>
                        go to register
                    </Link>
                </div>
            </div>
        </div>
    )
}


