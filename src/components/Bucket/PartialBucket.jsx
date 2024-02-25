import emptyBucket from '../../images/empty-bucket.png'
import liquid from '../../images/bucket-water.png'

import './Bucket.css'

const PartialBucket = ({percent, count}) => {
    const fillPercent = `${100 - percent}%`
    let small = false

    if (count >= 100){
        small = true
    }

    const clipPath = `inset(${fillPercent} 0% 0% 0%)`
    return ( 
        <div className="bucket-container">
            <img className={`${small ? 'small-partial-bucket' : "partial-bucket"}`} src={emptyBucket} alt="" />
            <img style={{clipPath: clipPath}} className={`${small ? 'small-bucket-fluid' : "bucket-fluid"}`} src={liquid} alt="" />
        </div>
     );
}
 
export default PartialBucket;