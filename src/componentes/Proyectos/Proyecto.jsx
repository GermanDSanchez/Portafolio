import { useState, useEffect, useRef } from "react";
import GitHub from "../icons/GitHub";
import Eye from "../icons/Eye";

// eslint-disable-next-line react/prop-types
export default function Proyecto ({ lenguaje1, lenguaje2, lenguaje3, title, imagen, description, zoom, videoproject, pagina, repo }) {

    const [video, setVideo] = useState(false)

    const [link, setLink] = useState(false)

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
            setLink(false);
          }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, []);

      const mostrarVideo = () => {
        setVideo(!video)
        setTimeout(() => {
            setLink(!link)
        }, 600)
      }

    return (
        <>
        <article onClick={mostrarVideo} ref={containerRef} className={`sm:h-[344px] cursor-pointer relative p-5 shadow-xl bg-orange-50 hover:shadow-2xl rounded-xl flex flex-col items-center justify-center 
            transform translate-x-0 translate-y-0 duration-200 ${video ? `xl:scale-125 xl:z-40 xl:transform xl:rounded-l-lg xl:rounded-r-none xl:duration-500 ${zoom} xl:bg-orange-100` : ''}`}>
            <div className="text-center flex flex-col items-center">
                <div className="absolute -top-5 -left-4 -rotate-[15deg]">
                    <img className='relative w-10 top-0 left-5 z-20 -rotate-[5deg]' src={lenguaje1} alt="" />
                    <img className='absolute w-10 top-0.5 left-1 z-10 -rotate-[15deg]' src={lenguaje2} alt="" />
                    <img className='absolute w-10 top-2 -left-2 -rotate-[40deg]' src={lenguaje3} alt="" />
                </div>
                <div className='z-40 flex items-center justify-center absolute top-1 right-1 gap-2'>
                    <a onClick={(event) => event.stopPropagation()} href={repo} target="_blank" rel="noreferrer"><GitHub width={30} height={30}/></a>
                    {isWideScreen ? <Eye width={30} height={30}/> :
                    <a href={pagina} target="_blank" rel="noreferrer"><Eye width={30} height={30}/></a>}
                </div>
                <div className="h-52 w-52 flex justify-center items-center">
                    {imagen}
                </div>
                <h3 className="font-medium">{title}</h3>
                <p className="max-w-[400px]">{description}</p>
            </div>
        </article>
        {isWideScreen && 
        <div ref={containerRef2} className={`${video ? 'w-[730px] h-[430px] rounded-r-lg bg-orange-100 p-4 absolute flex flex-col items-center z-40 opacity-1 visible transform translate-x-[295px] translate-y-[117px] duration-500' : 
        'xl:w-[730px] absolute flex flex-col items-center z-40 opacity-0 invisible transform translate-x-[2000px] translate-y-44 duration-500'}`}>
            <div className={`w-[714px] absolute rounded-t-full h-14 bg-orange-100 flex justify-center items-end -z-10 ${link ? 'transform translate-x-0 -translate-y-[70px] duration-500' : 'transform translate-x-0 translate-y-0 duration-500'}`}>
                <a className="text-xl font-semibold" href={pagina} target="_blank" rel="noreferrer">{pagina}</a>
            </div>
            <div>
                <video className='w-full' src={videoproject} controls={false} autoPlay muted loop></video>
            </div>
        </div>}
        </>
    )
}