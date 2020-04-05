import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

// const { app } = window.require("electron").remote;

function Upload() {
  const fileInputRef = useRef();

  const dragOver = (e) => {
    e.preventDefault();
  };

  const castVideo = async ({ path, name, type, size }) => {
    const response = await axios.post("http://localhost:5000/start-cast", {
      path,
      name,
      type,
      size,
    });
  };

  return (
    <UploadContainer
      onDrop={(e) => castVideo(e.dataTransfer.files[0])}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="file-drop">
        <p>Drop a video</p>
        <label htmlFor="video-file-input">
          or click <span>here</span> to upload
        </label>
        <input
          id="video-file-input"
          type="file"
          accept=".mp4"
          onChange={() => castVideo(fileInputRef.current.files[0])}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
      </div>
    </UploadContainer>
  );
}

const UploadContainer = styled.div`
  width: 80%;
  height: 300px;
  margin: 10px auto;
  border: 3px dashed dodgerblue;

  .file-drop {
    text-align: center;

    p {
      font-size: 48px;
      letter-spacing: 2px;
      color: lightcoral;
    }

    p:after {
      font-family: FontAwesome;
      content: "\f1fb";
      color: dodgerblue;
      margin-left: 15px;
    }

    label {
      font-size: 22px;
    }

    label > span {
      color: dodgerblue;
      cursor: pointer;
    }
  }
`;

export default Upload;
