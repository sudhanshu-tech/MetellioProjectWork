import React,{useState} from 'react'
import './cssfile/industries.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-solid-svg-icons'
import pic5 from './pic5.jpg';



const TransportationLogistics = () => {
  const [isExpandable, setIsExpandable] = useState([false, false, false, false,false,false,false,false]);

  // const logos = [
  //   { name: 'AWS Partner Network', logoUrl: 'aws-logo.png' },
  //   { name: 'STPI – Startup India', logoUrl: 'startup-india-logo.png' },
  //   { name: 'STPI – Startup India', logoUrl: 'startup-india-logo.png' },
  //   { name: 'STPI – Startup India', logoUrl: 'startup-india-logo.png' },
  //   // Add more logos as needed
  // ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '',
    captchaAnswer: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };
  const handleToggle = (index) => {
    const newExpandableState = [...isExpandable];
    newExpandableState[index] = !newExpandableState[index];
    setIsExpandable(newExpandableState);
  };
  
  return (
    <div className='flex flex-col relative'>
      <div className='transportation_container absolute z-1'></div>
      <div className=' m-1 border-2 border-red-500 ml-[12%] mr-[12%] ' >
        <div class="border-2 border-yellow-500 m-1 ">
          <div className='sub_container  m-1'>
            <div class="box1">
              <div class="box2">
                <div class="box2_1">
                  <h1>Transportation And Logistics Software Development</h1>
                </div>
                <div class="box2_2">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus sapiente eligendi deserunt distinctio aspernatur placeat,
                    nostrum voluptate a quam ut! Repellat iusto vel asperiores laboriosam iure,
                    debitis dolorem praesentium repudiandae, cumque omnis officiis fugit nam error
                    eligendi, quos blanditiis eos et? Excepturi porro perspiciatis adipisci
                    usto vel eveniet vitae consequatur!
                  </p>
                </div>
                <div class="box2_3">
                  <button>EXPLORE OUR SERVICES</button>
                </div>
              </div>

              {/* CONTACT-FORM--------START */}

              <div className="contact-form">
                <h2 className='text-center'>Get In Touch With Us</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company-email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <textarea
                    name="requirement"
                    placeholder="Tell us more about your requirement?"
                    value={formData.requirement}
                    onChange={handleChange}
                  ></textarea>
                  <div className="captcha">
                    What is 5 + 3 ={' '}
                    <input
                      type="text"
                      name="captchaAnswer"
                      value={formData.captchaAnswer}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit">SUBMIT INQUIRY</button>
                </form>
              </div>

              {/* CONTACT-FORM--------END */}
            </div>
          </div>
        </div>
        {/* second Component---start */}
        <div className="banner">
          <div className="logos">
            <img src="" alt="GE Digital Alliance Partner" />
            <img src="" alt="Google Cloud Platform" />
            <img src="" alt="GE Digital Alliance Partner" />
            <img src="" alt="Google Cloud Platform" />
            <img src="" alt="GE Digital Alliance Partner" />

            {/* Add other logo images here */}
          </div>
        </div>
        {/* second Component---start */}

        <div className='text-center mt-5 mb-5'>
          <p className="tagline">
            Simplify Your Operations with Automated Transportation and Logistics Solutions
          </p>
        </div>

        {/* third component---start-- */}

        <div className="banner2 ">
          <div className='borderContainer'>
            <div className="section">
              <FontAwesomeIcon icon={faEnvelope} />
              <h2>Fuel Wastage</h2>
              <p>Extract fleet statistics including fuel consumption, driver behavior, total journey, and harsh fleet conditions.</p>
            </div>
            <div className="section">
              <FontAwesomeIcon icon={faEnvelope} />
              <h2>Fleet Maintenance</h2>
              <p>Look for a digital system that can predict failures and raise maintenance requests.</p>
            </div>
            <div className="section">
              <FontAwesomeIcon icon={faEnvelope} />
              <h2 className='text'>Asset Security</h2>
              <p>Secure assets and have real-time connectivity to review vehicle updates during journeys.</p>
            </div>
          </div>
          <div>
            <button className="experts-btn">TALK TO OUR EXPERTS</button>
          </div>
        </div>

        {/* third component---END-- */}

     {/* FOURTH COMPONENT-------------- start*/}

     <div className='container_fourth m-2 '>
       <div className='fourth_main_container m-2  '>
          <div className='m-2'>
            <h1 className='text-2xl p-2 text-center font-bold'>Custome Logistic Solution that We Can Build for You</h1>
            <p className='text-xl text-slate-400 p-2 text-center'>We develop custome transportation & logistic software solutions tailor-made to your business needs through advanced technical innovations.</p>
          </div>

         {/* BOX */}
          <div className=' container_fourth_box  '>
          <div className='fourth_box m-2   p-2'>
            <div className='m-2 w-[98%] h-48  object-cover '>
              <img src={pic5} alt="Transportation and Logistics" className='object-cover h-48 w-full' />
            </div>
            <div>
              <h1 className='text-2xl  font-bold p-2'>Fleet management Solution</h1>
              <p className='p-2 text-slate-400'>Get started with fleet management software development and automate all your fleet tracking task like route optimization,driver behavior analysis, and asset tracking in real-time</p>
            </div>
            <div className='p-2 '>
              <button className='p-2 rounded-lg text-white bg-blue-700 font-bold text-sm'> KNOW MORE</button>
            </div>
          </div>

          <div className='fourth_box m-2 p-2'>
            <div className='m-2 w-[98%] h-48  object-cover bor'>
              <img src={pic5} alt="Transportation and Logistics" className='object-cover h-48 w-full' />
            </div>
            <div>
              <h1 className='text-2xl  font-bold p-2'>Fleet management Solution</h1>
              <p className='p-2 text-slate-400'>Get started with fleet management software development and automate all your fleet tracking task like route optimization,driver behavior analysis, and asset tracking in real-time</p>
            </div>
            <div className='p-2 '>
              <button className='p-2 rounded-lg text-white font-bold text-sm bg-blue-700'> KNOW MORE</button>
            </div>
          </div>

          <div className='fourth_box m-2  p-2'>
            <div className='m-2 w-[98%] h-48  object-cover bor'>
              <img src={pic5} alt="Transportation and Logistics" className='object-cover h-48 w-full' />
            </div>
            <div>
              <h1 className='text-2xl  font-bold p-2'>Fleet management Solution</h1>
              <p className='p-2 text-slate-400'>Get started with fleet management software development and automate all your fleet tracking task like route optimization,driver behavior analysis, and asset tracking in real-time</p>
            </div>
            <div className='p-2 '>
              <button className='p-2 rounded-lg text-white bg-blue-700 font-bold text-sm'> KNOW MORE</button>
            </div>
          </div>

          <div className='fourth_box m-2  p-2'>
            <div className='m-2 w-[98%] h-48  object-cover bor'>
              <img src={pic5} alt="Transportation and Logistics" className='object-cover h-48 w-full' />
            </div>
            <div>
              <h1 className='text-2xl  font-bold p-2'>Fleet management Solution</h1>
              <p className='p-2 text-slate-400'>Get started with fleet management software development and automate all your fleet tracking task like route optimization,driver behavior analysis, and asset tracking in real-time</p>
            </div>
            <div className='p-2 '>
              <button className='p-2 rounded-lg text-white font-bold text-sm bg-blue-700'> KNOW MORE</button>
            </div>
          </div>

          <div className='fourth_box m-2  p-2'>
            <div className='m-2 w-[98%] h-48 object-cover bor'>
              <img src={pic5} alt="Transportation and Logistics" className='object-cover h-48 w-full' />
            </div>
            <div>
              <h1 className='text-2xl  font-bold p-2'>Fleet management Solution</h1>
              <p className='p-2 text-slate-400'>Get started with fleet management software development and automate all your fleet tracking task like route optimization,driver behavior analysis, and asset tracking in real-time</p>
            </div>
            <div className='p-2 '>
              <button className='p-2 rounded-lg text-white  font-bold text-sm bg-blue-700'> KNOW MORE</button>
            </div>
          </div>

          <div className='fourth_box m-2  p-2'>
            <div className='m-2 w-[98%] h-48  object-cover bor'>
              <img src={pic5} alt="Transportation and Logistics" className='object-cover h-48 w-full' />
            </div>
            <div>
              <h1 className='text-2xl  font-bold p-2'>Fleet management Solution</h1>
              <p className='p-2 text-slate-400'>Get started with fleet management software development and automate all your fleet tracking task like route optimization,driver behavior analysis, and asset tracking in real-time</p>
            </div>
            <div className='p-2 '>
              <button className='p-2 rounded-lg text-white font-bold text-sm bg-blue-700'> KNOW MORE</button>
            </div>
          </div>

          </div>
    
     </div>     
       </div>
     {/*Fourth Box------------------------------------------------End */} 

     {/* NEED A FREE QUOTE FOR YOUR CUSTOME LOGISTICS SOLUTION------Start */}

     <div className= 'fifth_box border-2 border-blue-500 w-full h-48 mb-10'>
     <div>
      <div className='text-center p-3'>
        <h1 className='text-2xl font-bold text-white'>Need aFree Quote Your Custome Logistics Solution?</h1>
      </div>
      
      <div className='text-center p-2'>
      <p className='text-white '>Connect with our exports to discuss your ideas, and get a no-obligation quote for your project</p>
      </div>
      <div className='text-center p-4 '>
      <button className='p-2 rounded-lg text-white bg-blue-700 font-bold text-sm'>GET STARTED</button>
      </div>
     </div>
     </div>
     {/* NEED A FREE QUOTE FOR YOUR CUSTOME LOGISTICS SOLUTION------End */}


     <div>
     {/* Our transportation and Logistics Software Development Services--start */}
      <div className='m-2'>
            <h1 className='text-2xl p-2 text-center font-bold'>Our transportation and Logistics Software Development Services</h1>
            <p className='text-xl text-slate-400 p-2 text-center'>As experienced transportation and logistics software development company, we offer various services that promote growth and innovation</p>
      </div>
      {/* Our transportation and Logistics Software Development Services---end */}

      {/* Enterprise Software Development */}
      {/* Sixth-box ---start*/}
      <div>
      <div className='sixth_box  w-full '>
        <div ><a href="#Enterprise" className=' transition-all'> Enterprise Software Development</a></div>
        <div><a href="#LogisticsApp" > Logistics App Development</a></div>
        <div  ><a href="#LogisticsSoftware">Logistics Software Modernization</a></div>
        <div ><a href="#Software">Software Consulting Services</a></div>
      </div>
      {/* Sixth-box ---end*/}

     {/* Seventh-box ---start-----Enterprise Software Development---*/}
      <div className=' p-2 w-full ' >
        <div className=' seventh_box  flex-row-reverse'>
          <div className='seventh_box_img p-10  '>
            <img src={pic5} alt="Transportation andistics" className='object-cover w-full ' />
          </div>

          <div className='seventh_box_text p-3 ' id='Enterprise'>
            <div><h1 className='text-4xl font-bold p-2 w-[50%]'>Enterprise Software Development</h1></div>
            <div className='p-4 w-full'><p className='text-slate-400 text-xl'>As experienced transportation and logistics software development company,
               we offer various services that promote growth and innovation As experienced transportation and logistics software development company,
               we offer various services that promote growth and innovation</p>
            </div>
            <div className='p-3'>
              <input type="checkbox" name="Custome Software Development" id="custome" value="CustomeSoftwareDevelopment" />  Custome Software Development <br />
              <input type="checkbox" name="Software Testing Services" id="SoftwareTestingServices" value="SoftwareTestingServices" />  Software Testing Services <br />
              <input type="checkbox" name="MVP Creation" id="MVp" value="MVPCreation" />  MVP Creation <br />
              <input type="checkbox" name="Plugin and module Development" id="CustomeSoftwareDevelopment" value="CustomeSoftwareDevelopment" />  Plugin and module Development <br />
            </div>
            <div><button className='p-2 rounded-lg text-white bg-blue-700 font-bold text-sm'>GET STARTED</button></div>

          </div>


        </div>

        {/* -------------- */}
        <div className=' seventh_box flex-row' id='LogisticsApp'>
          <div className='seventh_box_img p-10   '>
            <img src={pic5} alt="Transportation andistics" className='object-cover w-full ' />
          </div>

          <div className='seventh_box_text p-3' id='LogisticsApp'>
            <div><h1 className='text-4xl font-bold p-2 w-[50%]'>Logistics App Development</h1></div>
            <div className='p-4 w-full'><p className='text-slate-400 text-xl'>As experienced transportation and logistics software development company,
               we offer various services that promote growth and innovation As experienced transportation and logistics software development company,
               we offer various services that promote growth and innovation</p>
            </div>
            <div className='p-3'>
              <input type="checkbox" name="Custome Software Development" id="custome" value="CustomeSoftwareDevelopment" />  Custome Software Development <br />
              <input type="checkbox" name="Software Testing Services" id="SoftwareTestingServices" value="SoftwareTestingServices" />  Software Testing Services <br />
              <input type="checkbox" name="MVP Creation" id="MVp" value="MVPCreation" />  MVP Creation <br />
              <input type="checkbox" name="Plugin and module Development" id="CustomeSoftwareDevelopment" value="CustomeSoftwareDevelopment" />  Plugin and module Development <br />
            </div>
            <div><button className='p-2 rounded-lg text-white bg-blue-700 font-bold text-sm'>GET STARTED</button></div>

          </div>


        </div>
        {/* --------------- */}
        <div className=' seventh_box  flex-row-reverse' id='LogisticsSoftware'>
          <div className='seventh_box_img p-10  '>
            <img src={pic5} alt="Transportation andistics" className='object-cover w-full ' />
          </div>

          <div className='seventh_box_text p-3' id='LogisticsSoftware'>
            <div><h1 className='text-4xl font-bold p-2 w-[50%]'>Logistics Software Modernization</h1></div>
            <div className='p-4 w-[95%]'><p className='text-slate-400 text-xl'>As experienced transportation and logistics software development company,
               we offer various services that promote growth and innovation As experienced transportation and logistics software development company,
               we offer various services that promote growth and innovation</p>
            </div>
            <div className='p-3'>
              <input type="checkbox" name="Custome Software Development" id="custome" value="CustomeSoftwareDevelopment" />  Custome Software Development <br />
              <input type="checkbox" name="Software Testing Services" id="SoftwareTestingServices" value="SoftwareTestingServices" />  Software Testing Services <br />
              <input type="checkbox" name="MVP Creation" id="MVp" value="MVPCreation" />  MVP Creation <br />
              <input type="checkbox" name="Plugin and module Development" id="CustomeSoftwareDevelopment" value="CustomeSoftwareDevelopment" />  Plugin and module Development <br />
            </div>
            <div><button className='p-2 rounded-lg text-white bg-blue-700 font-bold text-sm'>GET STARTED</button></div>

          </div>


        </div>
        {/* --------------- */}
        <div className=' seventh_box ' id='Software'>
          <div className='seventh_box_img p-10 '>
            <img src={pic5} alt="Transportation andistics" className='object-cover w-full ' />
          </div>

          <div className='seventh_box_text p-3'>
            <div><h1 className='text-4xl font-bold p-2 w-[50%]'>Software Consulting Services</h1></div>
            <div className='p-4 w-full'><p className='text-slate-400 text-xl'>As experienced transportation and logistics software development company,
               we offer various services that promote growth and innovation As experienced transportation and logistics software development company,
               we offer various services that promote growth and innovation</p>
            </div>
            <div className='p-3'>
              <input type="checkbox" name="Custome Software Development" id="custome" value="CustomeSoftwareDevelopment" />  Custome Software Development <br />
              <input type="checkbox" name="Software Testing Services" id="SoftwareTestingServices" value="SoftwareTestingServices" />  Software Testing Services <br />
              <input type="checkbox" name="MVP Creation" id="MVp" value="MVPCreation" />  MVP Creation <br />
              <input type="checkbox" name="Plugin and module Development" id="CustomeSoftwareDevelopment" value="CustomeSoftwareDevelopment" />  Plugin and module Development <br />
            </div>
            <div><button className='p-2 rounded-lg text-white bg-blue-700 font-bold text-sm'>GET STARTED</button></div>

          </div>


        </div>
      </div>
      </div>
     </div>
     {/* Seventh-box ---END-----Enterprise Software Development---*/}
    
     {/* --------Eighth box----- start------------- */}
     <div>
      {/* --------------- */}
     <div className='m-2'>
            <h1 className='text-2xl p-2 text-center font-bold'>Our transportation and Logistics Software Development Services</h1>
            <p className='text-xl text-slate-400 p-2 text-center'>As experienced transportation and logistics software development company, we offer various services that promote growth and innovation</p>
      </div>
      {/* --------------- */}
      <div className="banner2 ">
       <div className='borderContainer'>
          <div className="section">
           <FontAwesomeIcon icon={faEnvelope} />
           <h2>Fuel Wastage</h2>
           <p>Extract fleet statistics including fuel consumption, driver behavior, total journey, and harsh fleet conditions.</p>
         </div>
       <div className="section">
         <FontAwesomeIcon icon={faEnvelope} />
         <h2>Fleet Maintenance</h2>
         <p>Look for a digital system that can predict failures and raise maintenance requests.</p>
       </div>
        <div className="section">
          <FontAwesomeIcon icon={faEnvelope} />
          <h2 className='text'>Asset Security</h2>
          <p>Secure assets and have real-time connectivity to review vehicle updates during journeys.</p>
        </div>

       </div>
       <div className='m-2'>
            <p className='text-xl text-slate-400 p-2 text-center'>As experienced transportation and logistics software development company, we offer various services that promote growth and innovation</p>
      </div>
       <div>
        <button className="experts-btn">TALK TO OUR EXPERTS</button>
       </div>
     </div>
     </div>
     {/* --------Eighth box END------------- */}



     {/* --------Nineth box Start------------- */}

     <div className='1'>
      <div className=' nineth_box flex justify-evenly items-center w-full '>
        <div className='text-xl  '>
          <h1 className='pt-2 pb-2 pl-7 pr-7 text-2xl'>Why Matellio for Transportation & Logistic Software Development</h1>
        </div>
        <div className='flex'>
        <div className='text-[12px]'>
          <p className=' p-[30px] '>With years of Experience in building logistics solutions, 
            we know how to handle your bussiness challenges with cutting-edge technology.
            Whether small or large, we at Matellio are the first choice of businesses for transportation & 
            logistics software development With years of Experience in building logistics solutions, 
            we know how to handle your bussiness challenges with cutting-edge technology.
            Whether small or large, we at Matellio are the first choice of businesses for transportation & 
            logistics software development</p>
        </div>
        <div className='text-[12px] '>
          <p className='p-[30px]'>
          With years of Experience in building logistics solutions, 
            we know how to handle your bussiness challenges with cutting-edge technology.
            Whether small or large, we at Matellio are the first choice of businesses for transportation & 
            logistics software development With years of Experience in building logistics solutions, 
            we know how to handle your bussiness challenges with cutting-edge technology.
            Whether small or large, we at Matellio are the first choice of businesses for transportation & 
            logistics software development
          </p>
        </div>
        </div>

      </div>
      <div className='2  flex justify-evenly m-10 '>
        <div className='2.1'>
          <div className='2.1.1 flex justify-center items-center flex-col'>
            <div>
            <FontAwesomeIcon icon={faEnvelope} className='h-10' />
            </div>
            <div>
              <h1 className='text-sm text-center'>AI/ML-based Solution</h1>
            </div>

          </div>
        </div>
      <div className='2.2 '>
        <div className='2.1.1 flex justify-center items-center flex-col'>
            <div>
              <FontAwesomeIcon icon={faEnvelope} className='h-10' />
            </div>
            <div>
              <h1 className='text-sm'>AI/ML-based Solution</h1>
            </div>

          </div>

        </div>
        <div className='2.3'>
        <div className='2.1.1 flex justify-center items-center flex-col'>
            <div>
            <FontAwesomeIcon icon={faEnvelope} className='h-10' />
            </div>
            <div>
              <h1  className='text-sm'>AI/ML-based Solution</h1>
            </div>

          </div>

        </div>
        <div className='2.4 '>
         <div className='2.1.1 flex justify-center items-center flex-col'>
            <div>
            <FontAwesomeIcon icon={faEnvelope} className='h-10' />
            </div>
            <div>
              <h1  className='text-sm'>AI/ML-based Solution</h1>
            </div>
          </div>
        </div>
        <div className='2.4'>
         <div className='2.1.1 flex justify-center items-center flex-col'>
            <div>
            <FontAwesomeIcon icon={faEnvelope} className='h-10' />
            </div>
            <div>
              <h1  className='text-sm'>AI/ML-based Solution</h1>
            </div>
          </div>
        </div>
        <div className='2.4 '>
         <div className='2.1.1 flex justify-center items-center flex-col'>
            <div>
            <FontAwesomeIcon icon={faEnvelope} className='h-10' />
            </div>
            <div>
              <h1  className='text-sm'>AI/ML-based Solution</h1>
            </div>
          </div>
        </div>
      </div>

     </div>

     {/* Nineth-Box---------------------- End */}

     {/* Tenth Box--------------------- Start */}
      <div className= 'fifth_box border-2 border-blue-500 w-full h-48 mb-10'>
      <div>
      <div className='text-center p-3'>
        <h1 className='text-2xl font-bold text-white'>Need aFree Quote Your Custome Logistics Solution?</h1>
      </div>
      
      <div className='text-center p-2'>
      <p className='text-white '>Connect with our exports to discuss your ideas, and get a no-obligation quote for your project</p>
      </div>
      <div className='text-center p-4 '>
      <button className='p-2 rounded-lg text-white bg-blue-700 font-bold text-sm'>GET STARTED</button>
      </div>
     </div>
     </div>

     {/* Tenth Box--------------------- End */}

     {/* Eleventh Box----------------- Start */}
        <div className='' >
          <div className=' p-5' >
            <div className='text-center'>
              <h1 className='text-2xl '>Our Success Stories</h1>
              <h1>For Every real-eorld problem,we have delevered software solutions that reflect our experties in diverse verticals</h1>
            </div>
          </div>

          <div className=' flex justify-evenly p-5'>
            <div className=' eleventh-box flex justify-center items-center flex-col p-2 w-[33%] m-[25px]'>
              <div className='w-[100%] p-2'>
                <img src={pic5} />
              </div>
              <div>
                <h1 className='p-2'>
                  Digital Dispatch
                </h1>
              </div>
              <div>
                <button>READ MORE</button>
              </div>
            </div>
            <div className=' eleventh-box flex justify-center items-center flex-col w-[33%] m-[25px]'>
              <div className='w-[100%] p-2'>
                <img src={pic5} />
              </div>
              <div>
                <h1>
                  Digital Dispatch
                </h1>
              </div>
              <div>
                <button>READ MORE</button>
              </div>
            </div>
            <div className=' eleventh-box flex justify-center items-center flex-col w-[33%] m-[25px]'>
              <div className='w-[100%] p-2'>
                <img src={pic5} />
              </div>
              <div>
                <h1>
                  Digital Dispatch
                </h1>
              </div>
              <div>
                <button>READ MORE</button>
              </div>
            </div>

          </div>

        </div>
     {/* Eleventh Box----------------- End */}

     {/* Twelth Box.................. Start */}
     <div className='twelth-box pb-10'>
      <div className='p-10'>
        <h1 className='text-4xl text-center text-white'>Frequently Asked Questions</h1>
      </div>
      <div className='w-full max-w-6xl mx-auto p-5 grid gap-4 grid-cols-1 md:grid-cols-2'>
       {isExpandable.map((expand, index) => (
        <div key={index} className='rounded-lg mb-2'>
          <button onClick={() => handleToggle(index)}
           className='w-full text-left p-4 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm rounded-lg'>
            How do you proceed with transportation and logistics software development
          </button>
          {expand ? (
            <h1 className='p-4 bg-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque praesentium, doloribus ullam culpa consequuntur
              tempora accusamus suscipit nam rem minus fuga officiis! Nobis autem iste commodi officia voluptates nulla nam est sed ipsum, 
              magni voluptatum quibusdam. Soluta inventore explicabo et non cupiditate, perferendis optio doloribus voluptatem voluptatibus 
              ducimus laboriosam at illo dolore sint ipsum necessitatibus alias dignissimos dolores provident quam? Impedit quas error possimus
              aliquam, quam est ullam temporibus reprehenderit assumenda dignissimos dolorum veniam saepe explicabo vero debitis blanditiis esse
              neque ipsum cumque! Quod sequi error eveniet delectus eius atque minima et mollitia sunt neque maxime eos fugit tempora ipsa hic            
            </h1>
          ) : null}
        </div>
      ))}
      </div>
      {/* ------------------------ */}
  
    </div>
     {/* Twelth Box.................. End */}

    {/* Thirtheenth box ---------------------start */}

    <div className='main_container13'>
      <div className='container13'>
        <div className='explore text-center p-5'>
          <h1 className='text-2xl'>Explore More About Custome Logistic & Transport Solutions</h1>
        </div>
        <div className='container13_1'>
          <div className=''>
            <div className='division flex' >
              <div className='div13_1 '>
                <div className='div13_1_1'>
                </div>

                <div className='div13_1_2'>
                  <h1 className='text-center p-1 '>RPA in Pro...</h1>
                  <p className='text-center text-sm'>Imagine this: You wake up in the morning, check your phone, and see a notification - a new lease agreement [...]</p>
                </div>

              </div>
              <div className='div13_1'>
              <div className='div13_1_1'>
                </div>

                <div className='div13_1_2'>
                <h1 className='text-center p-1'>RPA in Pro...</h1>
                <p className='text-center text-sm'>Imagine this: You wake up in the morning, check your phone, and see a notification - a new lease agreement [...]</p>
                </div>

              </div>
              <div className='div13_1'>
              <div className='div13_1_1'>
                </div>

                <div className='div13_1_2'>
                <h1 className='text-center p-1'>RPA in Pro...</h1>
                <p className='text-center text-sm'>Imagine this: You wake up in the morning, check your phone, and see a notification - a new lease agreement [...]</p>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className='text-center'><button >OTHER BLOGS</button></div>

      </div>

    </div>

    {/* Thirtheenth box ---------------------end */}

    {/* Fourteenth Box-----------------------start */}
    <div className="logo-section p-5 m-10 border-t-2 border-b-2">
      <div className='flex justify-evenly items-center'>
      <div className="logo-item flex">
        <img src={pic5} alt="img" className='w-[100px]' />
          <p></p>
        </div>

        <div className="logo-item flex">
        <img src={pic5} alt="img" className='w-[100px]' />
          <p></p>
        </div>

        <div className="logo-item flex">
          <img src={pic5} alt="img" className='w-[100px]' />
          <p></p>
        </div>
      </div>

    </div>
    {/* Fourteenth Box-----------------------End */}



     



    
    </div>
  </div>
  )
}

export default TransportationLogistics

// box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        //  <div className='flex flex-col  bg-white border-2 rounded-sm h-2/3 w-auto'>
        //   <div className='flex flex-col justify-evenly w-full' >
            
        //     <div className='text-center p-4 underline pb-20'>
        //     <h1>GET IN TOUCH WITH  US</h1>
        //     </div>

        //     <div className='flex justify-center flex-col items-center m-5'>
        //       <input type="text" placeholder='Name' 
               
        //       className='border-2 p-2 mb-2 w-96 pl-10 text-lg rounded-md'
        //       />
        //       <input type="text"  placeholder='Email' className='border-2 p-2 mb-2 w-96 pl-10 text-lg rounded-md' />
        //       <input type="text" placeholder='Phone' className='border-2 p-2 mb-2 w-96 pl-10 text-lg rounded-md' />
        //       <textarea placeholder='Tell Us more About Your Requirement !'
        //       className='border-2 w-96 h-20 pl-10 text-lg rounded-md'
        //       ></textarea>
        //     </div>
           
        //    <div className='flex items-center justify-center pb-5'>
        //    <button className=' p-2 rounded-md bg-blue-600'>SUBMIT ENQUARY</button>
        //    </div>

        //   </div>
        // </div> */}

         {/* --------Fifteenth-box start------------- */}

    //  <div className="marello-page">
    //  <header className="header">
    //    {/* Logo and navigation */}
    //    <h1>Marello</h1>
    //    {/* Navigation links */}
    //  </header>

    //  <main className="main-content">
    //    <section className="bespoke-software">
    //      <h2>Bespoke Software</h2>
    //      {/* Content for Bespoke Software */}
    //    </section>

    //    <aside className="sidebar">
    //      <div className="locations">
    //        <h3>Locations</h3>
    //        {/* List of locations */}
    //        <div>
             
    //          <ul>
    //          <li>USA</li>
    //          <li>San Jose</li>
    //          <li>Denver</li>
    //        </ul>
    //        </div>
    //      </div>

    //      <div className="services">
    //        <h3>Selected Services</h3>
    //        {/* List of selected services */}
    //      </div>

    //      <div className="industries-verticals">
    //        <h3>Industries & Verticals</h3>
    //        {/* List of industries & verticals */}
    //      </div>

    //      <div className="resources">
    //        <h3>Resources</h3>
    //        {/* List of resources */}
    //      </div>
    //    </aside>

    //    <section className="contact-form-section">
    //      <h2>Contact Us</h2>
    //      <form id="contact-form" action="/submit-form" method="post">
    //        <input type="text" name="name" placeholder="Name" required />
    //        <input type="email" name="email" placeholder="Email" required />
    //        <input type="tel" name="phone" placeholder="Phone" />
    //        <textarea name="message" placeholder="Your message" rows="4"></textarea>
    //        <label htmlFor="math-question">What is 7 + 1?</label>
    //        {/* Input field for answer could be added here if needed */}
    //        <button type="submit">Send</button>
    //      </form>
    //      {/* Social media icons */}
    //      <div className="social-icons">
    //        {/* Add social media icons here */}
    //      </div>
    //    </section>
    //  </main>

    //  <footer className="footer">
    //    <p>&copy; 2024 Marello Inc. All rights reserved.</p>
    //  </footer>
    // </div>