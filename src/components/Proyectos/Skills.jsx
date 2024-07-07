import HTML from '../../assets/html.d20c9482.png';
import CSS from '../../assets/css.4040bdba.png';
import JavaScript from '../../assets/javascript.d04a05c4.png';
import ReactImg from '../../assets/react.e00184ba.png';
import Node from '../../assets/node.f467a70a.png';
import Git from '../../assets/descarga.png';
import Redux from '../../assets/descarga (1).png';
import PostgreSQL from '../../assets/postgres.8e58ad2c.png';
import Bootstrap from '../../assets/descarga (2).png';
import Express from '../../assets/express.22a36cd4.png';
import Vite from '../../assets/vite.9f000615.png';
import Wordpress from '../../assets/wordpress.png'

const Skills = () => {
  const text = {
    title: 'Habilidades',
    subtitle: '// Estas son las tecnologías con las que he trabajado',
  };

  return (
    <div id='skills' className=' min-h-screen mx-auto flex bg-slate-100 dark:bg-[#16191D] text-[#0a192f] dark:text-gray-300 mt-8'>
      <div className='max-w-[750px] m-auto py-4 px-5 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#ff80b5] ' data-aos="fade-in">{text.title}</p>
          <p className='py-4 text-white font-medium dark:font-normal mt-8' data-aos="fade-in">{text.subtitle}</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 font-bold dark:font-normal mt-10' data-aos="fade-in">
          <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='mt-4'>HTML</p>
          </div>
          <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p className='mt-4'>CSS</p>
          </div>
          <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
            <p className='mt-4'>JAVASCRIPT</p>
          </div>
          <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className='mt-4'>REACT</p>
          </div>
          <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Git} alt="Git icon" />
            <p className='mt-4'>GIT</p>
          </div>
          <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="Node.js icon" />
            <p className='mt-4'>NODE JS</p>
          </div>
          <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Redux} alt="Redux icon" />
            <p className='mt-4'>Redux</p>
          </div>
          <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={PostgreSQL} alt="PostgreSQL icon" />
            <p className='mt-4'>POSTGRESQL</p>
          </div>
          <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
            <p className='mt-4'>Bootstrap</p>
          </div>
          <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Express} alt="Express icon" />
            <p className='mt-4'>Express</p>
          </div>
          <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Vite} alt="Vite icon" />
            <p className='mt-4'>Vite</p>
          </div>
          <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Wordpress} alt="Wordpress icon" />
            <p className='mt-4'>WordPress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
