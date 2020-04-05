import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Upload from "./upload";
import Header from "./header";

const { app } = window.require("electron").remote;

function App() {
  return (
    <div class="container">
      <div>
        <Header />
      </div>
      <div style={{ width: "80%", height: "300px", margin: "75px auto" }}>
        <Upload />
      </div>
    </div>
  );
}

export default App;
