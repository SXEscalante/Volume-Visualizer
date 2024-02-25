import bucket from '../../images/full-bucket.png'

import './Bucket.css'

const Bucket = ({count}) => {
    let small = false

    if (count >= 100){
        small = true
    }

    return ( 
        <div>
            <img className={`${small ? 'small-bucket' : "bucket"}`} src={bucket} alt="" />
        </div>
    );
}
 
export default Bucket;