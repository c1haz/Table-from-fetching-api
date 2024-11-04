        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('userTableBody');
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
        })
        
