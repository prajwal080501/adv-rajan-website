import React from 'react'

const Testimonials = ({ darkMode, setDarkMode, handleDarkMode }) => {

    const testimonials = [
        {
            name: 'Sanju Chaturvedi',
            review: 'He is very genuine lawyer. He listened our concerns and spend good amount of time to do his homework and helped us to understand each and every clause. He always ready to help over whatsapp or phone whenever need .....great help',
            rating: 5,
        },
        {
            name: 'Akshay More',
            review: 'Superb Sir I am very happy with the work and service 😌',
            rating: 5,
        },
        {
            name: 'Sham Kharat',
            review: '',
            rating: 5,
        }
    ]
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <p className={darkMode ? "text-3xl font-bold text-center text-white pb-8" : "text-3xl font-bold text-center text-black pb-8"}>Testimonials</p>
                <div className="flex  space-x-4 flex-col md:flex-row">

                    {testimonials.map((item, idx) => (
                        <div key={idx} className={darkMode ? 'testomonial-dark' : 'testomonial'}>
                            <div className="h-full text-center">
                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <span className='py-4 text-xl mb-4' key={item.review}>⭐</span>
                                ))}
                                <p className="leading-relaxed">{item.review}</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className={ darkMode ? "text-white font-bold  title-font tracking-wider text-sm" : "text-gray-900 font-medium title-font tracking-wider text-sm"}>{item.name}</h2>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Testimonials