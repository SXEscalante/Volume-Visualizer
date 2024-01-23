import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import "./HomePage.css"

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
      case "tsp":
        setStandardizedVolume(volume*4.93)
        break;
      case "tbsp":
        setStandardizedVolume(volume*14.79)
        break;
      case "ounce":
        setStandardizedVolume(volume*29.57)
        break;
      case "cup":
        setStandardizedVolume(volume*236.59)
        break;
      case "gallon":
        setStandardizedVolume(volume*3785)  
        break;
    }
  }
  
  const convertVolume = () => {
    var convertedVolume = 0
    var roundedVolume = 0
    var percentLeftover = 0
    const shotGlassVolume = 45
    const bottleVolume = 500

    
    if(standardizedVolume == bottleVolume){
      convertedVolume = (standardizedVolume/500)
      setOutputVolumeTitle("bottle")
    }
    else if(standardizedVolume > bottleVolume){
      convertedVolume = standardizedVolume/bottleVolume
      roundedVolume = Math.trunc(convertedVolume)
      percentLeftover = Math.round((convertedVolume-roundedVolume)*100)
      setVisualization(roundedVolume)
      setOutputVolumeTitle("bottles")
    }
    else if(standardizedVolume >= (bottleVolume)*606){
      convertedVolume = Math.round(((standardizedVolume/bottleVolume)/606)*100)/100
      setOutputVolumeTitle("bathtubs")
    }
    else{
      convertedVolume = Math.round((standardizedVolume/shotGlassVolume)*100)/100
      setOutputVolumeTitle("shot glasses")
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
              <option value="tsp">tsp</option>
              <option value="tbsp">tbps</option>
              <option value="ounce">fl oz</option>
              <option value="cup">cups</option>
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
