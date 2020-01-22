// Define UI Variables
const form = document.querySelector('#to-do-form')
const toDoList = document.querySelector('#to-do-ul')
const confirmButton = document.querySelector('#confirm')
const filter = document.querySelector('#filter')
const toDoInput = document.querySelector('#to-do')
const confirmationModal = $('#confirmationModal')

// Load Event Listeners
loadEventListeners()

// Set Filter Visibility
setFilterVisibility()

// Load Event Listeners Function
function loadEventListeners() {
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', getToDos)

  // Add To Do Event
  form.addEventListener('submit', addToDo)

  // Click To Do Event
  toDoList.addEventListener('click', clickToDo)

  // Clear All To Dos Event
  confirmButton.addEventListener('click', clearToDos)

  // Filter To Dos Event
  filter.addEventListener('keyup', filterToDos)
}

// Get ToDos from Local Storage
function getToDos() {
  let toDos

  // Check if localStorage contains any data
  if(localStorage.getItem('toDos') === null) {
    toDos = []
  } else {
    // If so, set toDos equal to the data parsed into a JSON object
    toDos = JSON.parse(localStorage.getItem('toDos'))
  }

  // Iterate through the JSON object and add each element (to do) to the DOM
  toDos.forEach(function(toDo) {
    // Create li element
    const li = document.createElement('li')
    // Add class
    li.className = "d-flex align-items-center to-do-li"

    // Create an HTML doc from To Do string retrieved from localStorage
    const doc = new DOMParser().parseFromString(toDo, "text/html")
    // Select the To Do div from the doc
    const toDoDiv = doc.querySelector(".ml-3")
    // Append the div to the li
    li.appendChild(toDoDiv)

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
  })
}

// Add To Do Function
function addToDo(event) {
  event.preventDefault()

  if(toDoInput.value === '') {
    // Add invalid class for bootstrap invalid-feedback
    if(!toDoInput.className.includes('is-invalid')) {
      toDoInput.classList += " is-invalid"
    }
  } else {
    // Reset input class
    toDoInput.className = "form-control"
    // Create li element
    const li = document.createElement('li')
    // Add class
    li.className = "d-flex align-items-center to-do-li"

    // Create div for li text
    const text = document.createElement('div')
    // Add class to text div
    text.className = "ml-3 no-line to-do-text"

    // Set text div's id
    // text.setAttribute("id", length + 1)

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

    // Store in Local Storage
    storeToDoInLocalStorage(text)

    // Clear input
    toDoInput.value = ""
  }

  if (JSON.parse(localStorage.getItem('toDos')).length >= 2) {
    filter.style.display = '';
  }
}

// Store To Do Function
function storeToDoInLocalStorage(toDo) {
  let toDos

  // Check if localStorage contains any data
  if(localStorage.getItem('toDos') === null) {
    toDos = []
  } else {
    // If so, set toDos equal to the data parsed into a JSON object
    toDos = JSON.parse(localStorage.getItem('toDos'))
  }

  // Add new toDo to the object
  toDos.push(toDo.outerHTML)

  // Store the object with the new toDo back into local storage as a string
  localStorage.setItem('toDos', JSON.stringify(toDos))
}

// Click To Do Function
function clickToDo(event) {
  // Check to see if the element being clicked is the delete icon
  if (event.target.parentElement.classList.contains('delete-to-do')) {
    event.preventDefault()

    // Remove the To Do li, which is the parent of the <a> tag which is the parent of the <i> delete icon
    event.target.parentElement.parentElement.remove()

    // Remove To Do from local storage
    removeToDoFromLocalStorage(event.target.parentElement.parentElement)

    // Hide filter input if To Do list length is under 2
    if (JSON.parse(localStorage.getItem('toDos')).length < 2) {
      filter.style.display = 'none';
    }

    // Check if the element being clicked is the To Do text and is currently crossed out
  } else if(event.target.classList.contains("line-through")) {
      let toDo = event.target
      // Remove the class that crosses out the To Do
      toDo.classList.remove("line-through")
      // Add class that tells us the To Do is not crossed out
      toDo.classList.add("no-line")
      // Update the To Do in local storage so it will remain not crossed out on a page refresh
      updateToDo(toDo, event.target)

    // Check if the element being clicked is the To Do text and is currently not crossed out
  } else if (event.target.classList.contains("no-line")) {
      let toDo = event.target
      // Remove the class telling us the To Do is not crossed out
      toDo.classList.remove("no-line")
      // Add class that crosses out the To Do
      toDo.classList.add("line-through")
      // Update the To Do in local storage so it will remain crossed out on a page refresh
      updateToDo(toDo, event.target)
  }
}

// Update To Do in local storage function
function updateToDo(toDo, eventTarget) {
  // Get To Dos array from local storage
  let storedToDos = JSON.parse(localStorage.getItem('toDos'))

  // Store the To Do that is going to be updated in local storage
  let toDoBeingUpdated = storedToDos.find(toDo => toDo.includes(eventTarget.innerHTML))
  // Get index of to do being updated
  let index = storedToDos.indexOf(toDoBeingUpdated)

  // Replace the To Do being updated with the new To Do - This keeps the To Dos in the same order after being updated
  if (index !== -1) {
    storedToDos[index] = toDo.outerHTML;
  }

  // Save the updated array back into local storage
  localStorage.setItem('toDos', JSON.stringify(storedToDos))
}

// Remove from local storage function
function removeToDoFromLocalStorage(toDoItem) {
  let toDos

  // Check if localStorage contains any data
  if(localStorage.getItem('toDos') === null) {
    toDos = []
  } else {
    // If so, set toDos equal to the data parsed into a JSON object
    toDos = JSON.parse(localStorage.getItem('toDos'))
  }

  // Iterate through the object and remove the toDo that matches the toDoItem passed in as an argument
  toDos.forEach(function(toDo, index) {
    if(toDo.includes(toDoItem.textContent)){
      toDos.splice(index, 1)
    }
  })

  // Store the object with the toDo removed back into local storage as a string
  localStorage.setItem('toDos', JSON.stringify(toDos))
}

// Clear To Dos Function
function clearToDos() {
  toDoList.innerHTML = ''

  // Clear all data from local storage
  localStorage.clear()

  // Hide Filter
  filter.style.display = 'none';
}

// Filter To Dos Function
function filterToDos(event) {
  // Capture text from the filter input
  const text = event.target.value.toLowerCase()

  // Loop through each To Do in the list
  document.querySelectorAll('.to-do-li').forEach(function(toDo) {
    // Capture the text of the To Do list group item
    const item = toDo.firstChild.textContent

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

// Set Filter Visibility Function
function setFilterVisibility() {
  if (JSON.parse(localStorage.getItem('toDos')) === null || JSON.parse(localStorage.getItem('toDos')).length < 2) {
    filter.style.display = 'none';
  } else {
    filter.style.display = '';
  }
}
