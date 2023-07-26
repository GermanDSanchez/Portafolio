import GitHub from "../icons/GitHub"
import LinkedIn from "../icons/LinkedIn"
import Arrow from "../icons/Arrow"
import { Link } from "react-scroll"
import cv from "../../../public/cv/cv.pdf"

export default function Presentacion () {

    return (
        <section id="presentation" className="relative flex flex-col justify-center items-center h-screen">
            <h1 className="text-6xl text-center mb-4">
                German Sanchez
            </h1>
            <span className="text-xl mb-10">Desarrollador Front-End</span>
            <div className="flex items-center gap-5">
                <a className="w-[2.65rem] h-[2.65rem] border-black rounded-md bg-black flex items-center justify-center" href="https://github.com/GermanDSanchez" target="_blank" rel="noreferrer"><GitHub fill="#fff"/></a>
                <a href="https://www.linkedin.com/in/german-sanchez-094528256/" target="_blank" rel="noreferrer"><LinkedIn fill="#0a66c2"/></a>
            </div>
            <a href={cv} target="_blank" rel="noreferrer" className="text-xl border-[1px] w-24 border-black rounded-md mt-5 py-1 px-2 flex justify-center items-center">Ver CV</a>
            <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className="absolute bottom-10 animate-bounce">
                <Arrow />
            </Link>
        </section>
    )
}