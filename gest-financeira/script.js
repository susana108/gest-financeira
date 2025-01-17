const transactionsU1 = document.querySelector('#transactions')
const incomeDisplay = document.querySelector('money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('balance')


const dummyTransactions = [
{id: 1, name: 'Bola' , amount: -20},
{id: 2, name: 'Salário' , amount: 300},
{id: 3, name: 'laranja' , amount: -10},
{id: 4, name: 'Bola' , amount: 150}
]

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')


    li.classList.add(CSSClass)
    li.innerHTML = `
    ${transaction.name} <span>${operador} R$ ${amountWithoutOperator}</span><button class= "delete-btn">x</button>
    `
    transactionsU1.append(li)
}

const updateBalanceValues = () => {
    const transactionsAmounts = dummyTransactions
    .map(transaction => transaction.amount)
    const total = transactionsAmounts
    .reduce((accumulator, transaction) => accumulator + transaction,0)
    .toFixed(2)
    const income = transactionsAmounts
    .filter(value => value > 0)
    .reduce((accumulator,value) => accumulator = value, 0)
    .toFixed(2)
    const expense = transactionsAmounts
    .filter(value => value < 0)
    .reduce((accumulator,value) => accumulator + value, 0)
    .toFixed(2)
    
    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`
    expenseDisplay.textContent = `R$ ${expense}`

}

const int = () => {
    dummyTransactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}

init ()
addTransactionIntoDOM(dummyTransactions[0])