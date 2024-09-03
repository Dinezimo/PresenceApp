import React, { useState, useEffect } from 'react';
import "./loading.css"
import axios from 'axios';
const Loading_page = () => {
     return(
      <div className="loading">
  <div className="loading-wide">
    <div className="l1 color" />
    <div className="l2 color" />
    <div className="e1 color animation-effect-light" />
    <div className="e2 color animation-effect-light-d" />
    <div className="e3 animation-effect-rot">X</div>
    <div className="e4 color animation-effect-light" />
    <div className="e5 color animation-effect-light-d" />
    <div className="e6 animation-effect-scale">*</div>
    <div className="e7 color" />
    <div className="e8 color" />
  </div>
</div>
     );
}

export default Loading_page;
