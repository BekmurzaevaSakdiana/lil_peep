import { useState } from 'react'
import { NavLink , Link} from 'react-router-dom'
import Busket from './Busket'
import Liked from './Liked'


function Header() {
    const [open, setOpen] = useState(false)

    const handleOpened = () => {
        setOpen(!open)
    }


    const [openLiked, setOpenLiked] = useState(false)

    const handleOpennedLike = () => {
        setOpenLiked(prev => !prev)
    }


    return (
        <header className='flex items-center justify-around '>
            <div className="logo flex items-center">
                <h1 className='cry__baby hover:text-pink-300 '>Cry Baby</h1>
                <img className='max-w-[70px] w-[100%] ' src="./img/cry__baby.jpg" alt="" />
            </div>

            <div className="navigation ">
                <nav className='flex'>
                    <ul className='flex items-center justify-center gap-7 '>
                        <li className='hover:text-pink-300 text-base custom-font'>
                            <NavLink   className={({isActive} ) => isActive ? '' : ''} to="/about">About <span className='text-pink-300 hover:text-black custom-font'> Lil__Peep </span></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="register flex items-center gap-6">
                <div className="corzina__like flex items-center gap-3">
                    <div onClick={handleOpened} className="corzina flex items-center gap-1 cursor-pointer">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className='custom-font text-base'>basket</p>
                    </div>

                    <div onClick={handleOpennedLike} className="like flex items-center gap-1">

                        <svg className='' xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                            <g clipPath="url(#clip0_60_590)">
                                <path d="M12.9537 0C14.3511 0 15.5249 0.47123 16.4751 1.41369C17.4253 2.35615 17.9004 3.5065 17.9004 4.86475C17.9004 5.53002 17.7607 6.20221 17.4812 6.88134C17.2017 7.56047 16.8943 8.16336 16.5589 8.69003C16.2235 9.2167 15.6576 9.89582 14.8611 10.7274C14.0646 11.559 13.3939 12.2312 12.8489 12.744C12.3039 13.2568 11.4305 14.0399 10.2288 15.0932L8.92924 16.2574L7.62968 15.1348C6.45588 14.0537 5.58951 13.2568 5.03056 12.744C4.4716 12.2312 3.79388 11.559 2.99737 10.7274C2.20087 9.89582 1.63493 9.2167 1.29956 8.69003C0.96419 8.16336 0.663754 7.56047 0.398252 6.88134C0.132751 6.20221 0 5.53002 0 4.86475C0 3.5065 0.475108 2.35615 1.42532 1.41369C2.37554 0.47123 3.53536 0 4.90479 0C6.52575 0 7.86723 0.623686 8.92924 1.87106C9.99124 0.623686 11.3327 0 12.9537 0ZM9.01308 13.8043C10.3825 12.5846 11.3816 11.6768 12.0105 11.0808C12.6393 10.4849 13.331 9.77109 14.0856 8.93951C14.8401 8.10792 15.3642 7.38029 15.6576 6.7566C15.9511 6.13292 16.0978 5.5023 16.0978 4.86475C16.0978 3.97773 15.7973 3.24317 15.1965 2.66106C14.5956 2.07895 13.848 1.7879 12.9537 1.7879C12.2829 1.7879 11.6471 1.98194 11.0463 2.37001C10.4454 2.75808 10.0192 3.25703 9.76766 3.86686H8.09081C7.86723 3.25703 7.455 2.75808 6.85413 2.37001C6.25326 1.98194 5.60348 1.7879 4.90479 1.7879C4.01047 1.7879 3.26986 2.07895 2.68296 2.66106C2.09606 3.24317 1.80262 3.97773 1.80262 4.86475C1.80262 5.5023 1.94235 6.13292 2.22183 6.7566C2.5013 7.38029 3.02532 8.10792 3.79388 8.93951C4.56243 9.77109 5.26112 10.4849 5.88994 11.0808C6.51876 11.6768 7.50391 12.5846 8.84539 13.8043L8.92924 13.8874L9.01308 13.8043Z" fill="#9B9B9B" />
                            </g>
                            <defs>
                                <clipPath id="clip0_60_590">
                                    <rect width="18.11" height="16.299" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='custom-font text-base '>liked</p>


                    </div>

                </div>
                
                <Link to={''} className='px-[10px] py-[10px] bg-pink-300 rounded text-base custom-font' >to sign up</Link>
                <Link to={'/login'} className='px-[20px] py-[10px] bg-black text-white rounded text-base custom-font'>login</Link>

                {open && <Busket handleOpened={handleOpened} />}
                {openLiked && <Liked handleOpennedLike={handleOpennedLike} />}

            </div>
        </header>
    )


}

export default Header