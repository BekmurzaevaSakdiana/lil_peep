import { useState } from 'react'
import Header from './Header'



function Main() {
    return (
        <div className='main'>
            <div className="container mx-auto py-[30px] px-[30px] relative   ">
                <main>
                    <section>
                        <div className="first__section">
                            <div className="container py-[30px] px-[30px]">

                                <form className="flex max-w-[400px] w-[100%] items-center justify-center mx-auto">
                                    <input
                                        type="text"
                                        placeholder="Search... "
                                        className="border flex-1 p-2 rounded-l-md text-base custom-font"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-pink-300 text-black p-2 rounded-r-md text-base custom-font"
                                    >
                                        find
                                    </button>
                                </form>


                                <div className="img__text mt-[30px]">
                                    <div className=" rounded bg-cover bg-no-repeat bg-right h-[500px] w-fuul flex items-center " style={{ backgroundImage: `url("/img/lilPeep3.jpg")` }}>
                                        <div>
                                            <h1 className='cry__baby text-white hover:text-pink-300 font-bold ml-[300px] mb-[20px] '>LIL PEEP</h1>
                                            <h1 className='text-white ml-[300px] text-2xl custom-font '> Long story short,buy my merch :) </h1>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </main>
            </div>
        </div>
    )
}

export default Main