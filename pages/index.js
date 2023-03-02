import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import chibi from '../public/chibi.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import React from "react";
import Typewriter from 'typewriter-effect';




export default function TypingEffect() {
  return (  
    <div >
      <Head>
        <title>Ramy Hammam Portfolio</title>
        <meta name="description" content="Gnerated by cre"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='bg-gray-500 px-10 md:px-20 lg:px-40 style.'>
        <section className='min-h-screen'>
          
      
          <div className='text-center p-10'>
            <h2 className='texttext-5xl py-2 text-gray-800 font-medium md:text-6xl' style={{ textShadow: '0px 4px 6px ' }}>Ramy Hammam</h2>
            <div className='text-5xl py-2 text-gray-800 font-medium'>
            <Typewriter
            onInit={(typewriter) => {
            typewriter.typeString('Developer and Student')
            .pauseFor(2500)
            .deleteAll()
            typewriter.typeString('Thinker and learner')
            .pauseFor(2500)
            .deleteAll()
            typewriter.typeString('Developer and Student')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500)
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
        />
        </div>
                  
            <p className='text-md py-5 leading-8 text-gray-800 md:text-x max-w-xl mx-auto'>
              Computer science student passionate about web development, iOS development, and information technology. Eager to learn and adapt my skillsets.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-20 py-3 text-gray-900' >
            <AiFillGithub />
            <AiFillLinkedin />
          </div>

          <div className='relative mx-auto  w-80 h-50 mt-20  md:h-96 md:w-96' style={{ marginTop:  '-20px' }}>
            <Image className='py-10 relative mx-auto ' src={chibi}  objectFit='cover' style={{ maxWidth: '100%', height: 'auto'  }} />
          </div>
          </section>


          <section >
            <div>
              <h3 className='text-3xl  text-gray-800 font-medium flex justify-center items-center"' style={{marginTop: '-500px', display:'flex'}}>About Me:</h3>
              <h1 className='text-md   text-gray-800  text-center items-center md:text-x max-w-xl mx-auto  "'>
              Meet Ramy, a senior attending Hunter College for Computer Science. With a passion for improving their iOS and web development skills, they are constantly seeking new challenges and opportunities to hone their craft. In addition to their expertise in software development, Ramy is also deeply interested in the information technology field, always staying up-to-date with the latest trends and innovations. With a strong work ethic and a commitment to lifelong learning, Ramy is well-positioned for a successful career in the tech industry.
              </h1>
            </div>
            <div className='lg:max-[1]: gap-10'>
              <div style={{backgroundColor: "grey" ,maxWidth: '50%',margin: '0 auto', marginBottom: '20px'}} className='text-center shadow-lg p-10 rounded-xl my-10 flex-1'>
              <div className="flex justify-center items-center">
             <Image src={design} width={100} height={100}></Image>
              </div>
                <h3 className='text-lg font-medium pt-8 pb-2'>Information Technology</h3>
                <p className='py-2'>
                  Creating Robust applications suited for your needs using swift.
                  </p>
                  <h4 className='py-4 text-blue-500'> Development tools I use</h4>
                  <p className="text-gray-800 py-1" >Figma</p>
                  <p className="text-gray-800 py-1" >Jira</p> 
                  <p className="text-gray-800 py-1" >Git</p>
              </div>
              <div style={{backgroundColor: "grey" ,maxWidth: '50%',margin: '0 auto', marginBottom: '20px'}} className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <div className="flex justify-center items-center">
             <Image src={design} width={100} height={100}></Image>
              </div>
                <h3 className='text-lg font-medium pt-8 pb-2'>iOS Development</h3>
                <p className='py-2'>
                  Creating Robust applications suited for your needs using swift.
                  </p>
                  <h4 className='py-4 text-blue-500'> Development tools I use</h4>
                  <p className="text-gray-800 py-1" >Figma</p>
                  <p className="text-gray-800 py-1" >Jira</p> 
                  <p className="text-gray-800 py-1" >Git</p>
              </div>
              <div style={{backgroundColor: "grey" ,maxWidth: '50%',margin: '0 auto', marginBottom: '20px'}} className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <div className="flex justify-center items-center">
             <Image src={design} width={100} height={100}></Image>
              </div>
                <h3 className='text-lg font-medium pt-8 pb-2'> Web Development</h3>
                <p className='py-2'>
                  Creating Robust applications suited for your needs using swift.
                  </p>
                  <h4 className='py-4 text-blue-500'> Development tools I use</h4>
                  <p className="text-gray-800 py-1" >Figma</p>
                  <p className="text-gray-800 py-1" >Jira</p> 
                  <p className="text-gray-800 py-1" >Git</p>
              </div>
            </div>
          </section>
         
      </main>
    </div>
  );
}