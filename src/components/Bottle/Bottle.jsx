import bottle from "../../images/full-bottle.png"

import "./Bottle.css"

const Bottle = ({}) => {
    return ( 
        <div>
            <img className="bottle" src={bottle} alt="" />
        </div>
    );
}
 
export default Bottle;