import { MdAlarm } from "react-icons/md";
import "./App.css";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Modal from "react-modal";
import React, { forwardRef, useState, useRef } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import CountUp, { useCountUp } from "react-countup";
import { ChromePicker } from "react-color";
// import IdleTimerContainer from "./components/IdleTimerContainer";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ColoredTooltip = () => {
  return <span style={{ color: "yellow" }}>Colored component</span>;
};

const CostumChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  );
});

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

  const countUpRef = useRef();

  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    duration: 5,
    end: 10000,
    startOnMount: false,
  });
  ///////////////////
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  ///////////////////

  // Credit card
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  /////////////////////
  // Date picker
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <IconContext.Provider value={{ color: "blue", size: "2rem" }}>
          <FaReact />
          <MdAlarm color="purple" size="5rem" />
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

      <div style={{ marginTop: "10px", paddingBottom: "10px" }}>
        <Tippy
          placement="right"
          arrow={false}
          delay={1000}
          content="Basic tooltip"
        >
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "10px" }}>
        <Tippy
          content={<span style={{ color: "orange" }}>Colored tooltip</span>}
        >
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "10px" }}>
        <Tippy content={<ColoredTooltip />}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div>
        <Tippy
          placement="top-start"
          content={<ColoredTooltip></ColoredTooltip>}
        >
          <CostumChild></CostumChild>
        </Tippy>
      </div>
      <div style={{ marginTop: "10px" }}>
        <div>
          <h3 ref={countUpRef}></h3>
          <button onClick={start}>Start</button>
          <button onClick={reset}>Reset</button>
          <button onClick={pauseResume}>Pause/Resume</button>
          <button onClick={() => update(2000)}>Update to 2000</button>
        </div>
        <h4>
          <CountUp end={200}></CountUp>
        </h4>
        <br />
        <h4>
          <CountUp end={200} duration={5}></CountUp>
        </h4>
        <br />
        <h4>
          <CountUp start={500} end={1000} duration={5}></CountUp>
        </h4>
        <br />
        <h4>
          <CountUp end={1000} duration={5} prefix="$" decimals={2}></CountUp>
        </h4>
        <h4>
          <CountUp end={1000} duration={5} suffix="USD" decimals={2}></CountUp>
        </h4>
      </div>

      <div>
        <button
          onClick={() =>
            setShowColorPicker((showColorPicker) => !showColorPicker)
          }
        >
          {showColorPicker ? "Close color picker" : "Pick a color!"}
        </button>
        {showColorPicker && (
          <ChromePicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          ></ChromePicker>
        )}
        <h1 style={{ backgroundColor: `${color}` }}>{color}</h1>
      </div>
      <div>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        <form>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY Expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </form>
      </div>
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          // minDate={new Date()}
          // maxDate={new Date()}
          filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
        />
      </div>
    </div>
  );
}

export default App;
