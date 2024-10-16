import React, { useEffect } from "react";

const Modal = ({ which, onClose }) => {
  useEffect(() => {
    const modalElement = document.getElementById("my_modal_4");
    if (which && modalElement) {
      modalElement.showModal();
    }
    alert(which);
    // Cleanup function to close the modal when the component is unmounted
    return () => {
      if (modalElement) {
        modalElement.close();
      }
    };
  }, [which]);
  const john = () => {
    if (which == 4) {
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quaerat
          laborum magni sint optio molestiae, nulla voluptas aperiam eius mollitia
          inventore quidem itaque, iusto obcaecati praesentium, officiis laboriosam
          suscipit aspernatur.
        </p>;
      } else {
        <p>ipsum dolro sit mat</p>
      }
  }
  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            {john}
          </p>
          <div className="modal-action">
            <button className="btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
