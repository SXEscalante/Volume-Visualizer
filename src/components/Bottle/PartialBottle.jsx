import bottle from "../../images/empty-bottle.png"
import liquid from "../../images/bottle-water.png"

import "./PartialBottle.css"

const PartialBottle = ({percent}) => {
    const fillPercent = `${100 - percent}%`

    const clipPath = `inset(${fillPercent} 0% 0% 0%)`
    return ( 
        <div className="bottle-container">
            <img className="partial-bottle" src={bottle} alt="" />
            <img style={{clipPath: clipPath}} className="bottle-fluid" src={liquid} alt="" />
        </div>
     );
}
 
export default PartialBottle;