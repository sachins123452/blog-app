import React, { useState } from "react";
import "./DropDown.css";

const data = [{ option: "React" }, { option: "flutter" }];

function DropDown({ label, data, width, onClick = () => {} }) {
  const [getOpen, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const handleSelect = (item) => {
    onClick(item);
    setOpen(false);
    setSelectedData(item.option);
  };

  return (
    <>
      <div className="dropdown" style={{ width: width }}>
        <div className="dropdown-btn" onClick={() => setOpen(!getOpen)}>
          <div>{selectedData ? selectedData : label}</div>
          <div className="sub-dropdown-btn">
            {getOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15.5L12 8.5L19 15.5"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 8.5L12 15.5L5 8.5"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        {getOpen ? (
          <>
            {data?.map((item, index) => {
              return (
                <div
                  className="dropdown-content"
                  onClick={() => handleSelect(item)}
                >
                  <div className="dropdown-item">{item.option}</div>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </>
  );
}

DropDown.defaultProps = {
  label: "Choose One",
  width: "20%",
  data: data,
};

export default DropDown;
