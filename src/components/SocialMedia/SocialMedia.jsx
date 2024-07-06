import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const ContactButtons = () => {
    // Función para obtener el enlace al PDF
    const getLink = () => {
        return 'https://drive.google.com/file/d/1vwo73aUeN3Hl9Y-1jJv2LANYvBo8iv3D/view?usp=sharing';
    };

    return (
        <div className=' md:flex fixed flex-col bottom-[150px] left-[0.5rem]'>
            <ul className="animate__bounce">
                <li className='w-[100px] h-[50px] flex justify-between items-center animate__animated animate__slideInLeft'>
                    <a className='flex justify-between items-center w-full text-[#f9b82c] dark:text-white duration-300' href='https://www.linkedin.com/in/camilo-acevedo/' target='_blank' rel="noreferrer"> 
                        <FaLinkedin className="text-2xl md:text-2xl lg:text-2xl" />
                    </a>
                </li>
                <li className='w-[100px] h-[50px] flex justify-between items-center animate__animated animate__slideInLeft'>
                    <a className='flex justify-between items-center w-full text-[#f9b82c] dark:text-white duration-300' href='https://github.com/camilobit' target='_blank' rel="noreferrer"> 
                        <FaGithub className="text-2xl md:text-2xl lg:text-2xl" />
                    </a>
                </li>
                <li className='w-[100px] h-[50px] flex justify-between items-center animate__animated animate__slideInLeft'>
                    <a className='flex justify-between items-center w-full text-[#f9b82c] dark:text-white duration-300' href='mailto:portafoliodigital.col@gmail.com' target='_blank' rel="noreferrer"> 
                        <FaEnvelope className="text-2xl md:text-2xl lg:text-2xl" />
                    </a>
                </li>
                <li className='w-[100px] h-[50px] flex justify-between items-center animate__animated animate__slideInLeft'>
                    <a className='flex justify-between items-center w-full text-[#f9b82c] dark:text-white duration-300' href={getLink()} target='_blank' rel="noreferrer"> 
                        <FaFilePdf className="text-2xl md:text-2xl lg:text-2xl" />
                    </a>
                </li>
            </ul>
            <div className="w-[2px] h-[140px] flex fixed bottom-[0px] left-[1.15rem] border border-[#0a192f] dark:border-white mx-auto mt-2 animate__animated animate__backInUp"/>
        </div>
    );
};

export default ContactButtons;
