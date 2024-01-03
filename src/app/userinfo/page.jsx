'use client'

import { doPost } from '../actions/reqActions';
import style from './user.module.css';
import { useEffect, useState } from "react";

export default function userInfo() {

    const [degree, setDegree] = useState(false);
    const clickhandler = () => {
        setDegree(!degree);
    }

    const [image, setImage] = useState(null);
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const [toasting, setToasting] = useState();

    const submithandler = async (e) => {
        e.preventDefault();
        try {
            let data = {};
            formdata.forEach((value, key) => (data[key] = value ));
            console.log(data);
            const res = await doPost('/userroute', data);
            if (res.status === 200) {
                setToasting(toast.success('Your data has been posted !', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                }))
            }
            else if (res.status === 500) {
                setToasting(toast.error('Please enter the Unique Email-Id please try again ', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                }))
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (

        <div className={style.mainform}>
            {/* <h2>Hey {response} Your id is {id}</h2> action={posthandler}*/}
            {
                toasting &&
                <ToastContainer position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored" />
            }

            <form className={style.form} onSubmit={submithandler}>
                <div className={style.basic}>
                    <div className={style.background} >
                        <div className={style.headinfo}>Basic Information</div>
                    </div>
                    <div className={style.maininpt}>
                        <label htmlFor="fullname" className={style.label}>Full Name :</label>
                        <input type="text" name="fullname" id="fullname" className={style.inpt} />
                    </div>
                    <div className={style.gender}>
                        <div className={style.genname}> Gender :</div>
                        <div className={style.genin}>
                            <label htmlFor="Male">Male </label>
                            <input type="radio" name="gender" id="Male" className={style.radio} value="Male" />
                        </div>
                        <div className={style.genin}>
                            <label htmlFor="Female">Female </label>
                            <input type="radio" name="gender" id="Female" className={style.radio} value="Female" />
                        </div>
                    </div>
                    <div className={style.maininpt}>
                        <label htmlFor="address" className={style.label}>Address :</label>
                        <input type="text" name="address" className={style.inpt} />
                    </div>
                    <div className={style.maininpt1}>
                        <label htmlFor="education" className={style.genname}>Choose your Education :</label>
                        <select name="education" id="education" className={style.sel}>
                            <option value="uneducate">Uneducated </option>
                            <option value="10th Pass">10th Pass</option>
                            <option value="12th Pass">12th Pass</option>
                            <option value="Degree Holder">Degree Holder</option>
                        </select>
                    </div>
                    <div className={style.choose}>
                        <input type="file" name="img" id="image" onChange={onImageChange} className={style.filetype} />
                        <img src={!image ? " " : image} className={style.img} />
                    </div>
                </div>
                <input type="submit" className={style.btn} value="submit" />
            </form>
        </div>
    )
}