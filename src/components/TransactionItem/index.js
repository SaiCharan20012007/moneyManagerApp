// Write your code here
import './index.css'

const TransactionItem = props => {
  const {title, amount, type, deleteT, id} = props

  const deleteItem = () => {
    deleteT(id)
  }

  return (
    <li className="transaction-list-style">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button
        type="button"
        className="deleteBtn"
        onClick={deleteItem}
        // testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="deleteIcon"
        />
      </button>
    </li>
  )
}
export default TransactionItem
