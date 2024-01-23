import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import "./HomePage.css"

import Bottle from "../../components/Bottle/Bottle";
import ShotGlass from "../../components/ShotGlass/ShotGlass";
import Bathtub from "../../components/Bathtub/Bathtub";

const HomePage = () => {
  const [user, token] = useAuth();
  const [inputMetric, setInputMetric] = useState("ml");
  const [inputVolume, setInputVolume] = useState(0);
  const [standardizedVolume, setStandardizedVolume] = useState(0);
  const [outputVolume, setOutputVolume] = useState(0);
  const [outputVolumeTitle, setOutputVolumeTitle] = useState("");
  const [visualization, setVisualization] = useState([]);
  const [visualizationCount, setVisualizationCount] = useState(0);

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
    const tubVolume = 303000
    
    if(standardizedVolume >= tubVolume){
      convertedVolume = Math.round((standardizedVolume/tubVolume)*100)/100
      roundedVolume = Math.trunc(convertedVolume)
      setVisualizationCount(roundedVolume)
      setOutputVolumeTitle("bathtubs")
    }
    else if(standardizedVolume == bottleVolume){
      convertedVolume = (standardizedVolume/500)
      roundedVolume = Math.trunc(convertedVolume)
      setVisualizationCount(roundedVolume)
      setOutputVolumeTitle("bottle")
    }
    else if(standardizedVolume > bottleVolume){
      convertedVolume = standardizedVolume/bottleVolume
      roundedVolume = Math.trunc(convertedVolume)
      percentLeftover = Math.round((convertedVolume-roundedVolume)*100)
      setVisualizationCount(roundedVolume)
      setOutputVolumeTitle("bottles")
    }
    else{
      convertedVolume = Math.round((standardizedVolume/shotGlassVolume)*100)/100
      roundedVolume = Math.trunc(convertedVolume)
      setVisualizationCount(roundedVolume)
      setOutputVolumeTitle("shot glasses")
    }
    setOutputVolume(convertedVolume)
  }

  const setVisualizationElement = () => {
    let visualizationElement = []
    switch(outputVolumeTitle){
      case "bathtubs":
        visualizationElement = Array.from(Array(visualizationCount)).map((_, index) => <Bathtub key={index}/>)
        break;
      case "bottle":
      case "bottles":
        visualizationElement = Array.from(Array(visualizationCount)).map((_, index) => <Bottle key={index}/>)
        break;
      case "shot glasses":
        visualizationElement = Array.from(Array(visualizationCount)).map((_, index) => <ShotGlass key={index}/>)
        break;
      }
    setVisualization(visualizationElement)
  }

  useEffect(() => {
    convertVolume()
  }, [standardizedVolume]);

  useEffect(() => {
    standardizeVolume()
  }, [inputVolume, inputMetric]);

  useEffect(() => {
    setVisualizationElement()
  }, [visualizationCount]);

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
        {visualization}
      </div>
    </div>
    
  );
};

export default HomePage;
