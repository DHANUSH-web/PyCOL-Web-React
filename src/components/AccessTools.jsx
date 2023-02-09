import React, { Component } from "react";
import { clearColorList, generateRandomColors, saveColor } from "./utils";
import tippy from "tippy.js";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import "./AccessTools.css";

class AccessTools extends Component {
  render() {
    return (
      <div className="hotAccess">
        <ul className="tools">
          <li
            className="randomColor"
            id="tool"
            onClick={() => generateRandomColors()}
            onMouseOver={() =>
              tippy(".randomColor", {
                content: "Random Color",
                animation: "scale",
                arrow: false,
              })
            }
          >
            <i className="fa-solid fa-dice-five"></i>
          </li>
          <li
            className="saveColor"
            id="tool"
            onClick={() => saveColor()}
            onMouseOver={() =>
              tippy(".saveColor", {
                content: "Save Color",
                placement: "right",
                animation: "scale",
                arrow: false,
              })
            }
          >
            <i className="fa-solid fa-bookmark"></i>
          </li>
          <li
            className="clearList"
            id="tool"
            onClick={() => clearColorList()}
            onMouseOver={() =>
              tippy(".clearList", {
                content: "Clear List",
                animation: "scale",
                placement: "right",
                arrow: false,
              })
            }
          >
            <i className="fa fa-trash"></i>
          </li>
          <hr />
          <li
            className="repo"
            id="tool"
            onClick={() => {
              openRepo();
            }}
            onMouseOver={() =>
              tippy(".repo", {
                content: "Source Code",
                animation: "scale",
                placement: "right-end",
                arrow: false,
              })
            }
          >
            <i className="fa-brands fa-bitbucket"></i>
          </li>
          <li
            className="instagram"
            onMouseOver={() =>
              tippy(".instagram", {
                content: "Follow on Insta",
                placement: "bottom",
                animation: "scale",
                arrow: false,
              })
            }
            onClick={() => openInsta()}
          >
            <i className="fa-brands fa-instagram"></i>
          </li>
        </ul>
      </div>
    );
  }
}

const openInsta = () => {
  window.open("https://www.instagram.com/dhanushh48/");
};

const openRepo = () => {
  window.open("https://www.bitbucket.org/dhanushhv/pycol-web-app/");
};

export default AccessTools;