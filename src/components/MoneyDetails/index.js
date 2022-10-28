// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {styles, imgUrl, alt, bal, des} = props
  return (
    <div>
      <li className={styles}>
        <img src={imgUrl} alt={alt} className="money-image" />
        <div className="money-dec-container">
          <p className="money-card-des">{des}</p>
          <p className="money-viewer">{bal}</p>
        </div>
      </li>
    </div>
  )
}
export default MoneyDetails
