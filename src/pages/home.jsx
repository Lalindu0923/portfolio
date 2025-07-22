import React from 'react'

const Home = () => {
  return (
    <>
    <div className="bg-[#152026] flex flex-col min-h-screen">
      <div>
        <div className='min-h-auto  bg-[#152026] p-1 m-0'>
          <div className="text-center text-white mt-10 mb-10 p-3 rounded-lg shadow-lg bg-[#27373d]">
            <h1 className="text-4xl font-bold mb-4 pt-4 h-15 flex justify-center ">Lalindu S Jayasinghe</h1>
            <p className="text-lg mb-4">Full Stack Developer | UI/UX Designer | Software Developer |Front-end Developer |Back-end Developer</p>
          </div>
          
          {/* Placeholder for Projects and Designs */}
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-1 bg-[#ff2424] p-1 m-5 rounded-lg shadow-lg ">
            {/* Add your project or design cards here */}
            <div className="bg-[#17343b] rounded-lg shadow-lg p-6">
              <img src='src/assets/designer.png' alt='Designer' className='w-full object-cover rounded-lg ' />
                        <img src='src/assets/adobe.png' className="absolute w-16 top-[45%] left-[10%]  hover:scale-110 transition" alt="Adobe" />
                        <img src='src/assets/canva.jpeg' className="absolute w-16 top-[55%] left-[10%] hover:scale-110 transition" alt="Adobe" />
                        <img src='src/assets/Figma.jpeg' className="absolute w-16 top-[65%] left-[10%] hover:scale-110 transition" alt="Adobe" />
                        <img src='src/assets/word.jpeg' className="absolute w-16 top-[75%] left-[10%] hover:scale-110 transition" alt="Adobe" />
              <div className="bg-[#17343b] rounded-l-lg shadow-lg p-6 flex flex-col justify-between items-center">
              <div>
                <button className="px-4 py-2  bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm transition-colors">
                  view designs
                </button>
              </div>
            </div>
            </div>

            <div className="bg-[#17343b] rounded-lg shadow-lg p-6">
              <img src='src/assets/programmer.png' alt='adobe' className='w-full object-cover rounded-lg ' />
                      <img src='src/assets/node.jpeg' className="absolute w-16 top-[45%] left-[90%]  hover:scale-110 transition" alt="Adobe" />
                      <img src='src/assets/java.jpeg' className="absolute w-16 top-[55%] left-[90%]  hover:scale-110 transition" alt="Adobe" />
                      <img src='src/assets/python.jpeg' className="absolute w-16 top-[65%] left-[90%]  hover:scale-110 transition" alt="Adobe" />
                      <img src='src/assets/js.jpeg' className="absolute w-16 top-[75%] left-[90%]  hover:scale-110 transition" alt="Adobe" />
                      <img src='src/assets/Express.jpeg' className="absolute w-16 top-[85%] left-[90%]  hover:scale-110 transition" alt="Adobe" />
                      <img src='src/assets/spring.jpeg' className="absolute w-16 top-[95%] left-[90%]  hover:scale-110 transition" alt="Adobe" />

                      <img src='src/assets/react.jpeg' className="absolute w-16 top-[45%]  left-[85%]  hover:scale-110 transition" alt="Adobe" />
                      <img src='src/assets/html.jpeg' className="absolute w-16 top-[55%] left-[85%]  hover:scale-110 transition" alt="Adobe" />
                      <img src='src/assets/css.jpeg' className="absolute w-16 top-[65%] left-[85%]  hover:scale-110 transition" alt="Adobe" />
                      <img src='src/assets/mysql.jpeg' className="absolute w-16 top-[75%] left-[85%]  hover:scale-110 transition" alt="Adobe" />
                      <img src='src/assets/mongodb.jpeg' className="absolute w-16 top-[85%] left-[85%]  hover:scale-110 transition" alt="Adobe" />
                      <img src='src/assets/machinl.jpeg' className="absolute w-16 top-[95%] left-[85%]  hover:scale-110 transition" alt="Adobe" />

                      <img src='src/assets/intellij.jpeg' className="absolute w-16 top-[45%] left-[55%]  hover:scale-110 transition" alt="Adobe" />
                      <img src='src/assets/vscode.jpeg' className="absolute w-16 top-[55%] left-[55%]  hover:scale-110 transition" alt="Adobe" />
                      <img src='src/assets/pman.jpeg' className="absolute w-16 top-[65%] left-[55%]  hover:scale-110 transition" alt="Adobe" />
                      <img src='src/assets/NetBeans.jpeg' className="absolute w-16 top-[75%] left-[55%]  hover:scale-110 transition" alt="Adobe" />
              <div className="bg-[#17343b] rounded-r-lg shadow-lg p-6 flex flex-col justify-between items-center">
              <div>
                <button className="px-4 py-2  bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm transition-colors">
                  view Projects
                </button>
              </div>
            </div>
            </div>
          </div>
          <div>
            <div className='bg-[#2a3346] p-10 m-5 rounded-lg shadow-lg'>
              <h2 className='text-3xl font-bold text-white mb-4'>About Me:</h2>
              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 bg-[#000000] p-3 m-6 rounded-lg shadow-lg h-fit">
                <div className='bg-[#000000]   rounded-lg shadow-lg  flex-1/3 justify-center items-center'>
                  <img src='src/assets/lalindu.jpg' alt='Lalindu' className='w-full h-full object-cover rounded-lg p-3' />
                </div>
                <div >
                  <p className='text-white text-lg leading-relaxed md:text-xl'>
                    Hello! I’m Lalindu S Jayasinghe — a passionate and self-driven full-stack developer and computer science undergraduate at IIT Sri Lanka collaborate with University of WESTMINSTER.<br />

                  I enjoy building creative and user-friendly web applications from front to back. I’ve completed hands-on projects using HTML, CSS, JavaScript, React.js, Node.js, Express, MongoDB, and MySQL. <br />
                  I have a solid foundation in programming languages like Java, Python, and I’m comfortable with tools like Git, GitHub, and Postman. I also have experience with frameworks such as Spring Boot and Express.js.

                  In addition to coding, I’ve worked with Figma to design clean and modern UI/UX layouts, and I have a growing interest in animations, accessibility, and creative problem-solving. I’m always excited to learn new technologies and apply them to real-world solutions. Currently I am following Blender tutorials to build Full animated web applications.<br />
                  I’m a quick learner and thrive in collaborative environments. I’ve been involved in various team projects, where I’ve contributed to both the development and design aspects. My goal is to create applications that not only function well but also provide a great user experience.<br />

                  When I’m not coding, I enjoy chess , sports , and leading teams — I’ve proudly served as a school prefect, house captain, and member of the media unit. <be />

                  Let’s build something great together! 

                  </p>
                </div>
              </div>
            </div>  
          </div>         
        </div>
      </div>    
    </div>

    </>
  )
}

export default Home