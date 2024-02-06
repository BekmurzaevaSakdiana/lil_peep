import { useState } from 'react'



function AboutPeep() {

    return (

        <div className="lil__peep ">
            <div className="container px-[20px] py-[20px] ">
                <div className="img__text flex items-center justify-center gap-5 relative z-10">
                    <div className="image w-[400px]">
                        <img className='' src="./img/lilPeep2.jpg" alt="" />
                    </div>

                    <div className="text">
                        <div className="title  ">
                            <h1 className='text-red-900  font-black cry__baby '>Lil Peep</h1>
                            <h4 className='text-base custom-font'>Gustav Elijah Åhr</h4>
                        </div>

                        <div className="w-[100%] text-center min-w-[800px] mt-8">
                            <table className="min-w-full border-collapse border border-gray-300 z-30">
                                <thead className="bg-pink-300">
                                    <tr>
                                        <th colSpan="2" className="py-2 px-4 border text-base custom-font">About LIL PEEP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-6 px-6 border font-bold text-base custom-font">Career</td>
                                        <td className="py-6 px-6 border text-base custom-font">Actor, Composer, Director</td>
                                    </tr>
                                    <tr>
                                        <td className="py-6 px-6 border font-bold text-base custom-font">Height</td>
                                        <td className="py-6 px-6 border text-base custom-font">1.85</td>
                                    </tr>
                                    <tr>
                                        <td className="py-6 px-6 border font-bold text-base custom-font">Date of Birth</td>
                                        <td className="py-6 px-6 border text-base custom-font">November 1, 1996 • Scorpio</td>
                                    </tr>
                                    <tr>
                                        <td className="py-6 px-6 border font-bold text-base custom-font">Place of Birth</td>
                                        <td className="py-6 px-6 border text-base custom-font">Long Island, New York, USA</td>
                                    </tr>
                                    <tr>
                                        <td className="py-6 px-6 border font-bold  text-base custom-font">Date of death</td>
                                        <td className="py-6 px-6 border text-base custom-font">November 15, 2017 • 21 years old</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>


            </div>
        </div>


    )
}

export default AboutPeep