import Bike from '../icons/Bike'
import Google from '../icons/Google'
import javass from '../../../public/img/javass.png'
import css3 from '../../../public/img/css3.png'
import html5 from '../../../public/img/html5.png'
import react from '../../../public/img/react.png'
import tailwind from '../../../public/img/tailwind.png'
import api from '../../../public/img/api.png'
import apimovies from '../../../public/img/apimovies.png'
import GitHub from '../icons/GitHub'
import Eye from '../icons/Eye'
import maquetagoogle from '../../../public/video/maquetagoogle.webm'
import { useState, useEffect, useRef } from 'react'

// eslint-disable-next-line react/prop-types
const Proyecto = ({ lenguaje1, lenguaje2, lenguaje3, title, imagen, description, zoom }) => {

    const [video, setVideo] = useState(false)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const isWideScreen = windowWidth >= 1440;

    const containerRef = useRef(null);

    const containerRef2 = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (containerRef.current && !containerRef.current.contains(event.target) && containerRef2.current && !containerRef2.current.contains(event.target)) {
            setVideo(false);
          }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, []);

    return (
        <>
        <article ref={containerRef} className={`relative p-5 shadow-xl bg-orange-50 hover:shadow-2xl rounded-xl flex flex-col items-center justify-center 
            transform translate-x-0 translate-y-0 duration-200 ${video ? `xl:scale-125 xl:z-40 xl:transform xl:rounded-l-lg xl:rounded-r-none xl:duration-500 ${zoom} xl:bg-orange-100` : ''}`}>
            <div className="text-center flex flex-col items-center">
                <div className="absolute -top-5 -left-4 -rotate-[15deg]">
                    <img className='relative w-10 top-0 left-5 z-20 -rotate-[5deg]' src={lenguaje1} alt="" />
                    <img className='absolute w-10 top-0.5 left-1 z-10 -rotate-[15deg]' src={lenguaje2} alt="" />
                    <img className='absolute w-10 top-2 -left-2 -rotate-[40deg]' src={lenguaje3} alt="" />
                </div>
                <div className='flex items-center justify-center absolute top-1 right-1 gap-2 z-40'>
                    <a href=''><GitHub width={30} height={30}/></a>
                    {isWideScreen ? <button onClick={() => setVideo(!video)}><Eye width={30} height={30}/></button> :
                    <a href='' onClick={() => setVideo(!video)}><Eye width={30} height={30}/></a>}
                </div>
                <div className="h-52 w-52 flex justify-center items-center">
                    {imagen}
                </div>
                <h3 className="font-medium">{title}</h3>
                <p className="max-w-[400px]">{description}</p>
            </div>
        </article>
        {isWideScreen && 
        <div ref={containerRef2} className={`${video ? 'w-[710px] h-[400px] rounded-r-lg bg-orange-100 p-4 absolute flex flex-col items-center z-40 opacity-1 visible transform translate-x-[285px] translate-y-[120px] duration-500' : 
        'xl:w-2/12 absolute flex flex-col items-center z-40 opacity-0 invisible transform translate-x-[2000px] translate-y-44 duration-500'}`}>
            <video className='w-full' src={maquetagoogle} controls={false} autoPlay muted loop></video>
        </div>}
        </>
    )
}

export default function Proyectos () {
    return (
        <section id='projects' className="relative flex flex-row justify-center items-center p-5 pt-28 max-lg:flex-col">
            <div className='flex flex-col items-center max-w-[1400px]'>
                <h2 className="text-5xl mb-12">Proyectos</h2>
                <div className='flex flex-wrap justify-center gap-10 max-[472px]:gap-6'>
                    <Proyecto lenguaje1={react} lenguaje2={tailwind} lenguaje3={''} title={'Portafolio (5° Proyecto)'} imagen={<span className='text-4xl font-bold flex flex-col'>Portafolio<span className="p-1 text-black uppercase bg-yellow-400 rounded-lg">German</span></span>}
                    description="Portafolio sobre mis proyectos, avances y contacto, hecho en React y Tailwind" zoom={'xl:translate-x-[135px] xl:translate-y-40'}/>
                    <Proyecto lenguaje1={react} lenguaje2={tailwind} lenguaje3={''} title={'APIMovies (4° Proyecto)'} imagen={<img className='w-52' src={apimovies}/>}
                    description="Pagina Web sobre peliculas y series usando la API de TheMovieDB, hecho en React y Tailwind" zoom={'xl:-translate-x-[345px] xl:translate-y-40'}/>
                    <Proyecto lenguaje1={react} lenguaje2={css3} lenguaje3={''} title={'Maqueta/Clon Google (3° Proyecto)'} imagen={<Google />}
                    description="Maqueta/Clon del buscador de Google, hecho en React y CSS" zoom={'xl:-translate-x-[825px] xl:translate-y-40'}/>
                    <Proyecto lenguaje1={javass} lenguaje2={css3} lenguaje3={html5} title={'Uso de API/Fetch (2° Proyecto)'} imagen={<img className='w-44' src={api}/>}
                    description="Llamado a API/uso de Fetch basico, hecho con HTML, CSS y Javascript nativo" zoom={'xl:translate-x-[135px] xl:-translate-y-[200px]'}/>
                    <Proyecto lenguaje1={javass} lenguaje2={css3} lenguaje3={html5} title={'Maqueta E-Commerce (1° Proyecto)'} imagen={<Bike />}
                    description="Maqueta de E-Commerce sobre bicicletas, hecho exclusivamente en HTML, CSS y Javascript nativo" zoom={'xl:-translate-x-[345px] xl:-translate-y-[200px]'}/>
                    <Proyecto lenguaje1={''} lenguaje2={javass} lenguaje3={''} title={'Retos de Javascript'} imagen={<span className='text-5xl font-bold'>Retos<span className="p-1 text-black uppercase bg-yellow-400 rounded-lg">js</span></span>}
                    description="Retos de Javascript que voy realizando de diferentes paginas web" zoom={'xl:-translate-x-[825px] xl:-translate-y-[200px]'}/>
                </div>
            </div>
        </section>
    )
}