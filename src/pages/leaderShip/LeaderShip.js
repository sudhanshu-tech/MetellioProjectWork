import React from 'react'
import Swiper from 'swiper'
import './leaderShip.css'
import pic2 from './pic2.jpg'
import pic5 from './pic5.jpg'
const LeaderShip = () => {
    const row = [
        "https://assets.algoexpert.io/spas/main/prod/ge6051893ae-prod/dist/images/3cd767dea94a85078ca4.png",
        "https://assets.algoexpert.io/spas/main/prod/ge6051893ae-prod/dist/images/3b7d9f4b073deb6a9b74.png",
        "https://assets.algoexpert.io/spas/main/prod/ge6051893ae-prod/dist/images/a2b3c3709ffedce2a22a.png",
        "https://assets.algoexpert.io/spas/main/prod/ge6051893ae-prod/dist/images/6591cdc0702b32310306.png",
        "https://assets.algoexpert.io/spas/main/prod/ge6051893ae-prod/dist/images/b2bd91d7b87b2181ca45.png",
        "https://assets.algoexpert.io/spas/main/prod/ge6051893ae-prod/dist/images/7ae42bac3b34999c0db3.png"
    ]
    return (
        <div>
            <div className=''>
                <div className='relative'>
                    <img src={pic2} alt="" className='h-[50vh] w-full object-cover opacity-90' />
                    <h1 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black font-bold bg-opacity-800 text-3xl '>Leadership Team</h1>
                </div>
            </div>
            {/* seventh component---------start */}
            <div>
                <div className="pl-[12%] pr-[12%] pt-[20px] pb-[20px]">
                    <div className=' p-2 w-full  ' >

                        <div className='seventh_box m-[10px] '>
                            <div className='seventh_box_img p-[20px]'>
                                <img src={pic5} alt="Transportation andistics" className='object-cover w-full ' />
                            </div>

                            <div className='seventh_box_text p-3 ' id='Enterprise'>
                                <div className="seventh_box_heading"><h1 className='text-2xl font-bold p-2 w-[50%]'>Enterprise Software Development</h1></div>
                                <div className='seventh_box_para p-4 w-full'><p className=' text-sm'>As experienced transportation and logistics software development company,
                                    we offer various services that promote growth and innovation As experienced transportation and logistics software development company,
                                    we offer various services that promote growth and innovation</p>
                                </div>
                            </div>
                        </div>

                        <div className=' seventh_box  flex-row-reverse'>
                            <div className='seventh_box_img'>
                                <img src={pic5} alt="Transportation andistics" className='object-cover w-full ' />
                            </div>

                            <div className='seventh_box_text p-3 ' id='Enterprise'>
                                <div className="seventh_box_heading"><h1 className='text-2xl font-bold p-2 w-[50%]'>Enterprise Software Development</h1></div>
                                <div className='seventh_box_para p-4 w-full'><p className=' text-sm'>As experienced transportation and logistics software development company,
                                    we offer various services that promote growth and innovation As experienced transportation and logistics software development company,
                                    we offer various services that promote growth and innovation</p>
                                </div>
                            </div>
                        </div>

                        {/* -------------- */}
                        <div className=' seventh_box flex-row' id='LogisticsApp'>
                            <div className='seventh_box_img  '>
                                <img src={pic5} alt="Transportation andistics" className='object-cover w-full ' />
                            </div>

                            <div className='seventh_box_text p-3' id='LogisticsApp'>
                                <div className="seventh_box_heading"><h1 className='text-2xl font-bold p-2 w-[50%]'>Logistics App Development</h1></div>
                                <div className='seventh_box_para p-4 w-full'>
                                    <p className='text-sm'>As experienced transportation and logistics software development company,
                                        we offer various services that promote growth and innovation As experienced transportation and logistics software development company,
                                        we offer various services that promote growth and innovation
                                    </p>
                                </div>

                            </div>


                        </div>
                        {/* --------------- */}
                        <div className=' seventh_box  flex-row-reverse' id='LogisticsSoftware'>
                            <div className='seventh_box_img '>
                                <img src={pic5} alt="Transportation andistics" className='object-cover w-full ' />
                            </div>

                            <div className='seventh_box_text p-3' id='LogisticsSoftware'>
                                <div className="seventh_box_heading"><h1 className='text-2xl font-bold p-2 w-[50%]'>Logistics Software Modernization</h1></div>
                                <div className='seventh_box_para p-4 w-full'>
                                    <p className='text-sm'>As experienced transportation and logistics software development company,
                                        we offer various services that promote growth and innovation As experienced transportation and logistics software development company,
                                        we offer various services that promote growth and innovation
                                    </p>
                                </div>


                            </div>


                        </div>
                        {/* --------------- */}
                        <div className=' seventh_box  ' id='Software'>
                            <div className='seventh_box_img '>
                                <img src={pic5} alt="Transportation andistics" className='object-cover w-full ' />
                            </div>

                            <div className='seventh_box_text p-3'>
                                <div className="seventh_box_heading">
                                    <h1 className='text-2xl font-bold p-2 w-[50%]'>Software Consulting Services</h1>
                                </div>
                                <div className='seventh_box_para p-4 w-full'>
                                    <p className='text-sm'>Initially starting with a group of four engineers in a small room,
                                        today we have grown to more than 250 engineers
                                        in our centres located in leading countries worldwide.
                                        Headquartered in San Jose, we have our offices in Denver and the United Kingdom. Our services and business
                                        solutions are also strengthened
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* seventh component ------------ end */}
            <div className="banner">
                <div className="marquee-container">
                    <marquee behavior="" direction="row" className="marquee">
                        <div className='marqueegroup'>
                        {
                            row.map((item,index)=>
                                <div className='imagegroup'>
                                    <img src={item} alt="image" key={index} />
                                </div>
                            )
                        }
                        </div>
                    </marquee>

                    {/* Add other logo images here */}
                </div>
            </div>
        </div>
    )
}

export default LeaderShip
