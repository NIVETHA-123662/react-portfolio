import React from 'react'

function About() {
  return (
    <>
    <div>
        <div>
                <h1 className="p-7 text-3xl underline font-semibold">About me</h1>
                <p className="p-5 font-light text-xl">Hello! I'm Nivetha G, a passionate and curious learner currently pursuing my Bachelor of Computer Applications (BCA) with a specialization in Digital Technology. I'm exploring the exciting world of Full Stack Web Development with a strong focus on HTML, CSS, JavaScript, and Java.
          I'm actively seeking internship opportunities and looking forward to gaining hands-on experience in the tech industry while continuing to grow as a developer.</p> <br/>
            <div className="flex justify-around gap-6 ">
                <button className="p-4 m-10 border-white border-2 bg-purple-500  font-semibold text-white-200 rounded shadow-lg">HTML</button>
                 <button className="p-6 m-10 border-white border-2 bg-yellow-500  font-semibold text-white-200 rounded shadow-lg">CSS</button>
                  <button className="p-4 m-10 border-white border-2 bg-pink-500  font-semibold text-white-200 rounded shadow-lg">JavaScript</button>
                   <button className="p-4 m-10 border-white border-2 bg-blue-500  font-semibold text-white-200 rounded shadow-lg">Tailwind</button> 
                    <button className="p-4 m-10 border-white border-2 bg-red-500  font-semibold text-white-200 rounded shadow-lg">python</button>
            
            </div>
        </div>
        </div>
        </>
  )
}

export default About