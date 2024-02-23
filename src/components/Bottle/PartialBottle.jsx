import bottle from "../../images/empty-bottle.png"
import liquid from "../../images/bottle-water.png"

import "./PartialBottle.css"

const PartialBottle = ({percent, count}) => {
    const fillPercent = `${100 - percent}%`
    let small = false

    if (count >= 100){
        small = true
    }

    const clipPath = `inset(${fillPercent} 0% 0% 0%)`
    return ( 
        <div className="bottle-container">
            <img className={`${small ? 'small-partial-bottle' : "partial-bottle"}`} src={bottle} alt="" />
            <img style={{clipPath: clipPath}} className={`${small ? 'small-bottle-fluid' : "bottle-fluid"}`} src={liquid} alt="" />
        </div>
     );
}
 
export default PartialBottle;