//   const Proyects = () => {
//     const people = [
//         {
//           name: 'La Fama Online',
//           email: 'Roll: Desarrollador principal',
//           role: 'Desarrollador principal',
//           imageUrl:
//             'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//           lastSeen: 'Wordpress',
//           lastSeenDateTime: '2023-01-23T13:23Z',
//         },
//         {
//           name: 'Digital Solution',
//           email: 'Roll: Analista y Director de Operaciones comerciales',
//           role: 'Analista y Director de Operaciones comerciales',
//           imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//           lastSeen: '3h ago',
//           lastSeenDateTime: '2023-01-23T13:23Z',
//         },
//         {
//           name: 'Dries Vincent',
//           email: 'dries.vincent@example.com',
//           role: 'Business Relations',
//           imageUrl:
//             'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//           lastSeen: null,
//         },
//         {
//           name: 'Lindsay Walton',
//           email: 'lindsay.walton@example.com',
//           role: 'Front-end Developer',
//           imageUrl:
//             'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//           lastSeen: '3h ago',
//           lastSeenDateTime: '2023-01-23T13:23Z',
//         },
//         {
//           name: 'Courtney Henry',
//           email: 'courtney.henry@example.com',
//           role: 'Designer',
//           imageUrl:
//             'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//           lastSeen: '3h ago',
//           lastSeenDateTime: '2023-01-23T13:23Z',
//         },
//         {
//           name: 'Tom Cook',
//           email: 'tom.cook@example.com',
//           role: 'Director of Product',
//           imageUrl:
//             'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//           lastSeen: null,
//         },
//       ]
      
//     return (
//         <ul role="list" className="divide-y divide-gray-100">
//         {people.map((person) => (
//           <li key={person.email} className="flex justify-between gap-x-6 py-5">
//             <div className="flex min-w-0 gap-x-4">
//               <img alt="" src={person.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
//               <div className="min-w-0 flex-auto">
//                 <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
//                 <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
//               </div>
//             </div>
//             <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
//               <p className="text-sm leading-6 text-gray-900">{person.role}</p>
//               {person.lastSeen ? (
//                 <p className="mt-1 text-xs leading-5 text-gray-500">
//                   Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
//                 </p>
//               ) : (
//                 <div className="mt-1 flex items-center gap-x-1.5">
//                   <div className="flex-none rounded-full bg-emerald-500/20 p-1">
//                     <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                   </div>
//                   <p className="text-xs leading-5 text-gray-500">Online</p>
//                 </div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     )
//   }
  
// export default Proyects;


const projects = [
  {
    id: 1,
    name: 'La Fama Online',
    role: 'Desarrollador, y coordinador de operaciones',
    technologies: ['Hostinger', 'Wordpress'],
    image: '../../../la fama logo.jpg',
    link: 'https://lafamacolombia.com/',
  },
  {
    id: 2,
    name: 'Digital Solution',
    role: 'Director de Operaciones (COO)',
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
    technologies: ['Node.js', 'Express.js', 'React,js'],
    image: 'https://media.licdn.com/dms/image/D4E22AQGRrcuuS2WA7Q/feedshare-shrink_800/0/1690300140982?e=1723075200&v=beta&t=rksqiorq_jVe01eSvEVEzCVyT_wMvDeHN9AC1wtMgaE',
    link: 'https://pf-e-latam.netlify.app/',
  },
  {
    id: 5,
    name: 'Chat AI con mis archivos PDF',
    role: 'Full Stack Developer, Aún en desarrollo',
    technologies: ['Node.js', 'React.js', 'Langchaing'],
    image: 'https://www.adslzone.net/app/uploads-adslzone.net/2023/03/chatpdf.jpg',
    link: '#',
  },
  {
    id: 6,
    name: 'App web para cobro de parking, centro comercial VIVA Villavicencio',
    role: 'Full Stack Developer, Aún en desarrollo',
    technologies: ['Node.js', 'React.js', 'Wompi'],
    image: 'https://www.noticieromacarena.com/wp-content/uploads/2023/03/viva.jpg',
    link: '#',
  }
];

const Projects = () => {
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
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-2">{project.role}</p>
              <div className="flex space-x-2">
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
