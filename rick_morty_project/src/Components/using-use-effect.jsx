//using-use-effect.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export const fetchData = async () => {
      try {
        const apiData = await axios.get(
      "https://api.sampleapis.com/rickandmorty/characters"
        );
        console.log(apiData);
        return(apiData.data);
      } catch (e) {
        console.log(e);
        return "Failed to fetch data!"
      }
    };
    export const fetchDetailsData = async (characterId) => {
      try {
        const apiData = await axios.get(
     `https://api.sampleapis.com/rickandmorty/characters/${characterId}` 
        );
        console.log(apiData);
        return(apiData.data);
      } catch (e) {
        console.log(e);
        return "Failed to fetch data!"
      }
    };


  
  

 
