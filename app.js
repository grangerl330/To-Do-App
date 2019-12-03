// Define UI Variables
const form = document.querySelector('#to-do-form')
const toDoList = document.querySelector('#to-do-collection')
const clearButton = document.querySelector('#clear-to-dos')
const filter = document.querySelector('#filter')
const toDoInput = document.querySelector('#to-do')

// Load Event Listeners
loadEventListeners()

// Load Event Listeners Function
function loadEventListeners() {
    // Add To Do Event
    form.addEventListener('submit', addToDo)

}

// Add To Do Function
function addToDo(event) {
    event.preventDefault()

    if(toDoInput.value === '') {
        alert('You must enter a to do')
    }

    // Create li element
    const li = document.createElement('li')
    // Add class
    li.className = "list-group-item d-flex justify-content-between align-items-center"
    // Create text node and append to li
    li.appendChild(document.createTextNode(toDoInput.value))

    // Create new link element
    const link = document.createElement('a')
    // Add class
    link.className = "badge delete-to-do"
    // Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append link to li
    li.appendChild(link)

    // Append li to ul
    toDoList.appendChild(li)

    // Clear input
    toDoInput.value = ""
}
