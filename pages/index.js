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
import {useState} from 'react';
import React, { useEffect } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    
    <div >
      <Head>
        <title>Ramy Hammam Portfolio</title>
        <meta name="description" content="Gnerated by cre"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='bg-gray-300 px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className ="text-xl font-burtons">developedbyramy</h1>
            <ul className='flex items-center'>
              <li><a className="bg-gradient-to-r font-medium from-gray-400 to bg-black text-white px-4 py-2 rounded-md ml-8"href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-gray-800 font-medium md:text-6xl'>Ramy Hammam</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and Student</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-x max-w-xl mx-auto'>
              Computer science student passionate about web development, iOS development, and information technology. Eager to learn and adapt my skillsets.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-gray-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image className='relative mx-auto' src={chibi} layout='fill' objectFit='cover'  />
          </div>
          </section>


          <section>
            <div>
              <h3 className='text-3xl py-1 text-gray-800 font-medium flex justify-center items-center"'>About Me:</h3>
              <h1 className='text-md   text-gray-800  textalign-center items-center  "'>
              Meet Ramy, a senior attending Hunter College for Computer Science. With a passion for improving their iOS and web development skills, they are constantly seeking new challenges and opportunities to hone their craft.
              </h1>
              <h1 className='text-md  text-gray-800  justify-center items-center  "'>
              In addition to their expertise in software development, Ramy is also deeply interested in the information technology field, always staying up-to-date with the latest trends and innovations. With a strong work ethic and a commitment to lifelong learning, Ramy is well-positioned for a successful career in the tech industry.
              </h1>
            </div>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
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
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
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
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
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
          <section>
            <div>
              <h3 className='text-gray-800 font-medium'>Portfolio</h3> 
              <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for agencies
              consulted for startups 
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            </div>

          </section>
      </main>
    </div>
  );
}