// variables 

const addExpenseForm = document.getElementById('add-expense')
let budget, userBudget;


// addEventListenerFunction()

clickFunction = ()=>{

    document.addEventListener('DOMContentLoaded', () => {
        userBudget = prompt('What is your monthly budget: \n')
        console.log("Content loaded!")
    })

    addExpenseForm.addEventListener('submit', (e)=> {
        e.preventDefault()
    })
}

clickFunction()