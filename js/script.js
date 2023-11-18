//display name,age,username,img,phone,email,company,address 
document.addEventListener('DOMContentLoaded', getUsers);
const listaUsuarios = document.getElementById('listaUsuarios');

function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    
    fetch(url).then(res => res.json()).then(users => {
        console.log(users);
        users.forEach(user => {
            const image = `./assets/img/${user.id}.jpeg`
            const age = Math.floor(Math.random()*100);
            const { address: {zipcode, geo, ...newAddress }, ...restOfUser} = user;
            user = {...restOfUser, image, age, address: newAddress };

            let listItem = `
            <li class='user'>
                <div class = 'user-info'>
                    <div class = 'container'>
                        <p><span>Name:</span> ${user.name}</p>
                        <p><span>Age:</span> ${user.age}</p>
                        <p><span>Username:</span> ${user.username}</p>
                        <p><span>Telephone:</span> ${user.phone}</p>
                        <p><span>Email:</span> ${user.email}</p>
                    </div>
                    <img src='${user.image}' alt='${user.id}'/>
                </div>
                <div class='other-info'>
                    <p><span>Company:</span> ${user.company.name}</p>
                    <p><span>Address:</span> ${user.address.suite}</p>
                </div>
            </li>
            `  
            listaUsuarios.innerHTML += listItem; 
            console.log(user)
        });
    });
}

