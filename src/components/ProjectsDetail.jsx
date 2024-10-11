import React from 'react'
import Modal from 'react-modal'


const ProjectsDetail = (props) => {
  return (
    <div>
      <Modal
                isOpen={props.modalOpen}
                onRequestClose={() => props.onToggle(false)}
     >
         <div>
             <button onClick={() => {props.onToggle(false); }}>close</button>
        </div>
        <div >
         <h2>Title</h2>
         </div>
     </Modal>
    </div>
  )
}

export default ProjectsDetail
