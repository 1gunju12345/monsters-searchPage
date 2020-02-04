import React from 'react';
import './cardlist.css';
import {Card} from '../card/card';
 export const CardList =(props) =>{
   
     return(
        
     <div className='cardlist'> {
        props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}/>))
      }
    </div>
     );
   
 };