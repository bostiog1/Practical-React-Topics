import { MdAlarm } from "react-icons/md";
import "./App.css";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");
const CostumToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};
toast.configure();

function App() {
  const notify = () => {
    toast("Basic notification", { position: toast.POSITION.TOP_LEFT });
    // toast("Basic notification", { position: toast.POSITION.TOP_CENTER });
    // toast("Basic notification", { position: toast.POSITION.TOP_RIGHT });
    // toast("Basic notification", { position: toast.POSITION.BOTTOM_LEFT });
    // toast("Basic notification", { position: toast.POSITION.BOTTOM_CENTER });
    // toast("Basic notification", { position: toast.POSITION.BOTTOM_RIGHT });
    toast.success("Success notification", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 8000,
    });
    toast.info("Info notification", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: false,
    });
    toast.warn(<CostumToast />, { position: toast.POSITION.BOTTOM_RIGHT });

    toast.error("Error notification", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div>
        <IconContext.Provider value={{ color: "blue", size: "5rem" }}>
          <FaReact />
          <MdAlarm color="purple" size="10rem" />
        </IconContext.Provider>
        <button onClick={notify}>Notify</button>
      </div>
      <button onClick={() => setModalIsOpen(true)}>Open modal</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "orange",
            backgroundColor: "white",
            width: "50%",
            height: "50%",
            margin: "auto",
          },
        }}
      >
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </>
  );
}

export default App;
