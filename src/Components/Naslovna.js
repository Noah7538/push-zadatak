import React from 'react';
import {Link} from 'react-router-dom';
import Slika from '../2.jpg';

function Naslovna() {
  return (
    <div>
        <div id="div1">
        <table class = "tablica">
            <tr>

                <td>
                    <Link to = "/Povijest" class = "povratak"><p>Favourite Titles-</p></Link>
                </td>

                <td>
                    <Link to = "/Hiperveza" class = "povratak"><p>-More About</p></Link>
                </td>

            </tr>
        </table>

        <img src = {Slika}></img>
        </div>
      
        <div id="div1">
        <p>Nintendo is a Japanese consumer electronics and video game company headquartered at Kyoto. The company was founded at the year 1889 as Nintendo Koppai by craftsman Fusajiro Yamauchi and originally produced handmade hanafuda playing cards. 
            Nintendo has produced some of the most successful consoles of the video game industry, such as the Game Boy, the Super Nintendo Entertainment System, the Wii, and the Nintendo Switch. Nintendo has also developed numerous influential franchises, including SUPER MARIO, THE LEGEND OF ZELDA, and POKEMON.
        </p>
    </div>
    </div>
    
  );
}

export default Naslovna;
