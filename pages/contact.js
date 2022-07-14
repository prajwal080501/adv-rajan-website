import React, { useState } from 'react'
import { SunIcon } from '@heroicons/react/outline'
const address = "Sadguru Hambirbaba Society, Opposite Novotel Hotel, Nagar Road, Ramwadi Pune, Maharashtra 411014"

const Contact = ({ darkMode, setDarkMode, handleDarkMode }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    }
    )
    fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
  }

    return (
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe className="opacity-50 grayscale-0 absolute inset-0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360423668!2d73.79292723831107!3d18.524603553571865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1657792343252!5m2!1sen!2sin" width="100%" height="100%" frameBorder="0"></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded-lg shadow-xl">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">{address}</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-blue-500 leading-relaxed">rajan.ladkat@gmail.come</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">8329399576</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 pr-5 ">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" required name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none duration-300 ease active:scale-95 hover:bg-blue-600 rounded text-lg">Submit </button>
            <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
          </form>
        </div>
      </section>
    )
  }

  export default Contact;