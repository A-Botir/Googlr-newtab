import React, { useState } from "react";
import Header from "./componenta/Header";
import Main from "./componenta/Main";
import Modal from "./componenta/Modal";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="relative mx-auto h-screen w-full bg-slate-600 px-3">
      <Header />
      <Main isModalVisible={isModalVisible} showModal={showModal} />
      {isModalVisible && <Modal hideModal={hideModal} />}
    </div>
  );
};

export default App;
