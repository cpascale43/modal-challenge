import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Popup = (props) => {
  let text;
  const [show, setShow] = useState(props.show);
  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  function afterOpenModal() {
    text.style.color = "#f00";
  }

  const closeModal = () => {
    setShow(false);
  };

  if (show) {
    return (
      <Modal
        isOpen={props.show}
        appElement={document.getElementById("App")}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_text) => (text = _text)}>{props.text}</h2>
        <button onClick={closeModal}>Close</button>
        <Link to={`/${props.link}`}>{props.linkText}</Link>
      </Modal>
    );
  } else {
    return null;
  }
};

export default Popup;
