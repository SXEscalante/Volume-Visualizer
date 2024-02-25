import milkJug from '../../images/full-milk-jug.png'

import './MilkJug.css'

const MilkJug = ({count}) => {
    let small = false

    if (count >= 100){
        small = true
    }

    return ( 
        <div>
            <img className={`${small ? 'small-milk-jug' : "milk-jug"}`} src={milkJug} alt="" />
        </div>
    );
}
 
export default MilkJug;