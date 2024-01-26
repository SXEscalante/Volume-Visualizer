import glass from "../../images/empty-shot-glass.png"
import liquid from "../../images/shot-glass-water.png"

import "./PartialShotGlass.css"

const PartialShotGlass = ({percent}) => {
    const fillPercent = `${100 - percent}%`

    const clipPath = `inset(${fillPercent} 0% 0% 0%)`
    return ( 
        <div className="shot-glass-container">
            <img className="shot-glass" src={glass} alt="" />
            <img style={{clipPath: clipPath}} className="shot-glass-fluid" src={liquid} alt="" />
        </div>
     );
}
 
export default PartialShotGlass;