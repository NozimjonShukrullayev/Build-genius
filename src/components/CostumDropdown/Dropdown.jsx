import React from "react";

import i18next from "i18next";
import "./style.scss";
import { useCustomDropdown } from "./useCostumDropdown";

export const CustomDropdown = ({ className, options = [] }) => {
  const { handleClose, innerValue, handleChange } = useCustomDropdown(options);
  const handleLanguageChange = (selectedLanguage) => {
    i18next.changeLanguage(selectedLanguage);
  };

  return (
    <div className="dropdown">
      <button className={className ? "dropbtn-dark" : "dropbtn"}>
        {" "}
        {innerValue?.label || options[0]?.label || ""}
      </button>
      <ul className="dropdown-content">
        {options.map((option, index) => (
          <li
            className="dropdown-list"
            key={index}
            onClick={() => {
              handleChange(option);
              handleClose();
              handleLanguageChange(option?.value);
            }}
          >
            <button className="optionBtn">{option.label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
