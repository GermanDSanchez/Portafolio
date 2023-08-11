import Google from '../icons/Google'
import css3 from '../../../public/img/css3.png'
import react from '../../../public/img/react.png'
import tailwind from '../../../public/img/tailwind.png'
import angular from '../../../public/img/angular.png'
import apimovies from '../../../public/img/apimovies.png'
import pong from '../../../public/img/pong.png'
import chevrolet from '../../../public/img/chevrolet.png'
import maquetagoogle from '../../../public/video/maquetagoogle.webm'
import apimovie from '../../../public/video/apimovie.webm'
import portafolio from '../../../public/video/portafolio.webm'
import chevroletvideo from '../../../public/video/chevroletvideo.mp4'
import pongvideo from '../../../public/video/pong.mp4'
import Proyecto from './Proyecto'

export default function Proyectos () {
    return (
        <section id='projects' className="relative flex flex-row justify-center items-center p-5 pt-28 max-lg:flex-col">
            <div className='flex flex-col items-center max-w-[1400px]'>
                <h2 className="text-5xl mb-12">Proyectos</h2>
                <div className='flex flex-wrap justify-center gap-10 max-[472px]:gap-6'>
                    <Proyecto lenguaje1={react} lenguaje2={tailwind} title={'Portafolio'} imagen={<span className='text-4xl font-bold flex flex-col'>Portafolio<span className="p-1 text-black uppercase bg-yellow-400 rounded-lg">German</span></span>}
                    description="Portafolio (Responsive Design) sobre mis proyectos, avances y contacto, hecho en React y Tailwind" zoom={'xl:translate-x-[135px] xl:translate-y-40'} videoproject={portafolio} pagina={'https://germansanchez.netlify.app'} repo={'https://github.com/GermanDSanchez/Portafolio'}/>
                    <Proyecto lenguaje1={react} lenguaje2={tailwind} title={'APIMovies'} imagen={<img className='w-52' src={apimovies}/>}
                    description="Pagina Web (Desktop) sobre peliculas y series usando la API de TheMovieDB, hecho en React y Tailwind" zoom={'xl:-translate-x-[345px] xl:translate-y-40'} videoproject={apimovie} pagina={'https://apimovies-germansanchez.netlify.app'} repo={'https://github.com/GermanDSanchez/APIMovies'}/>
                    <Proyecto lenguaje1={react} lenguaje2={css3} title={'Maqueta/Clon Google'} imagen={<Google />}
                    description="Maqueta/clon del buscador de Google (Desktop), hecho en React y CSS" zoom={'xl:-translate-x-[825px] xl:translate-y-40'} videoproject={maquetagoogle} pagina={'https://maqueta-google.netlify.app'} repo={'https://github.com/GermanDSanchez/Maqueta-Google'}/>
                    <Proyecto lenguaje1={angular} lenguaje2={tailwind} title={'Juego PONG'} imagen={<img className='w-44' src={pong}/>}
                    description="Juego Pong/Tenis retro hecho en Angular y Tailwind" zoom={'xl:-translate-x-[105px] xl:-translate-y-[225px]'} videoproject={pongvideo} pagina={'https://juego-pong.netlify.app'} repo={'https://github.com/GermanDSanchez/Juego-Pong'}/>
                    <Proyecto lenguaje1={angular} lenguaje2={tailwind} title={'Maqueta/Clon Chevrolet'} imagen={<img className='w-52' src={chevrolet}/>}
                    description="Maqueta/clon landing-page de Chevrolet con Angular y Tailwind" zoom={'xl:-translate-x-[585px] xl:-translate-y-[225px]'} videoproject={chevroletvideo} pagina={'https://maqueta-chevrolet.netlify.app'} repo={'https://github.com/GermanDSanchez/Maqueta-Chevrolet'}/>
                </div>
            </div>
        </section>
    )
}