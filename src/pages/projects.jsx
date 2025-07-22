import React from 'react'

const Projects = () => {
  return (
    <>
    <div className="bg-[#152026] flex flex-col min-h-screen"> 
      <div className="max-w-6xl mx-auto">
      <div className="min-h-auto  p-10 bg-[#223E48]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#223E48] p-5">
          {/* Project Card 1 */}
          <div clasName="bg-[#223E48] rounded-lg shadow-lg overflow-hidden">

            {/* Project Image Area */}
              <div className="h-70 bg-slate-600 relative">
                <div className="absolute inset-2 flex items-center justify-center">
                  <img src="src/assets/project1.png" alt="project 1" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Project Details Section */}
              <div className="p-6 bg-[#17343b]">
                <h3 className="font-serif text-3xl font-bold text-white mb-3 ">Create a Full-Stack Bookstore Web Application</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                Created a full-stack web application that allows customers to view and order books,
                and the Admin role can manage the Authors, Customers, Books, and customer cart.
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Tech:</span>
                    <span className="text-slate-300">JAVA REST API | REACT.JS | JSON </span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Status:</span>
                    <span className="text-green-400">Completed</span>
                  </div>
                </div>

                {/* Project Buttons */}
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm transition-colors">
                    View Live
                  </button>
                </div>
              </div>
          </div>
                    {/* Project Card 1 */}
          <div clasName="bg-[#223E48] rounded-lg shadow-lg overflow-hidden">

            {/* Project Image Area */}
              <div className="h-70 bg-slate-600 relative">
                <div className="absolute inset-2 flex items-center justify-center">
                  <img src="src/assets/project2.png" alt="Project 2" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Project Details Section */}
              <div className="p-6 bg-[#17343b]">
                <h3 className="font-serif text-3xl font-bold text-white mb-3 ">Life below Water</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Designed and build interactive website that educates users about marine life conservation. 
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Tech:</span>
                    <span className="text-slate-300">HTML | JAVASCRIPT | CSS</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Status:</span>
                    <span className="text-green-400">Completed</span>
                  </div>
                </div>

                {/* Project Buttons */}
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm transition-colors">
                    View Live
                  </button>
                </div>
              </div>
          </div>
                    {/* Project Card 1 */}
          <div clasName="bg-[#223E48] rounded-lg shadow-lg overflow-hidden">

            {/* Project Image Area */}
              <div className="h-70 bg-slate-600 relative">
                <div className="absolute inset-2 flex items-center justify-center">
                  <img src="src/assets/project3.jpg" alt="Project 3" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Project Details Section */}
              <div className="p-6 bg-[#17343b]">
                <h3 className="font-serif text-3xl font-bold text-white mb-3 ">Adventure With BOBO</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  A therapeutic and educational game designed to 
                  help children with autism improve 
                  communication, motor skills, and 
                  emotional understanding. Features hand tracking,
                  voice interaction, and calming mini-games built using Unity and Python.
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Tech:</span>
                    <span className="text-slate-300">C# | UNITY | MYSQL | PYTHON |</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Status:</span>
                    <span className="text-green-400">Completed</span>
                  </div>
                </div>

                {/* Project Buttons */}
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm transition-colors">
                    View Live
                  </button>
                </div>
              </div>
          </div>
                    {/* Project Card 1 */}
          <div clasName="bg-[#223E48] rounded-lg shadow-lg overflow-hidden">

            {/* Project Image Area */}
              <div className="h-70 bg-slate-600 relative">
                <div className="absolute inset-2 flex items-center justify-center">
                  <img src="src/assets/project4.png" alt="Project 4" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Project Details Section */}
              <div className="p-6 bg-[#17343b]">
                <h3 className="font-serif text-3xl font-bold text-white mb-3 ">Student Management System</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Developed a CLI-based CRUD application to manage student activities and records.
                  Its can check the available seats and search the 
                  student by ID.
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Tech:</span>
                    <span className="text-slate-300">JAVA | JSON</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Status:</span>
                    <span className="text-green-400">Completed</span>
                  </div>
                </div>

                {/* Project Buttons */}
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm transition-colors">
                    View Live
                  </button>
                </div>
              </div>
          </div>
                    {/* Project Card 1 */}
          <div clasName="bg-[#223E48] rounded-lg shadow-lg overflow-hidden">

            {/* Project Image Area */}
              <div className="h-70 bg-slate-600 relative">
                <div className="absolute inset-2 flex items-center justify-center">
                  <img src="src/assets/project5.png" alt="Project 5" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Project Details Section */}
              <div className="p-6 bg-[#17343b]">
                <h3 className="font-serif text-3xl font-bold text-white mb-3 ">Breast Cancer Prediction</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Developed a classification model in Google Collab to predict tumor types using data preprocessing, 
                  model training, and evaluation with scikit-learn.
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Tech:</span>
                    <span className="text-slate-300">MACHINE LEARNING | PYTHON</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Status:</span>
                    <span className="text-green-400">Completed</span>
                  </div>
                </div>

                {/* Project Buttons */}
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm transition-colors">
                    View Live
                  </button>
                </div>
              </div>
          </div>
                    {/* Project Card 1 */}
          <div clasName="bg-[#223E48] rounded-lg shadow-lg overflow-hidden">

            {/* Project Image Area */}
              <div className="h-70 bg-slate-600 relative">
                <div className="absolute inset-2 flex items-center justify-center">
                  <img src="src/assets/project6.png" alt="Project 6" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Project Details Section */}
              <div className="p-6 bg-[#17343b]">
                <h3 className="font-serif text-3xl font-bold text-white mb-3 ">Create a Financial management system</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Create a Financial tracker that manage the expenders and incomes. Can save to a JSON file and bulk from a JSON file. 
                  Categorized with the type and CRUD operations.
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Tech:</span>
                    <span className="text-slate-300">JAVA REST API | REACT.JS | JSON </span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Status:</span>
                    <span className="text-green-400">Completed</span>
                  </div>
                </div>

                {/* Project Buttons */}
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm transition-colors">
                    View Live
                  </button>
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

export default Projects;