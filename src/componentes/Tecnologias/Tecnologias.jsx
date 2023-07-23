import javascript from '../../Imgs/javascript.png'
import css3 from '../../Imgs/css3.png'
import html5 from '../../Imgs/html5.png'
import reacttecnologias from '../../Imgs/reacttecnologias.png'
import tailwindtecnologias from '../../Imgs/tailwindtecnologias.png'
import github from '../../Imgs/github.png'
import git from '../../Imgs/git.png'

export default function Tecnologias () {

    const tecnologias = [
        {name: 'HTML', image: html5}, 
        {name: 'CSS', image: css3},
        {name: 'Javascript', image: javascript},
        {name: 'React', image: reacttecnologias},
        {name: 'Tailwind', image: tailwindtecnologias},
        {name: 'Github', image: github},
        {name: 'Git', image: git}]

    return (
        <section id='technologies' className='flex flex-col items-center justify-evenly mx-5 h-screen'>
            <h2 className='text-5xl'>Tecnologias</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
                {tecnologias.map((tecnologia) => (
                    <div key={tecnologia.name} className='flex flex-col w-32 items-center p-2 justify-between shadow-xl rounded-2xl'>
                        <img className="rounded-lg object-contain w-16 h-16 mb-2" src={tecnologia.image} alt="" />
                        <span>{tecnologia.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}