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

        setTimeout(()=> {
            document.querySelector('.primary .alert').remove()
            addExpenseForm.reset()
        }, 2000)
    }
    add_expense_to_the_list(name, amount){
        const expense_list = document.querySelector('#expenses ul')

        const li = document.createElement('li')
        li.className = 'list-group-item d-flex justify-content-center align-items-center'

        li.innerHTML = `
        <span class='mr-5'>${name}</span> 
            <span class='badge badge-primary badge-pill ml-5'>$ ${amount}</span>
        `
        expense_list.appendChild(li)
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
        userBudget = prompt('What is your weekly budget: \n')
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
            html.add_expense_to_the_list(expense_name, amount)
        }
    })
}

clickFunction()
