// Define UI Variables
const form = document.querySelector('#to-do-form')
const toDoList = document.querySelector('#to-do-ul')
const clearButton = document.querySelector('#clear-to-dos')
const filter = document.querySelector('#filter')
const toDoInput = document.querySelector('#to-do')

// Load Event Listeners
loadEventListeners()

// Load Event Listeners Function
function loadEventListeners() {
  // Add To Do Event
  form.addEventListener('submit', addToDo)

  // Remove To Do Event
  toDoList.addEventListener('click', removeToDo)

  // Clear To Dos Event
  clearButton.addEventListener('click', clearToDos)

  // Filter To Dos Event
  filter.addEventListener('keyup', filterToDos)
}

// Add To Do Function
function addToDo(event) {
  event.preventDefault()

  if(toDoInput.value === '') {
      alert('You must enter a to do')
  } else {
    // Create li element
    const li = document.createElement('li')
    // Add class
    li.className = "list-group-item d-flex align-items-center"

    // Create checkbox input
    const checkBox = document.createElement('input')
    // Add class to checkBox
    checkBox.className = ""
    // Make input a checkbox
    checkBox.setAttribute("type", "checkbox")
    // Append checkbox to li
    li.appendChild(checkBox)

    // Create div for li text
    const text = document.createElement('div')
    // Add class to text div
    text.className = "ml-3"
    // Set text div's id
    text.setAttribute("id", "to-do-text")
    // Create a text node and append it to text div
    text.appendChild(document.createTextNode(toDoInput.value))
    // Append text div to li
    li.appendChild(text)

    // Create new link element
    const link = document.createElement('a')
    // Add class
    link.className = "badge delete-to-do ml-auto"
    // Add icon HTML
    link.innerHTML = '<i class="fa fa-remove fa-2x"></i>'
    // Append link to li
    li.appendChild(link)

    // Append li to ul
    toDoList.appendChild(li)

    // Clear input
    toDoInput.value = ""
  }
}

// Remove To Do Function
function removeToDo(event) {
  // Check to see if the element being clicked is the delete icon
  if (event.target.parentElement.classList.contains('delete-to-do')) {
    event.preventDefault()
    // Confirm window pop-up before deleting
    if (confirm("Are you sure?")) {
      // Remove the To Do li, which is the parent of the <a> tag which is the parent of the <i> delete icon
      event.target.parentElement.parentElement.remove()
    }
  }
}

// Clear To Dos Function
function clearToDos() {
  toDoList.innerHTML = ''

  // Confirm window pop-up before deleting
  if (confirm("Are you sure?")) {
    // Clear all HTML from To Do List
    toDoList.innerHTML = ''
  }
}

// Filter To Dos Function
function filterToDos(event) {
  // Capture text from the filter input
  const text = event.target.value.toLowerCase()

  // Loop through each To Do in the list
  document.querySelectorAll('.list-group-item').forEach(function(toDo) {
    // Capture the text of the To Do list group item
    const item = toDo.children[1].textContent
    
    // If the To Do list group item does not contain the filter text, .indexOf() will return -1
    if(item.toLowerCase().indexOf(text) !== -1) {
      // Remove display none and add display flex to make the To Do show up
      toDo.classList.remove('d-none')
      toDo.classList.add('d-flex')
    } else {
      // Remove display flex and add display none to make the To Do be hidden
      toDo.classList.remove('d-flex')
      toDo.classList.add('d-none')
    }
  })
}
