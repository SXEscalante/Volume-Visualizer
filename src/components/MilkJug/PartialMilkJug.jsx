import emptyJug from '../../images/empty-milk-jug.png'
import liquid from '../../images/milk-jug-water.png'

import './MilkJug.css'

const PartialMilkJug = ({percent, count}) => {
    const fillPercent = `${100 - percent}%`
    let small = false

    if (count >= 100){
        small = true
    }

    const clipPath = `inset(${fillPercent} 0% 0% 0%)`
    return ( 
        <div className="milk-jug-container">
            <img className={`${small ? 'small-partial-milk-jug' : "partial-milk-jug"}`} src={emptyJug} alt="" />
            <img style={{clipPath: clipPath}} className={`${small ? 'small-milk-jug-fluid' : "milk-jug-fluid"}`} src={liquid} alt="" />
        </div>
     );
}
 
export default PartialMilkJug;