import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import './about.css'
import pic5 from './pic5.jpg';
import pngwing from './pngwing.png'

const About = () => {

    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "Python",
                "Java",
                "C++",
                "C#",
                "Ruby",
                "Rust",
                "Go",
                "Swift",
                "Kotlin",
                "R",
                "SQL",
                "Dart",
            ];
            const option = {
                redius: 3000,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };
            TagCloud(container, texts, option);
        };
    }, []);
    return (
        <div >
            <section className="about_wrapper ">
                <div className="about_main_page">
                    <div className="about_main_page_container  flex w-full">
                        <div className="about_main_page_content  flex flex-col justify-center items-center w-[40%] pl-20px ">
                            <h1 className="font-600 text-white text-2xl text-left leading-9">Reliable software Engineering Partners</h1>
                            <p className="text-white text-left p-[25px] leading-[35px]">"As a group of highly motivated professionals, we help bussinesses of different sizes to innovate, improvise, and digitalize."</p>
                            <a href="#letsDiscuss" className="about_main_page_content_button">Let's talk</a>
                        </div>
                        <div className="about_main_page_canvas  w-[60%] text-center">
                            <div className="about_main_page_canvas_div">
                                <img src="" alt="" />
                                {/* <canvas width="700" height="650" id="myCanvas" style=""></canvas> */}
                            </div>
                            <div className="text-sphere flex justify-center items-center">
                                <span id="root" className="tagcloud" />
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <div id="statsAbout" class="stats stats--blue stats--overlay">
                <div class="container">
                    <div class="stats__wrapper p-10 mb-5">

                        <div class="stats__item stats__item--4">
                            <div class="stats__content stats__content--vertically">
                                <h2 className="stats__number stats__number">9+</h2>
                                <h3 class="stats__heading text-white">Years of Experience</h3>
                            </div>
                        </div>

                        <div class="stats__item stats__item--4">
                            <div className="stats__content ">
                                <h2 class="stats__number stats__number--inline stats__number--large">500+</h2>
                                <h3 class="stats__heading stats__heading--inline">Satisfied Clients</h3>
                            </div>
                        </div>

                        <div class="stats__item stats__item--4">
                            <div class="stats__content stats__content--vertically">
                                <h2 class="stats__number stats__number--inline stats__number--large">250+</h2>
                                <h3 class="stats__heading stats__heading--inline">Expert Developers</h3>
                            </div>
                        </div>

                        <div class="stats__item stats__item--4">
                            <div class="stats__content stats__content--vertically">
                                <h2 class="stats__number stats__number--inline stats__number--large">5</h2>
                                <h3 class="stats__heading stats__heading--inline">Global Offices</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="pl-[12%] pr-[12%]">
                <div className=' p-2 w-full ' >
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

            <div className="pl-[12%] pr-[12%]">
                <div className="pt-10">
                    <div className="text-center">
                        <h1 className="text-3xl text-black font-semibold">Brand that Trust Us</h1>
                        <p>Brand across diverse industry verticals trust us for our cost-effictive and state-f-the digital products.</p>
                    </div>
                    <div className="brand_that_trust_us">
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>
                        <div className="brand_that_trust_us_img">
                            <img src={pngwing} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;