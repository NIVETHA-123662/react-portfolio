import React from 'react'

function Home() {
  return (
    <>
      <div>
        <div className="text-center bg-gradient-to-r from-pink-400 to-blue-500 shadow-lg rounded p-10">
          <h1 className="font-bold text-3xl p-2 text-white">Hi, I'm Nivetha!</h1>
          <h2 className="font-light text-2xl text-gray-800">
            Aspiring Full-stack Developer | Student
          </h2>
          <p className="text-2xl font-semibold p-6">
            I build responsive and visually appealing web applications.
            <br />
            Let's work together to build something great.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-red-700 p-3 rounded font-semibold shadow-lg text-white">
              Hire me
            </button>
            <button className="bg-purple-700 p-3 rounded font-semibold shadow-lg text-white">
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home