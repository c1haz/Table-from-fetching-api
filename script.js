    let usersData = []; 

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            usersData = data; 
            renderTable(data); 
        })
        .catch(error => console.error('Error fetching data:', error));


    function renderTable(data) {
        const tableBody = document.getElementById('userTableBody');
        tableBody.innerHTML = ''; 
        data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
                <td>${user.company.name}</td>
                <td>Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</td>
            `;
            tableBody.appendChild(row); 
        });
    }

// Sort and render the table
let sortDirection = 1; // 1 artan
function sortTable(column) {
    let sortedData;
    if (column === 'id') {
        sortedData = [...usersData].sort((a, b) => (a.id - b.id) * sortDirection);
    } else if (column === 'phone') {
        sortedData = [...usersData].sort((a, b) => (a.phone.replace(/\D/g, '') - b.phone.replace(/\D/g, '')) * sortDirection);
    } else if (column === 'address') {
        sortedData = [...usersData].sort((a, b) => a.address.street.localeCompare(b.address.street) * sortDirection);
    } else if (column === 'company') {
        sortedData = [...usersData].sort((a, b) => a.company.name.localeCompare(b.company.name) * sortDirection);
    } else if (column === 'geo') {
        sortedData = [...usersData].sort((a, b) => a.address.geo.lat.localeCompare(b.address.geo.lat) * sortDirection);
    } else {
        sortedData = [...usersData].sort((a, b) => a[column].toString().localeCompare(b[column].toString()) * sortDirection);
    }
    renderTable(sortedData); // Re-render table with sorted data
    sortDirection *= -1; // -1 azalan
}