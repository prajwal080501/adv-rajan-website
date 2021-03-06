import Image from 'next/image'
import React from 'react'

const Hero = ({ darkMode, setDarkMode, handleDarkMode }) => {
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
  ]

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          <div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
          >
            <Image
              className="absolute inset-0 object-cover w-full h-full shadow-md rounded-lg"
              src="https://www.hyperui.dev/photos/man-1.jpeg"
              alt="Man using a computer"
              width={500}
              height={400}
              objectFit='cover'
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Committed to excellence</h2>

            <p className={darkMode ? "mt-4 text-white" : "mt-4 text-gray-600"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
              atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
              veniam tempora deserunt? Molestiae eius quidem quam repellat.
            </p>

            <a
              className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
              href="/get-started"
            >
              <span className="text-sm font-medium"> Get Started </span>

              <svg
                className="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero