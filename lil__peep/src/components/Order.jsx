import React, { useState } from "react";
import { useContext, } from "react";
import CartContext from "../Context/CartContext";
import Register from "./Register";

export async function botSend(text) {
    let chatId = 5539164711;
    let token = "6735800472:AAEQLWifr4ii4ifncymJK29Qy7BxZ5HwaQI";
    let data = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text,
        }),
    });
    return data;
}

function Order({ handleOrderClick }) {

    const [card, setCard] = useContext(CartContext)
    const [isAuthed, setAuthed] = useState(false)

    const handleOrder = (e) => {
        e.preventDefault()
        let chatId = localStorage.getItem('tgId')
        if (!chatId) return setAuthed(true)
        let data = new FormData(e.target)
       
        // data = Object.fromEntries(data.entries())
        let text = ''
        for (let [key, item] of data.entries()) {
            text += `${key}: ${item}\n`
        }
        text += card.map((item, index) => `${index + 1}) ${item.title}\n`).join('')

        let response = botSend(text)
        response.then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }


    return (


        <div className="fixed top-0 left-0 z-20 w-full h-screen  bg-[#000000bd] opacity-1 flex justify-center items-center gap-[30px] ">
{
   
    isAuthed &&  <Register setClose={setAuthed}/>
}
            <div className="w-[350px] p-5 bg-gray-500 text-center">

                <div onClick={handleOrderClick} className="krestik flex justify-end ">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                        <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                    </svg>
                </div>

                <form onSubmit={handleOrder} className="text-start pb-4" action="">
                    <label htmlFor="title"><p className="text-pink-300 custom-font text-base mt-6">Name:</p></label>
                    <input name="title" id="title" className="rounded px-[10px] w-full py-[5px]" type="text" required />

                    <label htmlFor="email"><p className="text-pink-300 custom-font text-base mt-6">Email:</p></label>
                    <input name="email" id="email" className="rounded px-[10px] w-full py-[5px]" type="text" required />

                    <label htmlFor="number"><p className="text-pink-300 custom-font text-base mt-6">Number:</p></label>
                    <input name="number" id="number" className="rounded px-[10px] w-full py-[5px] " type="number" required />
                <button className="rounded-lg width-[100%] px-[30px] py-[10px] text-white custom-font text-base bg-pink-300">SEND</button>

                </form>
            </div>

        </div>

    )
}

export default Order