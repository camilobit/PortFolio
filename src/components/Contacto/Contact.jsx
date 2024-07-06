import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', // Añade el campo 'name'
    message: '',
    email: '',
    number: '', // Cambia 'whatsapp' a 'number'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_2toerk2', 'template_af0ficf', formData, 'ovFN3NYxY1i5sdPKa')
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', message: '', email: '', number: '' });
      }, (error) => {
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-5 bg-white shadow-md rounded-lg mt-10 m-2">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Conecta Conmigo</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            ¿Cómo te llamas?
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Déjame un Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Write something..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Escribe tu correo
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="number" className="block text-sm font-medium text-gray-700">
            Déjame tu número de contacto
          </label>
          <input
            type="text"
            id="number"
            name="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Your WhatsApp number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Envía tu correo
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Conecta Conmigo</h3>
      </div>
    </div>
  );
};

export default Contact;





