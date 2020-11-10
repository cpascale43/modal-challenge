import React from "react";

import ExitIntent from "../utils/ExitIntent";
import Popup from "../components/Popup";

const PageOne = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [showExitPopup, setShowExitPopup] = React.useState(false);

  React.useEffect(() => {
    const removeExitIntent = ExitIntent({
      XThreshold: 175,
      YThreshold: 175,
      eventThrottle: 100,
      onExitIntent: () => {
        setShowExitPopup(true);
      },
    });
    const popupTimer = setTimeout(() => openModal(), 7000);

    return () => {
      removeExitIntent();
      clearTimeout(popupTimer);
    };
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  if (showExitPopup) {
    return (
      <div>
        <p>EXIT INTENT RAN</p>
        <Popup show={showExitPopup} text="Are you sure you want to leave?" />
      </div>
    );
  } else
    return (
      <div>
        <Popup
          show={modalIsOpen}
          text="Modal 1"
          link="2"
          linkText="Page Two"
        />
      </div>
    );
};

export default PageOne;
