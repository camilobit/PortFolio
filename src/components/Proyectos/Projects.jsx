// import { useState } from "react";
// import ModalFama from "../Modal/ModalFama";
// importaciones para que funcione el modal 

const projects = [
  {
    id: 1,
    name: 'La Fama Online',
    role: 'Desarrollador Junior y gestor operativo',
    technologies: ['Hostinger', 'Wordpress'],
    image: '../../../la fama logo.jpg',
    link: 'https://lafamacolombia.com/',
  },
  {
    id: 2,
    name: 'Digital Solution',
    role: 'Desarrollador Web y Asesor Comercial',
    technologies: ['Wordpress', 'Hostinger','CSS'],
    image: '../../../logo digital solution.jpg',
    link: 'https://solucion-digital.com/'
  },
  {
    id: 3,
    name: 'Proyecto Food Henry',
    role: 'Full Stack Developer',
    technologies: ['Node.js','React.js','PostgreSQL'],
    image: 'https://proyecto-pi-food.vercel.app/static/media/Portada%20de%20Libro%20de%20Cocina%20Fondo%20Foto%20Verduras.d123a461.png',
    link: 'https://proyecto-pi-food.vercel.app/',
  },
  {
    id: 4,
    name: 'Proyecto Final Henry',
    role: 'Full Stack Developer',
    technologies: ['Node.js','Express.js','React,js'],
    image: 'https://media.licdn.com/dms/image/D4E22AQGRrcuuS2WA7Q/feedshare-shrink_800/0/1690300140982?e=1723075200&v=beta&t=rksqiorq_jVe01eSvEVEzCVyT_wMvDeHN9AC1wtMgaE',
    link: 'https://pf-e-latam.netlify.app/',
  },
  {
    id: 5,
    name: 'Chat AI con mis archivos PDF',
    role: 'Full Stack Developer, Aún en desarrollo',
    technologies: ['Node.js','React.js','Langchaing'],
    image: 'https://www.adslzone.net/app/uploads-adslzone.net/2023/03/chatpdf.jpg',
    link: '#',
  },
  // {
  //   id: 6,
  //   name: 'App web para cobro de parking, centro comercial VIVA Villavicencio',
  //   role: 'Full Stack Developer, Aún en desarrollo',
  //   technologies: ['Node.js', 'React.js', 'Wompi'],
  //   image: 'https://www.noticieromacarena.com/wp-content/uploads/2023/03/viva.jpg',
  //   link: '#',
  // }
];

const Projects = () => {

  //const [showModal, setShowModal] = useState(false);
  // este codigo ayuda a que el modal tenga props y lo setea en false 

  return (
    <div className="w-full bg-[#16191D]">
    <div className="max-w-4xl mx-auto py-12">

<div className="relative isolate px-6 pt-14 lg:px-8">
  <div
    aria-hidden="true"
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    />
  </div>
  <div
    aria-hidden="true"
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
    />
  </div>
      <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#ff80b5] text-white' data-aos="fade-in">Estos son mis proyectos más destacados</p>
          <p className='py-4 text-white font-medium dark:font-normal mt-8' data-aos="fade-in">{"//"} Aquí encontrarás una breve descripción de los proyectos en los que he participado. Podrás ver el nombre del proyecto, una imagen representativa y algunas de las tecnologías utilizadas en cada uno. Para aquellos proyectos que ya están en producción, si haces clic en cada uno, serás dirigido a la página correspondiente para que puedas ver los resultados de cerca. </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {projects.map((project) => (
          <a
            key={project.id}
            target="_blank"
            rel="noopener noreferrer"
            href={project.link}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* <div>    

            Modal para ver ventanas emergentes de los detalles de los proyectos, para que funcone debe cambiar la etiqueta a por un div y poner el link que redirija a cada proyecto en su modal correspondiente.

            <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" onClick={() => setShowModal(true)}>
              
              Open Modal
            </button>
            {showModal && (
              <ModalFama showModal={showModal} setShowModal={setShowModal} />
            )}
            </div> */}



            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-2">{project.role}</p>
              <div className="flex space-x-1">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
  </div>
</div>
</div>
  );
};

export default Projects;
