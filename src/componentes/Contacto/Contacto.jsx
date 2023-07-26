import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import GitHub from '../icons/GitHub';
import LinkedIn from '../icons/LinkedIn';
import cv from "../../../public/cv/cv.pdf"

export default function Contacto () {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7legecr', 'template_zx5fng4', form.current, 'dOowKhNhgqJWNsoWm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact' className='relative flex flex-col items-center mx-5 justify-center h-[700px] max-md:h-screen'>
        <h3 className='text-5xl'>Contacto</h3>
        <span className='mb-5 text-neutral-600 mt-1'>germansr02@gmail.com</span>
        <form className='flex flex-col items-center p-6 gap-5 w-full' ref={form} onSubmit={sendEmail}>
            <input className='bg-orange-50 border-[1px] border-orange-300 focus:border-orange-500 px-3 py-1 w-[680px] h-12 text-lg max-md:w-full' type="text" name="user_name" placeholder='Nombre'/>
            <input className='bg-orange-50 border-[1px] border-orange-300 focus:border-orange-500 px-3 py-1 w-[680px] h-12 text-lg max-md:w-full' type="email" name="user_email" placeholder='E-mail'/>
            <textarea className='bg-orange-50 border-[1px] border-orange-300 focus:border-orange-500 px-3 py-1 w-[680px] h-32 text-lg max-md:w-full' name="message" placeholder='Mensaje'/>
            <input className='border-[1px] border-orange-300 p-2 w-36 max-sm::w-5/12' type="submit" value="Enviar"/>
        </form>
        <div className='relative top-10 flex gap-10 items-center'>
            <a className="w-[2.65rem] h-[2.65rem] border-black rounded-md bg-black flex items-center justify-center" href="https://github.com/GermanDSanchez" target="_blank" rel="noreferrer">
                <GitHub fill="#fff"/>
            </a>
            <a href={cv} target="_blank" rel="noreferrer" className="flex items-center justify-center w-[2.65rem] h-[2.65rem] text-xl font-bold border-2 border-black rounded-md">CV</a>
            <a href="https://www.linkedin.com/in/german-sanchez-094528256/" target="_blank" rel="noreferrer">
                <LinkedIn fill="#0a66c2"/>
            </a>
        </div>
    </section>
  )
}