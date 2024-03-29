import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import "./HomePage.css"

import Bottle from "../../components/Bottle/Bottle";
import ShotGlass from "../../components/ShotGlass/ShotGlass";
import Bathtub from "../../components/Bathtub/Bathtub";
import PartialShotGlass from "../../components/ShotGlass/PartialShotGlass";
import PartialBottle from "../../components/Bottle/PartialBottle";
import Bucket from "../../components/Bucket/Bucket";
import MilkJug from "../../components/MilkJug/MilkJug";
import PartialMilkJug from "../../components/MilkJug/PartialMilkJug";
import PartialBucket from "../../components/Bucket/PartialBucket";

const HomePage = () => {
  const [user, token] = useAuth();
  const [inputMetric, setInputMetric] = useState("ml");
  const [outputMetric, setOutputMetric] = useState("default");
  const [inputVolume, setInputVolume] = useState(0);
  const [standardizedVolume, setStandardizedVolume] = useState(0);
  const [outputVolume, setOutputVolume] = useState(0);
  const [outputVolumeTitle, setOutputVolumeTitle] = useState("");
  const [visualization, setVisualization] = useState([]);
  const [visualizationCount, setVisualizationCount] = useState(0);
  const [percentageVisualization, setPercentageVisualization] = useState(0);

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
    const milkJugVolume = 3785
    const bucketVolume = 18900
    const tubVolume = 302800
    
    if(outputMetric == "default"){

      if(standardizedVolume >= tubVolume){
        convertedVolume = Math.round((standardizedVolume/tubVolume)*100)/100
        roundedVolume = Math.trunc(convertedVolume)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("bathtubs")
      }
      else if (standardizedVolume === bucketVolume) {
        convertedVolume = (standardizedVolume/bucketVolume)
        roundedVolume = Math.trunc(convertedVolume)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("bucket")
      }
      else if (standardizedVolume > bucketVolume){
        convertedVolume = Math.round((standardizedVolume/bucketVolume)*100)/100
        roundedVolume = Math.trunc(convertedVolume)
        percentLeftover = Math.round((convertedVolume-roundedVolume)*100)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("buckets")
      }
      else if (standardizedVolume === milkJugVolume) {
        convertedVolume = (standardizedVolume/milkJugVolume)
        roundedVolume = Math.trunc(convertedVolume)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("milk jug")
      }
      else if (standardizedVolume > milkJugVolume){
        convertedVolume = Math.round((standardizedVolume/milkJugVolume)*100)/100
        roundedVolume = Math.trunc(convertedVolume)
        percentLeftover = Math.round((convertedVolume-roundedVolume)*100)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("milk jugs")
      }
      else if(standardizedVolume == bottleVolume){
        convertedVolume = (standardizedVolume/bottleVolume)
        roundedVolume = Math.trunc(convertedVolume)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("bottle")
      }
      else if(standardizedVolume > bottleVolume){
        convertedVolume = Math.round((standardizedVolume/bottleVolume)*100)/100
        roundedVolume = Math.trunc(convertedVolume)
        percentLeftover = Math.round((convertedVolume-roundedVolume)*100)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("bottles")
      }
      else if (standardizedVolume == shotGlassVolume){
        convertedVolume = standardizedVolume/shotGlassVolume
        setVisualizationCount(convertedVolume)
        setOutputVolumeTitle("shot glass")
      }
      else{
        convertedVolume = Math.round((standardizedVolume/shotGlassVolume)*100)/100
        roundedVolume = Math.trunc(convertedVolume)
        percentLeftover = Math.round((convertedVolume-roundedVolume)*100)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("shot glasses")
      }
    }
    else if(outputMetric == "shotGlasses"){
      if (standardizedVolume == shotGlassVolume){
        convertedVolume = standardizedVolume/shotGlassVolume
        setVisualizationCount(convertedVolume)
        setOutputVolumeTitle("shot glass")
      }
      else{
        convertedVolume = Math.round((standardizedVolume/shotGlassVolume)*100)/100
        roundedVolume = Math.trunc(convertedVolume)
        percentLeftover = Math.round((convertedVolume-roundedVolume)*100)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("shot glasses")
      }
    }
    else if(outputMetric == "waterBottles"){
      if(standardizedVolume == bottleVolume){
        convertedVolume = (standardizedVolume/500)
        roundedVolume = Math.trunc(convertedVolume)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("bottle")
      }
      else{
        convertedVolume = Math.round((standardizedVolume/bottleVolume)*100)/100
        roundedVolume = Math.trunc(convertedVolume)
        percentLeftover = Math.round((convertedVolume-roundedVolume)*100)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("bottles")
      }
    }
    else if (outputMetric == 'milkJugs') {
      if (standardizedVolume === milkJugVolume) {
        convertedVolume = (standardizedVolume/milkJugVolume)
        roundedVolume = Math.trunc(convertedVolume)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("milk jug")
      }
      else {
        convertedVolume = Math.round((standardizedVolume/milkJugVolume)*100)/100
        roundedVolume = Math.trunc(convertedVolume)
        percentLeftover = Math.round((convertedVolume-roundedVolume)*100)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("milk jugs")
      }
    }
    else if(outputMetric === 'buckets'){
      if (standardizedVolume === bucketVolume) {
        convertedVolume = (standardizedVolume/bucketVolume)
        roundedVolume = Math.trunc(convertedVolume)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("bucket")
      }
      else {
        convertedVolume = Math.round((standardizedVolume/bucketVolume)*100)/100
        roundedVolume = Math.trunc(convertedVolume)
        percentLeftover = Math.round((convertedVolume-roundedVolume)*100)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("buckets")
      }
    }
    else if(outputMetric == "bathtubs"){
      if(standardizedVolume >= tubVolume){
        convertedVolume = Math.round((standardizedVolume/tubVolume)*100)/100
        roundedVolume = Math.trunc(convertedVolume)
        setVisualizationCount(roundedVolume)
        setOutputVolumeTitle("bathtubs")
      }
    }
    setPercentageVisualization(percentLeftover)
    setOutputVolume(convertedVolume)
  }

  const setVisualizationElement = () => {
    console.log()
    let visualizationElement = []
    let visualizationOfPercentage
    switch(outputVolumeTitle){
      case "bathtubs":
        visualizationElement = Array.from(Array(visualizationCount)).map((_, index) => <Bathtub key={index}/>)
        break;
      
      case "bucket":
      case "buckets":
        console.log(percentageVisualization)
        visualizationElement = Array.from(Array(visualizationCount)).map((_, index) => <Bucket key={index} count={visualizationCount}/>)
        if(percentageVisualization != 0){
          visualizationOfPercentage = <PartialBucket percent={percentageVisualization} count={visualizationCount}/>
        }
        visualizationElement.push(visualizationOfPercentage)
        break;
      case "milk jug":
      case "milk jugs":
        console.log(percentageVisualization)
        visualizationElement = Array.from(Array(visualizationCount)).map((_, index) => <MilkJug key={index} count={visualizationCount}/>)
        if(percentageVisualization != 0){
          visualizationOfPercentage = <PartialMilkJug percent={percentageVisualization} count={visualizationCount}/>
        }
        visualizationElement.push(visualizationOfPercentage)
        break;
      case "bottle":
      case "bottles":
        visualizationElement = Array.from(Array(visualizationCount)).map((_, index) => <Bottle key={index} count={visualizationCount}/>)
        if(percentageVisualization != 0){
          visualizationOfPercentage = <PartialBottle percent={percentageVisualization} count={visualizationCount}/>
        }
        visualizationElement.push(visualizationOfPercentage)
        break;
      case "shot glass":
      case "shot glasses":
        visualizationElement = Array.from(Array(visualizationCount)).map((_, index) => <ShotGlass key={index} count={visualizationCount}/>)
        if(percentageVisualization != 0){
          visualizationOfPercentage = <PartialShotGlass percent={percentageVisualization} count={visualizationCount}/>
        }
        visualizationElement.push(visualizationOfPercentage)
        break;
      }
    setVisualization(visualizationElement)
  }

  useEffect(() => {
    convertVolume()
  }, [standardizedVolume, outputMetric]);

  useEffect(() => {
    standardizeVolume()
  }, [inputVolume, inputMetric]);

  useEffect(() => {
    setVisualizationElement()
  }, [visualizationCount, percentageVisualization]);

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
        <select className="outputs-metric" name="volume" id="volume" onChange={(e) => {
          setOutputMetric(e.target.value)}}>
              <option value="default">Default</option>
              <option value="shotGlasses">Shot Glasses (1.5oz/45ml)</option>
              <option value="waterBottles">Water Bottles (16oz/500ml)</option>
              <option value="milkJugs">Milk Jugs (1 gallon/4 liters)</option>
              <option value="buckets">Buckets (5 gallons / 20 liters)</option>
              <option value="bathtubs">Bathtubs (80 gallons / 320 liters)</option>
        </select>
      </div>
      <div className="visualization-container">
        {visualization}
      </div>
    </div>
    
  );
};

export default HomePage;
