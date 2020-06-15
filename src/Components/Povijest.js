import React from 'react';
import {Link} from 'react-router-dom';
import Druga from './pokemon.jpg';
import Treca from './mario.jpg';
import Cetvrta from './zelda.png';

function Povijest() {
  return (
    <div>
        <Link to = "/" class = "povratak"><p id="p1">Return</p></Link>
        <div id="div1">
          <br></br>
          <img src = {Druga}></img>

          <p>
            Pokémon is a Japanese franchise managed by the Pokémon Company, a company founded and with shares divided between Nintendo, Game Freak, and Creatures. The franchise copyright and Japanese trademark is shared by all three companies, but Nintendo is the sole owner of the trademark in other countries. The franchise was created by Satoshi Tajiri in 1995 and is centered on fictional creatures called Pokémon, which humans, known as Pokémon Trainers, catch and train to battle each other for sport.
          </p>
        </div>
        <div id="div1">
          <br></br>
          <img src = {Treca}></img>

          <p>
          Super Mario is a Japanese platform video game series and media franchise created by Nintendo and featuring their mascot, Mario. Alternatively called the Super Mario Bros. series or simply the Mario series, it is the central series of the greater Mario franchise.
          </p>
        </div>
        <div id="div1">
          <br></br>
          <img src = {Cetvrta} id="img1"></img>

          <p>
          The Legend of Zelda is an action-adventure video game franchise created by Japanese game designers Shigeru Miyamoto and Takashi Tezuka. It is primarily developed and published by Nintendo, although some portable installments and re-releases have been outsourced to Capcom, Vanpool, and Grezzo. The gameplay incorporates action-adventure and elements of action RPG games.
          </p>
        </div>
    </div>
  );
}

export default Povijest;
