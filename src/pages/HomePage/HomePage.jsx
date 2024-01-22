import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import "./HomePage.css"

import axios from "axios";
import Bottle from "../../components/Bottle/Bottle";

const HomePage = () => {
  const [user, token] = useAuth();
  const [inputMetric, setInputMetric] = useState("ml");
  const [inputVolume, setInputVolume] = useState(0);
  const [standardizedVolume, setStandardizedVolume] = useState(0);
  const [outputVolume, setOutputVolume] = useState(0);
  const [outputVolumeTitle, setOutputVolumeTitle] = useState("");
  const [visualization, setVisualization] = useState(0);

  const standardizeVolume = () => {
    var volume = inputVolume
    switch(inputMetric) {
      case "ml":
        setStandardizedVolume(volume)
        break;
      case "liter":
        setStandardizedVolume(volume*2000)
        break;
      case "ounce":
        setStandardizedVolume(volume*29.57)
        break;
      case "gallon":
        setStandardizedVolume(volume*3785)  
        break;
    }
  }
  
  const convertVolume = () => {
    var convertedVolume = 0
    var bottleVolume = standardizedVolume / 500
    var roundedVolume

    if(bottleVolume >= 606){
      convertedVolume = Math.round((bottleVolume / 606)*100)/100
      setOutputVolumeTitle("bathtubs")
    }
    else if(bottleVolume == 1){
      convertedVolume = bottleVolume
      setOutputVolumeTitle("bottle")
    }
    else {
      convertedVolume = bottleVolume
      roundedVolume = Math.trunc(bottleVolume)
      console.log("dis", Math.round((bottleVolume-roundedVolume)*100))
      setVisualization(roundedVolume)
      setOutputVolumeTitle("bottles")
    }
    setOutputVolume(convertedVolume)
  }

  useEffect(() => {
    convertVolume()
  }, [standardizedVolume]);

  useEffect(() => {
    standardizeVolume()
  }, [inputVolume, inputMetric]);

  return (
    <div>
      <div className="container">
          <div className="input-container">
            <input type="text" onChange={(e) => setInputVolume(e.target.value)}/>
            <select className="input-metric" name="volume" id="volume" onChange={(e) => setInputMetric(e.target.value)}>
              <option value="ml">mls</option>
              <option value="liter">liters</option>
              <option value="ounce">fl oz</option>
              <option value="gallon">gal</option>
            </select>
          </div>
        <p>{outputVolume || 0} {outputVolumeTitle}</p>
      </div>
      <div className="visualization-container">
        {Array.from(Array(visualization)).map((_, index) => <Bottle key={index}/>)}
      </div>
    </div>
    
  );
};

export default HomePage;
