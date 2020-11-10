import React from "react";

import Popup from "../components/Popup";

const PageTwo = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    let popupTimer = setTimeout(() => openModal(), 5000);
    return () => {
      clearTimeout(popupTimer);
    };
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <Popup
        show={modalIsOpen}
        text={"Modal 3"}
        linkText={"Page One"}
        link={"1"}
      />
    </div>
  );
};

export default PageTwo;
