const ExpenseForm = document.getElementById('Expenseform');
const ExpenseList = document.getElementById('ExpenseList');

ExpenseForm.addEventListener('submit',function(event){
    event.preventDefault();

    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;
    let amount = document.getElementById('amount').value;

    if (description && category && !isNaN(amount)) {
        const newRow = document.createElement('tr')

        newRow.innerHTML = `<td>${description}</td> <td>${category}</td> <td>${amount}</td>`;

        ExpenseList.appendChild(newRow);

        document.getElementById('description').value="";
        document.getElementById('category').value="";
        document.getElementById('amount').value="";

    }
    
    let remove=document.getElementById('erase').addEventListener('click',function(e){
        ExpenseList.innerHTML="";
        
        
    })
})