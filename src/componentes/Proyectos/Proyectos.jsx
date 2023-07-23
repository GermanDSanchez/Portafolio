import Bike from '../icons/Bike'
import Google from '../icons/Google'
import javascript from '../../Imgs/javascript.png'
import css3 from '../../Imgs/css3.png'
import html5 from '../../Imgs/html5.png'
import react from '../../Imgs/react.png'
import tailwind from '../../Imgs/tailwind.png'
import api from '../../Imgs/api.png'
import apimovies from '../../Imgs/apimovies.png'
import GitHub from '../icons/GitHub'
import Eye from '../icons/Eye'
import maquetagoogle from '../../Videos/maquetagoogle.webm'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Proyecto = ({ lenguaje1, lenguaje2, lenguaje3, title, imagen, description }) => {

    const [video, setVideo] = useState(false)

    return (
    <article className='relative p-5 shadow-xl hover:shadow-2xl rounded-lg flex flex-col items-center justify-center'>
        <div className={`absolute -top-5 -left-4 -rotate-[15deg] ${video ? 'opacity-30' : undefined}`}>
            <img className='relative w-10 top-0 left-5 z-20 -rotate-[5deg]' src={lenguaje1} alt="" />
            <img className='absolute w-10 top-0.5 left-1 z-10 -rotate-[15deg]' src={lenguaje2} alt="" />
            <img className='absolute w-10 top-2 -left-2 -rotate-[40deg]' src={lenguaje3} alt="" />
        </div>
        <div className='flex items-center justify-center absolute top-0 right-0 gap-2 z-40'>
            <a href=""><GitHub width={30} height={30}/></a>
            <button onClick={() => setVideo(!video)}><Eye width={30} height={30}/></button>
        </div>
        <div className={`h-52 w-52 flex justify-center items-center ${video ? 'opacity-30' : undefined}`}>
            {imagen}
        </div>
        <h3 className={`font-medium ${video ? 'opacity-30' : undefined}`}>{title}</h3>
        <p className={video ? 'opacity-30' : undefined}>{description}</p>
        <div className={`${video ? 'top-10 bg-orange-50 absolute flex flex-col items-center opacity-1 visible transform -translate-x-0 transition-all w-screen' : 
        'top-10 w-screen absolute flex flex-col items-center opacity-0 invisible transform translate-x-10 transition-all'}`}>
            <video src={maquetagoogle} controls={false} autoPlay muted loop></video>
            <span className='p-2'>https://juanpyportafolio.netlify.app/</span>
        </div>
    </article>
    )
}

export default function Proyectos () {
    return (
        <section id='projects' className={`relative flex flex-col items-center p-5 pt-28 gap-6`}>
            <h2 className="text-5xl mb-12">Proyectos</h2>
            <Proyecto lenguaje1={javascript} lenguaje2={css3} lenguaje3={html5} title={'Maqueta E-Commerce'} imagen={<Bike />}
            description="Maqueta de E-Commerce sobre bicicletas, hecho exclusivamente en HTML, CSS y Javascript nativo" />
            <Proyecto lenguaje1={javascript} lenguaje2={css3} lenguaje3={html5} title={'Uso de API/Fetch'} imagen={<img className='w-44' src={api}/>}
            description="Maqueta de E-Commerce sobre bicicletas, hecho exclusivamente en HTML, CSS y Javascript nativo" />
            <Proyecto lenguaje1={''} lenguaje2={javascript} lenguaje3={''} title={'Retos de Javascript'} imagen={<span className='text-5xl font-bold'>Retos<span className="p-1 text-black uppercase bg-yellow-400 rounded-lg">js</span></span>}
            description="Maqueta de E-Commerce sobre bicicletas, hecho exclusivamente en HTML, CSS y Javascript nativo" />
            <Proyecto lenguaje1={react} lenguaje2={css3} lenguaje3={''} title={'Maqueta/Clon Google'} imagen={<Google />}
            description="Maqueta de E-Commerce sobre bicicletas, hecho exclusivamente en HTML, CSS y Javascript nativo" />
            <Proyecto lenguaje1={react} lenguaje2={tailwind} lenguaje3={''} title={'Portafolio'} imagen={<span className='text-4xl font-bold flex flex-col'>Portafolio<span className="p-1 text-black uppercase bg-yellow-400 rounded-lg">German</span></span>}
            description="Maqueta de E-Commerce sobre bicicletas, hecho exclusivamente en HTML, CSS y Javascript nativo" />
            <Proyecto lenguaje1={react} lenguaje2={tailwind} lenguaje3={''} title={'APIMovies'} imagen={<img className='w-52' src={apimovies}/>}
            description="Maqueta de E-Commerce sobre bicicletas, hecho exclusivamente en HTML, CSS y Javascript nativo" />
        </section>
    )
}