import { useContext, useEffect, useState } from 'react'
import CartContext from '../Context/CartContext'
import LikeContext from '../ContextForLiked/LikeContext'



function Card({ id, title, price, imgUrl }) {
    // ЭТО ВСЕ ДЛЯ КОРЗИНЫ
    const [card, setCard] = useContext(CartContext)
    const [press, setPressed] = useState(true)
    useEffect(() => {
        setPressed(!card.some(item => item.id == id))
    }, [card])


    const handleButtonClick = () => {
        if (card.some(item => item.id == id)) {
            let newData = card.filter(item => item.id != id)
            setCard(newData)
            localStorage.setItem('cart', JSON.stringify(newData))

            setPressed(true)
        } else {
            let newData = [...card, { id, title, price, imgUrl }]
            setCard(newData)
            localStorage.setItem('cart', JSON.stringify(newData))
            setPressed(false)
        }
    }


    // ЭТО ВСЕ ДЛЯ LIKE
    const [liked, setLiked] = useContext(LikeContext);
    const [pressLiked, setPressedLiked] = useState(true);
    
    useEffect(() => {
        setPressedLiked(!liked.some(item => item.id === id));
    }, [liked, id]);
    
    const handleLikeClick = () => {
        if (liked.some(item => item.id === id)) {
            let newLike = liked.filter(item => item.id !== id);
            setLiked(newLike);
            localStorage.setItem('like', JSON.stringify(newLike));
            setPressedLiked(true);
        } else {
            let newLike = [...liked, { id, title, price, imgUrl }];
            setLiked(newLike);
            localStorage.setItem('like', JSON.stringify(newLike));
            setPressedLiked(false);
        }
    };


    return (
        <div>
            <div className="second__section ">

                <div className="container py-[30px] px-[30px] mx-auto flex ">
                    <div className="cards flex items-center justify-center gap-6">

                        <div className="card max-w-[400px] w-[100%] bg-pink-100 rounded-lg">
                            <div className="liked ml-[20px] mt-[20px] ">
                                <div className="btn">
                                    <button onClick={handleLikeClick} >

                                   <svg className={!pressLiked ? 'fill-red-500' : ''} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="white" stroke="#F8F8F8" />
                                            <path d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z" stroke="#EAEAEA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        
                                    </button>

                                </div>

                            </div>
                            <img className='max-w-[700px] w-[100%] px-[10px] py-[10px] rounded ' src={imgUrl} alt="" />
                            <h1 className='flex items-center justify-center cry__baby '>{title} </h1>
                            <div className="price__btn flex items-center justify-center gap-[30px] ">
                                <div className="price flex items-center gap-2">
                                    <b className='custom-font'>Price:</b>
                                    <h4 className='custom-font'>{price} руб </h4>
                                </div>
                                <div className="btn">
                                    <button onClick={handleButtonClick} >
                                        {press ? (
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                                                <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                                            </svg>
                                        ) : (
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="32" height="32" rx="8" fill="url(#paint0_linear_60_200)" />
                                                <g clip-path="url(#clip0_60_200)">
                                                    <g filter="url(#filter0_d_60_200)">
                                                        <path d="M19.6567 11.6207C19.8394 11.4363 20.0876 11.3318 20.3471 11.3299C20.6066 11.3279 20.8563 11.4288 21.0416 11.6105C21.227 11.7921 21.3329 12.0398 21.3362 12.2993C21.3395 12.5588 21.24 12.809 21.0594 12.9954L15.8327 19.5294C15.7429 19.626 15.6346 19.7036 15.5141 19.7575C15.3937 19.8114 15.2636 19.8404 15.1317 19.8429C14.9998 19.8454 14.8687 19.8213 14.7463 19.772C14.6239 19.7227 14.5127 19.6492 14.4194 19.556L10.954 16.092C10.7699 15.9078 10.6665 15.6579 10.6665 15.3975C10.6666 15.137 10.7701 14.8872 10.9544 14.703C11.1386 14.5189 11.3885 14.4155 11.6489 14.4155C11.9094 14.4156 12.1592 14.5191 12.3434 14.7034L15.084 17.4447L19.6307 11.6514C19.639 11.6408 19.6479 11.6308 19.6574 11.6214L19.6567 11.6207Z" fill="white" />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_60_200" x="10.6665" y="11.3298" width="10.6698" height="10.5132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy="2" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_200" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_200" result="shape" />
                                                    </filter>
                                                    <linearGradient id="paint0_linear_60_200" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#89F09C" />
                                                        <stop offset="1" stop-color="#3CC755" />
                                                    </linearGradient>
                                                    <clipPath id="clip0_60_200">
                                                        <rect width="10.6667" height="10.6667" fill="white" transform="translate(10.6667 10.6667)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        )
                                        }

                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card




{/* <div className="card max-w-[400px] w-[100%] bg-pink-100 rounded-lg">
                            <div className="liked ml-[20px] mt-[20px] ">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="white" stroke="#F8F8F8" />
                                    <path d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z" stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <img className='max-w-[700px] w-[100%] px-[10px] py-[10px] rounded ' src="./img/hoodie2.jpg" alt="" />
                            <h1 className='flex items-center justify-center cry__baby '>White hoodie</h1>
                            <div className="price__btn flex items-center justify-center gap-[30px] ">
                                <div className="price flex items-center gap-2">
                                    <p className='custom-font'>Price:</p>
                                    <h4 className='custom-font'>8 999 руб.</h4>
                                </div>
                                <div className="btn">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                                    </svg>
                                </div>
                            </div>
                        </div> */}


{/* <div className="card w-[400px] bg-pink-100 rounded-lg">
                            <div className="liked ml-[20px] mt-[20px] ">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="white" stroke="#F8F8F8" />
                                    <path d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z" stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <img className='w-[700px] px-[10px] py-[10px] rounded ' src="./img/bag.jpg" alt="" />
                            <h1 className='flex items-center justify-center cry__baby '>Black Bag</h1>
                            <div className="price__btn flex items-center justify-center gap-[30px] ">
                                <div className="price flex items-center gap-2">
                                    <p className='custom-font'>Price:</p>
                                    <h4 className='custom-font'>8 999 руб.</h4>
                                </div>
                                <div className="btn">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                                    </svg>
                                </div>
                            </div>



                        </div>


                        <div className="card w-[400px] bg-pink-100 rounded-lg">
                            <div className="liked ml-[20px] mt-[20px] ">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="white" stroke="#F8F8F8" />
                                    <path d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z" stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <img className='w-[700px] px-[10px] py-[10px] rounded ' src="./img/tShort.jpg" alt="" />
                            <h1 className='flex items-center justify-center cry__baby '>Black T-shirt</h1>
                            <div className="price__btn flex items-center justify-center gap-[30px] ">
                                <div className="price flex items-center gap-2">
                                    <p className='custom-font'>Price:</p>
                                    <h4 className='custom-font'>8 999 руб.</h4>
                                </div>
                                <div className="btn">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                                    </svg>
                                </div>
                            </div>



                        </div>


                        <div className="card w-[400px] bg-pink-100 rounded-lg">
                            <div className="liked ml-[20px] mt-[20px] ">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="white" stroke="#F8F8F8" />
                                    <path d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z" stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <img className='w-[400px] px-[10px] py-[10px] rounded ' src="./img/tShort3.jpeg" alt="" />
                            <h1 className='flex items-center justify-center cry__baby '>Violet T-shirt</h1>
                            <div className="price__btn flex items-center justify-center gap-[30px] ">
                                <div className="price flex items-center gap-2">
                                    <p className='custom-font'>Price:</p>
                                    <h4 className='custom-font'>8 999 руб.</h4>
                                </div>
                                <div className="btn">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                                    </svg>
                                </div>
                            </div>



                        </div>

                        <div className="card w-[400px] bg-pink-100 rounded-lg">
                            <div className="liked ml-[20px] mt-[20px] ">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="white" stroke="#F8F8F8" />
                                    <path d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z" stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <img className='w-[700px] px-[10px] py-[10px] rounded ' src="./img/Shapka.jpg" alt="" />
                            <h1 className='flex items-center justify-center cry__baby '>Red cap</h1>
                            <div className="price__btn flex items-center justify-center gap-[30px] ">
                                <div className="price flex items-center gap-2">
                                    <p className='custom-font'>Price:</p>
                                    <h4 className='custom-font'>8 999 руб.</h4>
                                </div>
                                <div className="btn">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                                    </svg>
                                </div>
                            </div>



                        </div>
 */}




