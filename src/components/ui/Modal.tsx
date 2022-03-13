import React from "react";
import Fade from "./Fade";

interface ModalProps {
  children: any;
  className?: string;
  open?: boolean;
  onClose?: any;
  hasBackdrop?: boolean;
  fade?: boolean;
}

const Modal = (props: ModalProps) => {
  const { children, open, onClose, hasBackdrop = false, fade = false } = props;

  return (
    <React.Fragment>
      <div
        className="absolute top-0 left-0 w-full h-screen bg-black opacity-30"
        style={{
          display: open ? "block" : "none",
          opacity: hasBackdrop ? "0.3" : 0,
        }}
      ></div>

      <div
        className="absolute top-0 left-0 w-full h-screen overflow-hidden"
        style={{ display: open ? "block" : "none" }}
      >
        <Fade active={fade}>
          <div className="flex w-full h-screen justify-center items-center">
            <div className="bg-white">
              <p onClick={onClose}>Close</p>
              {children}
            </div>
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default Modal;
