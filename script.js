'use strict'

// Create/get needed variables
const tableBody = document.querySelector('#table tbody')
const authorInput = document.getElementById('author')
const titleInput = document.getElementById('title')
const yearInput = document.getElementById('year')
const form = document.getElementById('cdForm')

form.addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault()

    // Get the values from the input fields
    const author = authorInput.value
    const title = titleInput.value
    const year = yearInput.value

    // Create a new table row with the input values
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${author}</td>
        <td>${title}</td>
        <td>${year}</td>
        <td><button class="deleteBtn bg-c-red:+8 text-c-white px-2 rounded-sm cursor-pointer">X</button></td>
    `
    
    // Insert the new row at the top of the tableBody (tbody)
    tableBody.prepend(newRow)

    // Clear the input fields after "submitting"
    authorInput.value = ''
    titleInput.value = ''
    yearInput.value = ''

    // Delete button
    const deleteButtons = document.querySelectorAll('.deleteBtn')
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
             // Remove the row
            this.parentElement.parentElement.remove()
        })
    })
})