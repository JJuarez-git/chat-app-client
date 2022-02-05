import React from "react";

const Modal = (props: any) => {
   const { open } = props
   
   return (
      <div hidden={!open} >
         <div className="absolute top-0 left-0 w-full h-screen bg-modalBackdrop">
            <div className="w-40 h-40 bg-white">
               <p>Modal</p>
            </div>
         </div>
      </div>
   )
}

export default Modal