import shotGlass from "../../images/full-shot-glass.png"

import "./ShotGlass.css"

const ShotGlass = ({count}) => {
    let small = false

    if (count >= 60){
        small = true
    }

    return ( 
        <div>
            <img className={`${small ? 'small-shot-glass' : 'shot-glass'}`} src={shotGlass} alt="" />
        </div>
    );
}
 
export default ShotGlass;