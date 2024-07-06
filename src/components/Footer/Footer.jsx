import { FaLinkedin, FaGithub, FaEnvelope, } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mb-[-2rem] w-content max-w-full mv-0 mx-auto py-8 text-text-3">
  <div className="text-fluid--2 grid place-items-center gap-y-1 w-full">
    <div className="flex justify-center gap-x-6"> {/* Utiliza flex y justify-center para centrar horizontalmente */}
      <a className='flex justify-between items-center text-[#f9b82c] dark:text-white duration-300' href='https://www.linkedin.com/in/camilo-acevedo/' target='_blank' rel="noreferrer"> 
        <FaLinkedin className="text-2xl md:text-2xl lg:text-2xl" />
      </a>
      <a className='flex justify-between items-center text-[#f9b82c] dark:text-white duration-300' href='https://github.com/camilobit' target='_blank' rel="noreferrer"> 
        <FaGithub className="text-2xl md:text-2xl lg:text-2xl" />
      </a>
      <a className='flex justify-between items-center text-[#f9b82c] dark:text-white duration-300' href='mailto:portafoliodigital.col@gmail.com' target='_blank' rel="noreferrer"> {/* Corrigiendo el href para el correo */}
        <FaEnvelope className="text-2xl md:text-2xl lg:text-2xl" />
      </a>          
    </div>
    <div className='text-white'>Camilo Acevedo © <span>{new Date().getFullYear()}</span></div>
  </div>
</footer>

  );
}

export default Footer;
