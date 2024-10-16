import { useState } from "react";
import "./App.css";
import imgmy from "./assets/lorem.jpg";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(0); // Initialize modal state

  const openModal = (which) => {
    setModal(which);
  };

  const closeModal = () => {
    setModal(0);
  };

  return (
    <div
      className="bg-cover bg-center h-screen w-full p-6 sm:p-12 flex items-center justify-center"
      style={{ backgroundImage: `url(${imgmy})` }}
    >
      {modal !== 0 && <Modal which={modal} onClose={closeModal} />}

      <div className="backdrop-blur-sm bg-white/30 p-4 rounded-xl flex flex-col lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <p className="font-[roboto] text-[48px] sm:text-[64px] lg:text-[78px] text-base-100">
            INSPIRE <br /> AND <br /> MOTIVATE WITH ANITA
          </p>
          <p className="font-[Mulish] text-base-100 tracking-widest text-[18px] sm:text-[24px] lg:text-[30px] text-center lg:text-left p-4 px-6 sm:px-8 mt-6">
            When life feels hard and dreams seem far, let these words remind you
            of who you are.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mt-6 lg:mt-0 lg:pl-6">
          <button
            onClick={() => openModal(1)}
            className="p-2 bg--500 w-[14rem] sm:w-[18rem] font-[karla] border-2 border-base-100 text-base-100 font-bold rounded-full"
          >
            DAILY DOSE
          </button>

          <button
            onClick={() => openModal(2)}
            className="p-2 bg--500 w-[14rem] sm:w-[18rem] font-[karla] border-2 border-base-100 text-base-100 font-bold rounded-full"
          >
            ABOUT US
          </button>

          <button
            onClick={() => openModal(3)}
            className="p-2 bg--500 w-[14rem] sm:w-[18rem] font-[karla] border-2 border-base-100 text-base-100 font-bold rounded-full col-span-1 sm:col-span-2 justify-self-center"
          >
            ABOUT INSPIRATION BY ANITA
          </button>

          <button
            onClick={() => openModal(4)}
            className="p-2 bg--500 w-[14rem] sm:w-[18rem] font-[karla] border-2 border-base-100 text-base-100 font-bold rounded-full"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
