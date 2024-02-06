import React, { useState } from "react";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import Order from "./Order";



function Busket({ handleOpened }) {
    const [card, setCard] = useContext(CartContext)

    const [openOrder, SetOpenOrder] = useState(false)

    const handleOrderClick = () => {
        SetOpenOrder(prev => !prev)
    }


    return (
        <div className="this__mf__busket  ">
            <div className="overlay fixed left-[0] top-[0] z-[1] w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)] "  >
                <div className="drawer flex-col absolute w-[400px] h-[100%] right-[0] bg-white px-[30px] py-[30px] " style={{ boxShadow: "-10px 4px 24px rgba(0,0,0,0.1)" }}>
                    <div className="text__svg flex items-center justify-between">
                        <h2 className="m-0 text-base custom-font mb-[20px] ">Busket</h2>


                        <div onClick={handleOpened} className="krestik">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                                <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                            </svg>
                        </div>
                    </div>


                    <div className="items">
                        {
                            card.map(item => (
                                <div className="cartItem flex items-center gap-4 px-[30px] py-[30px] border border-solid border-gray-500 rounded-e-xl truncate">
                                    <img className="w-[70px] h-[70px] mr-[20px] " src={item.imgUrl} alt="" />
                                    <div className="mr-[20px] ">
                                        <p className="mb-[5px] text-base custom-font ">{item.title}</p>
                                        <b className="text-sm custom-font">{item.price} руб</b>
                                    </div>
                                    <div onClick={() => {
                                        let newData = card.filter(el => item.id != el.id)
                                        localStorage.setItem('cart', JSON.stringify(newData))
                                        setCard(newData)
                                    }

                                    } className="removeBtn opacity-50 hover:opacity-100 cursor-pointer  transition-opacity duration-150 ease-in-out ">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                                            <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                                        </svg>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    {card.length > 0 ? (
                        <div className="totalBlock mx-auto">
                            <ul>
                                <li className="flex items-end justify-between ">
                                    <span className="text-base custom-font">Bill:</span>
                                    <div className="flex  flex-1 h-[1px] border border-dashed border-b relative top-[-4px]  "></div>
                                    <b className="text-base custom-font">{card.reduce((acc, item) => acc += item.price, 0)}</b>
                                </li>
                            </ul>
                            <button onClick={handleOrderClick} className=" mt-2 w-[100%] h-[55px] text-base custom-font bg-pink-300 rounded-lg mx-auto  ">Order</button> 
                        </div>
                        
                    ) : (
                        <p className="cry__baby text-base">КОРЗИНА ПУСТАААА</p>
                    )}



                   
                </div>
            </div>

            {openOrder && <Order handleOrderClick={handleOrderClick} />}


        </div>
    )
}

export default Busket