import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Button from "@material/core/Button";
import Menu from "@material/Menu";
import MenuItem from "@material/MenuItem";
import Voice from "../assets/voice.svg";
import Camera from "../assets/camera.png";
import Search from "../assets/search.svg";
import Pen from "../assets/pen.svg";
import Plus from "../assets/plus.svg";
import MeniIcon from "../assets/menu.svg";

const Main = ({ isModalVisible, showModal }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [data, setData] = useState([]);

  const handleButtonClick = () => {
    showModal();
  };

  const OpenLink = ({ url, children }) => (
    <a href={url} rel="noopener noreferrer">
      {children}
    </a>
  );

  useEffect(() => {
    const localStorageData = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      localStorageData.push(JSON.parse(value));
    }
    setData(localStorageData);
  }, [isModalVisible]);

  return (
    <section className="mt-32 w-full">
      <div className="mx-auto mb-8 h-24 w-[275px] bg-[url('./assets/google.svg')] bg-contain bg-no-repeat"></div>
      <label
        htmlFor="search"
        className="mx-auto mb-6 flex w-[40%] items-center justify-between rounded-[30px] bg-white px-6 py-2"
      >
        <div className="flex w-full items-center gap-3">
          <img src={Search} alt="search icon" width={24} height={24} />
          <input
            type="search"
            id="search"
            className="flex-grow bg-none outline-none"
            placeholder="Search Google or type a URL"
          />
        </div>
        <div className="flex items-center gap-3">
          <button>
            <img src={Voice} alt="voice icon" width={28} height={28} />
          </button>
          <button>
            <img src={Camera} alt="camera icon" width={20} height={20} />
          </button>
        </div>
      </label>
      <div className="mx-auto flex h-[230px] w-[40%] flex-wrap items-start justify-center gap-1">
        <button
          className="plusbtn flex flex-col items-center justify-center gap-2 rounded-lg px-[18px] py-[10px] hover:bg-[#697b83]"
          onClick={handleButtonClick}
        >
          <div className=" mt-4 h-12 w-12 rounded-[50%] bg-[#36464d] p-3">
            <img src={Plus} alt="plus icon" width={24} height={24} />
          </div>
          <p className="text-[14px]">New shortcut</p>
        </button>
        {data.slice(0, 7).map((item, index) => (
          <OpenLink key={index} url={item.url}>
            <button className="btn relative flex w-[124px] flex-col items-center justify-center gap-2 rounded-lg px-[18px] py-[10px] hover:bg-[#697b83]">
              <div className="mt-4 h-12 w-12 rounded-[50%] bg-[#18a51f] px-3 pb-3 pt-2">
                <h2 className="align-middle text-[24px] font-bold">
                  {item.name[0]}
                </h2>
              </div>
              <p className="text-[14px]">{item.name}</p>
              <div className="btn_item absolute right-0 top-[2px] h-7 w-7 rounded-[50%] p-1 opacity-0 hover:bg-[#5f6d74]">
                <img src={MeniIcon} alt="menu icon" />
              </div>
            </button>
          </OpenLink>
        ))}
      </div>
      <Tooltip title="Customize this page" placement="bottom">
        <button className="ml-auto mt-1 block h-9 w-9 rounded-[50%] bg-[#ffffff17] p-[10px] hover:bg-[#ffffff48] ">
          <img src={Pen} alt="pen icon" />
        </button>
      </Tooltip>
    </section>
  );
};

export default Main;
