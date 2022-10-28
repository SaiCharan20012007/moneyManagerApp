import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transationsList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  changeAmount = event => this.setState({amount: event.target.value})

  changeTitle = event => this.setState({title: event.target.value})

  onSelectOption = event => this.setState({type: event.target.value})

  addNewTransation = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const newTransation = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      transationsList: [...prevState.transationsList, newTransation],
    }))

    this.setState({title: ''})

    this.setState({amount: ''})

    this.setState({type: transactionTypeOptions[0].optionId})
  }

  deleteTransation = id => {
    const {transationsList} = this.state

    const filteredList = transationsList.filter(each => each.id !== id)

    this.setState({transationsList: filteredList})
  }

  incomeAmount = () => {
    const {transationsList} = this.state
    let ia = 0
    transationsList.forEach(e => {
      if (e.type === 'Income') {
        ia += e.amount
      }
    })
    return ia
  }

  expensesAmount = () => {
    const {transationsList} = this.state
    let ea = 0
    transationsList.forEach(e => {
      if (e.type === 'Expenses') {
        ea += e.amount
      }
    })
    return ea
  }

  render() {
    const {transationsList, title, amount, type} = this.state
    const incomeA = parseInt(this.incomeAmount())
    const expensesA = parseInt(this.expensesAmount())
    const total = parseInt(incomeA - expensesA)

    console.log(transationsList)
    return (
      <div className="bg-container">
        <div className="profile-card">
          <h1 className="profile-name">Hi, Sai Charan</h1>
          <p className="profile-description">
            Welcome back to your
            <span className="span-element"> Money Manager</span>
          </p>
        </div>
        <ul className="money-details">
          <MoneyDetails
            styles="list-container1"
            imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            key="sample1"
            bal={total}
            des="Your Balance"
            test="balanceAmount"
          />
          <MoneyDetails
            styles="list-container2"
            imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            key="sample2"
            bal={incomeA}
            des="Your Income"
            test="incomeAmount"
          />
          <MoneyDetails
            styles="list-container3"
            imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            key="sample3"
            bal={expensesA}
            des="Your Expenses"
            test="expensesAmount"
          />
        </ul>
        <div className="bottom-container">
          <div className="bottom-left-container">
            <form onSubmit={this.addNewTransation}>
              <h1 className="form-title">Add Transaction</h1>
              <label htmlFor="transationtitle">TITLE</label>
              <input
                type="text"
                id="transationtitle"
                placeholder="TITLE"
                onChange={this.changeTitle}
                value={title}
              />
              <label htmlFor="transationamount">AMOUNT</label>
              <input
                type="text"
                id="transationamount"
                placeholder="AMOUNT"
                onChange={this.changeAmount}
                value={amount}
              />
              <label htmlFor="formselection">TYPE</label>
              <select
                onChange={this.onSelectOption}
                id="formselection"
                value={type}
              >
                {transactionTypeOptions.map(each => (
                  <option
                    key={each.optionId}
                    className="option-styles"
                    value={each.optionId}
                  >
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-transation-btn">
                Add
              </button>
            </form>
          </div>
          <div className="bottom-right-container">
            <h1 className="form-title">History</h1>
            <div className="history-list">
              <li className="list-container">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p>Delete</p>
              </li>
              <ul className="unorderdList">
                {transationsList.map(each => (
                  <TransactionItem
                    title={each.title}
                    amount={each.amount}
                    type={each.type}
                    key={each.id}
                    id={each.id}
                    deleteT={this.deleteTransation}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
