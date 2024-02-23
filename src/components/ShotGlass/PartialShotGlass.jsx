import glass from "../../images/empty-shot-glass.png"
import liquid from "../../images/shot-glass-water.png"

import "./PartialShotGlass.css"

const PartialShotGlass = ({percent, count}) => {
    const fillPercent = `${100 - percent}%`
    let small = false

    if (count >= 60){
        small = true
    }

    const clipPath = `inset(${fillPercent} 0% 0% 0%)`
    return ( 
        <div className="shot-glass-container">
            <img className={`${small ? 'small-partial-shot-glass' : "partial-shot-glass"}`} src={glass} alt="" />
            <img style={{clipPath: clipPath}} className={`${small ? 'small-shot-glass-fluid' : "shot-glass-fluid"}`} src={liquid} alt="" />
        </div>
     );
}
 
export default PartialShotGlass;