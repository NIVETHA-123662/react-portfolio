import React from 'react'

function Contact() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-pink-300 p-10 text-center mx-20 my-10 rounded">
      <h1 className="text-3xl text-black p-4 font-bold">Contact Me</h1>

      <form className="flex flex-col items-center">
        {/* Name */}
        <label htmlFor="name" className="font-bold text-xl">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="text-xl px-3 py-2 m-4 border-black border-2 rounded"
        />

        {/* Email */}
        <label htmlFor="email" className="font-bold text-xl">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="text-xl px-3 py-2 m-4 border-black border-2 rounded"
        />

        {/* Mobile */}
        <label htmlFor="mobile" className="font-bold text-xl">Mobile:</label>
        <input
          type="number"
          id="mobile"
          name="mobile"
          placeholder="Enter your mobile number"
          className="text-xl px-3 py-2 m-4 border-black border-2 rounded"
        />

        {/* Submit */}
        <input
          type="submit"
          value="Register"
          className="bg-blue-700 text-white font-semibold p-3 px-6 rounded m-4 cursor-pointer hover:bg-blue-800 transition duration-300"
        />
      </form>

      {/* Social Links */}
      <div className="flex gap-6 p-4 justify-center">
        <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            className="w-8 h-8 hover:scale-110 transition duration-200"
          />
        </a>

        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="w-8 h-8 hover:scale-110 transition duration-200"
          />
        </a>
      </div>
    </div>
  )
}

export default Contact