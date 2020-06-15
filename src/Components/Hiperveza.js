import React from 'react';
import {Link} from 'react-router-dom';
import Bla from './all.png';

function Hiperveza() {
  return (
    <div>
      <div id="div1">

        <Link to = "/" class = "povratak"><p id="p1">Return</p></Link>

        <br></br>

        <img src = {Bla} id="img2"></img>

        <br></br>

        <a href = "https://www.nintendo.com/"><p>Official Site</p></a>
      </div>
    </div>
  );
}

export default Hiperveza;
