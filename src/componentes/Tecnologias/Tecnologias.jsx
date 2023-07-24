import css3 from '../../imgs/css3.png'
import html5 from '../../imgs/html5.png'
import javass from '../../imgs/javass.png'
import reacttecnologias from '../../imgs/reacttecnologias.png'
import tailwindtecnologias from '../../imgs/tailwindtecnologias.png'
import github from '../../imgs/github.png'
import git from '../../imgs/git.png'

export default function Tecnologias () {

    const tecnologias = [
        {name: 'HTML', image: html5}, 
        {name: 'CSS', image: css3},
        {name: 'Javascript', image: javass},
        {name: 'React', image: reacttecnologias},
        {name: 'Tailwind', image: tailwindtecnologias},
        {name: 'Github', image: github},
        {name: 'Git', image: git}]

    return (
        <section id='technologies' className='flex flex-col items-center justify-evenly mx-5 h-[700px] max-md:h-screen'>
            <h2 className='text-5xl'>Tecnologias</h2>
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-[800px]">
                {tecnologias.map((tecnologia) => (
                    <div key={tecnologia.name} className='flex flex-col w-5/12 h-5/12 items-center p-2 justify-between shadow-xl rounded-2xl max-w-[180px]'>
                        <img className="rounded-lg object-contain w-7/12 max-w-[86px] mb-2" src={tecnologia.image} alt="" />
                        <span>{tecnologia.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}