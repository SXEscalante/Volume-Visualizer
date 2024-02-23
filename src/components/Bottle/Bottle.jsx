import bottle from "../../images/full-bottle.png"

import "./Bottle.css"

const Bottle = ({count}) => {
    let small = false

    if (count >= 100){
        small = true
    }

    return ( 
        <div>
            <img className={`${small ? 'small-bottle' : "bottle"}`} src={bottle} alt="" />
        </div>
    );
}
 
export default Bottle;