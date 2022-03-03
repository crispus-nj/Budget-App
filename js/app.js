// variables 

class Budget {
    constructor(budget){
        this.budget = Number(budget)
        this.balance = this.budget
    }
}
class Html{
    insertAmount(amount){
        budgetTotal.innerHTML = `${amount}`
        balance.innerHTML = `${amount}`
    }

    print_message(message, class_name){
       const message_wrapper = document.createElement('div')
        message_wrapper.classList.add('text-center', 'alert', class_name)
        message_wrapper.appendChild(document.createTextNode(message))

        document.querySelector('.primary').insertBefore(message_wrapper, addExpenseForm)


    }
}


const addExpenseForm = document.getElementById('add-expense')
const budgetTotal = document.querySelector('span#total')
const balance = document.getElementById('balance')


const html = new Html()
let budget, userBudget;


// addEventListenerFunction()

clickFunction = ()=>{

    document.addEventListener('DOMContentLoaded', () => {
        userBudget = prompt('What is your monthly budget: \n')
        // console.log(userBudget)
        if (userBudget === null || userBudget === '' || userBudget === '0'){
            window.location.reload()
        } else {
            // instatiate class Budget
            budget = new Budget(userBudget)
            html.insertAmount(budget.budget)
        }
    })

    addExpenseForm.addEventListener('submit', (e)=> {
        e.preventDefault()
        const expense = document.getElementById('expense')
        const totalAmount = document.getElementById('amount')
        const expense_name = expense.value
        const amount = totalAmount.value
        if (expense_name === '' || amount === ''){
            html.print_message('Error occured! All fields are mandatory!', 'alert-danger')
        } else {
            console.log("Valid details")
            console.log(expense_name, amount)
        }
    })
}

clickFunction()
