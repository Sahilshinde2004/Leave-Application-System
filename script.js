document.getElementById('leaveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const leaveType = document.getElementById('leave-type').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const reason = document.getElementById('reason').value;

    // Create a new row for the table
    const table = document.getElementById('applications');
    const newRow = table.insertRow();

    // Insert cells and values
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = email;
    newRow.insertCell(2).textContent = leaveType;
    newRow.insertCell(3).textContent = startDate;
    newRow.insertCell(4).textContent = endDate;
    newRow.insertCell(5).textContent = reason;
    newRow.insertCell(6).textContent = 'Pending';

    // Reset form
    document.getElementById('leaveForm').reset();
});