const Designs = () => {
  return (
  
    <>
    <div className="bg-[#152026] flex flex-col min-h-screen">
    <div className="max-w-6xl mx-auto">
        <div className='min-h-auto  p-10 bg-[#223E48]'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#223E48] p-5">
            {/* Project Card 1 */}
            <div className="bg-[#223E48] rounded-lg shadow-lg overflow-hidden">
              {/* Project Image Area */}
              <div className="h-71 bg-slate-600 relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <img src="src/assets/design1.png" alt="Design 1" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Project Details Section */}
              <div className="p-6 bg-[#17343b]">
                <h3 className="font-serif text-3xl font-bold text-white mb-3 ">MovieHub - UI/UX Design for Movie Streaming</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Designing a straightforward website for MOVIEHUB with the prototype. Just the homepage, movies, TV series, movie detail page, 
                  and also the sign-in page and sign-up page.
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Tech:</span>
                    <span className="text-slate-300">Figma</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Status:</span>
                    <span className="text-green-400">Completed</span>
                  </div>
                </div>

                {/* Project Buttons */}
                <div className="flex space-x-3">
                  <a
                    href="https://www.figma.com/design/lX9VU5aqH7ELH8yBgrfMN8/Movie-Hub?node-id=1-2&t=W7THl6ma6RUsenqL-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >                                
                  <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm transition-colors">
                    View Live
                  </button>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-[#223E48] rounded-lg shadow-lg overflow-hidden">
              {/* Project Image Area */}
              <div className="h-77 bg-slate-600 relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <img src="src/assets/design2.png" alt="Design 2" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Project Details Section */}
              <div className="p-6 bg-[#17343b]">
                <h3 className="font-serif text-3xl font-bold text-white mb-3">Portfolio - UI/UX Design Personal Portfolio</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  This is my Portfolio I have design by Figma. 
                  Animation and Hover effect for buttons.
                  Animated scrolling.
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Tech:</span>
                    <span className="text-slate-300">Figma</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Status:</span>
                    <span className="text-green-400">Completed</span>
                  </div>
                </div>

              {/* Project Buttons */}
                <div className="flex space-x-3">
                  <a
                    href="https://www.figma.com/design/9U6cWw2aqDQumX5GKsS1di/Portfolio?node-id=0-1&t=Ep5eYGyZB8Pe8nRR-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >              
                  <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm transition-colors">
                    View Live
                  </button>
                  </a>
                </div>
              </div>
            </div>


            {/* Project Card 3 */}
            <div className="bg-[#223E48] rounded-lg shadow-lg overflow-hidden">
              {/* Project Image Area */}
              <div className="h-71 bg-slate-600 relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <img src="src/assets/EventHandler.png" alt="Design 1" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Project Details Section */}
              <div className="p-6 bg-[#17343b]">
                <h3 className="font-serif text-3xl font-bold text-white mb-3 ">Event Handler - UI/UX Design for Admin Page view</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Design an event handler Admin web application from an admin point of view. Animation and
                  Prototype.
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Tech:</span>
                    <span className="text-slate-300">Figma</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <span className="w-20">Status:</span>
                    <span className="text-green-400">Completed</span>
                  </div>
                </div>

                {/* Project Buttons */}
                <div className="flex space-x-3">
                  <a
                    href="https://www.figma.com/design/xkIRUFDI3cxUI4CQ3qQL3M/EventHandlerAdmin?node-id=0-1&t=tIu0kxzHsX4jy7hw-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <button   
                    className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm transition-colors">
                    View Live
                  </button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
      </>

            );
          }
            
export default Designs;