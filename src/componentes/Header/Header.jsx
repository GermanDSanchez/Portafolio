import MenuHeader from '../icons/MenuHeader'
import { useState } from 'react'
import { Link } from 'react-scroll'

export default function Header() {

    const [open, setOpen] = useState(false)

    return (
        <>
        <header className="fixed top-0 w-full flex justify-between items-center z-50 shadow-xl p-2 bg-white">
            <span className="text-2xl font-semibold">German</span>
            <button onClick={() => setOpen(!open)} className='mr-2'><MenuHeader /></button> 
        </header> 
        <ul className={`fixed z-50 w-full text-xl top-12 flex flex-col items-center bg-orange-300 ${open ? 'opacity-1 visible transform -translate-x-0 transition-all' : 'opacity-0 invisible transform translate-x-10 transition-all'}`}>
            <li className="p-2"><Link to="presentation" spy={true} smooth={true} offset={50} duration={500} onClick={() => setOpen(false)}>Inicio</Link></li>
            <li className="p-2"><Link to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={() => setOpen(false)}>Proyectos</Link></li>
            <li className="p-2"><Link to="technologies" spy={true} smooth={true} offset={50} duration={500} onClick={() => setOpen(false)}>Tecnologias</Link></li>
            <li className="p-2"><Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={() => setOpen(false)}>Contacto</Link></li>
        </ul>
        </>
    )
}