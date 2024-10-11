import { useRef, useState, useEffect }  from 'react'
import ProjectsDetail from './ProjectsDetail';

const ProjectCards = () => {
      // Modal states
  const [modalViewOpen, setModalViewOpen] = useState(false)


   // Toggle View modal
   const toggleViewModal = (status) => {
    setModalViewOpen(status)
  }

    // On Event Click
    const handleEventClick = () => {
        toggleViewModal(true)
  }
  return (
    <div className="w-full h-full min-h-screen gap-4 flex-wrap flex justify-center items-center" >

  <div onClick={handleEventClick} className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
  <ProjectsDetail modalOpen={modalViewOpen} onToggle={toggleViewModal}  />

  <img  className="h-40 object-cover rounded-xl" src="../../public/projects/Coala.png" alt=""/>
    <div className="p-2">
    <h2 className="font-bold text-lg mb-2 ">Coala</h2>
    <p className="text-sm text-gray-600">B2B comprehensive mobile app that helps coaches to manage their progress through automated curriculum, attendance, evaluation, and reporting all within one app</p>
    </div>
    <div className="m-2">
    <a role='button' href='https://main.d1tudobvnhl6lq.amplifyapp.com/' className="text-yellow-600 bg-transparent py-1 rounded-md hover:text-blue-700">View site</a>
    </div>
  </div>
  <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
  <img  className="h-40 object-cover rounded-xl" src="../../public/projects/project-credence-calendar.jpg" alt=""/>
    <div className="p-2">
    <h2 className="font-bold text-lg mb-2 ">Credence</h2>
    <p className="text-sm text-gray-600">B2B single-page application of an all-in-one CRM platform that helps small businesses and freelancers in business manage their business effortlessly, with functions of email scheduling, client and note creation, email retrieval, report graphs and search functionality.</p>
    </div>
    <div className="m-2">
    <a role='button' href='https://credence.onrender.com/' className="text-yellow-600 bg-transparent py-1 rounded-md hover:text-blue-700">View site</a>
    </div>
  </div>
  
  <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
  <img  className="h-40 object-cover rounded-xl" src="../../public/projects/Pinco.png" alt=""/>
    <div className="p-2">
    <h2 className="font-bold text-lg mb-2 ">Pin.Co</h2>
    <p className="text-sm text-gray-600">A system that helps people to do safety check-ins, share real-time location with friends, send sos messages to contacts by one-click button and ask call simulation to keep safe.</p>
    </div>
    <div className="m-2">
    <a role='button' href='#' className="text-yellow-600 bg-transparent py-1 rounded-md hover:text-blue-700">View site</a>
    </div>
  </div>

  
  
  

</div>
  )
}

export default ProjectCards
