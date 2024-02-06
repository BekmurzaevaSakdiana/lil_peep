import React, { useEffect, useState } from "react";

async function botGet(text) {
   
    let token = "6735800472:AAEQLWifr4ii4ifncymJK29Qy7BxZ5HwaQI";
    let data = await fetch(`https://api.telegram.org/bot${token}/getUpdates`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  }

function Register({setClose}) {
    let [myKey, setKey] = useState()
    useEffect(() => {
        let key = localStorage.getItem('scrKey')
        if (key) {
            setKey(key)
            return
        }

        let arr = ['A', "B", "C"]
        let random = Number(String(Math.random()).slice(2))
        let newKey = random + arr[0] + arr[1]
        setKey(newKey)
        localStorage.setItem('scrKey', newKey)
    })


const checkStatus = () => {
    let response = botGet().then(res => res.json())
    response.then(res => {
        let {result} = res
        for(let i of result) {
            if (i.message.text == myKey) {
                localStorage.setItem('tgId', i.message.from.id )
           setClose(prev => !prev   )
                return
            }
        }
    })
}

    return (
        <div className="fixed top-0 left-0 z-20 w-full h-screen  bg-[#000000bd] opacity-1 flex justify-center items-center rounded ">
            <div className="w-[400px] p-5 bg-gray-500 text-center rounded">

                <div onClick={() => setClose(prev => !prev)} className="krestik flex justify-end">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                        <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                    </svg>
                </div>

                <div className="text">
                    <a href="https://t.me/lil_peep_shop_bot">MY BOT</a>
                    <p className="text-white custom-font text-lg" > If you want to order, then confirm your telegram account!</p>
                    <h1 className="text-white custom-font mt-[30px] text-lg  " >
                        Our KEY:
                        <span className="ml-[20px] text-yellow-200 ">{myKey}</span>
                    </h1>
                </div>
                <button onClick={checkStatus} className="px-2 py-1 bg-green-500 rounded-lg hover:bg-green-700">CHECK</button>
            </div>
        </div>
    );

}

export default Register