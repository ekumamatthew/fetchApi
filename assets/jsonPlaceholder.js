

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {return res.json()})

.then((data) => {
    console.log(data, data)
    let user = data;
//create an empty html 
       let html = '';
// use map function to loop throuh the arrays, forEach can also be used
    data.map((user) => {
 //apend +       
        html +=`
    <div class="body_container"> 

        
            
                <img src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png" alt="avatar-image" id="avatarImage">
  
            <div class="container body_container">
            
            
                <ul>
                    <li >Name: ${user.name}</li>
                    <li >Phone no: ${user.phone}</li>
                    <li >Email: ${user.email}</li>
                    <li >Address: ${user.address.city}</li>
                    <li >Latitude: ${user.address.geo.lat}</li>
                    <li >Longitude: ${user.address.geo.lng}</li>
                    <li >Company Name: ${user.company.name}</li>
            
                </ul>
            
            </div>
        
        
        
        
    </div>


        `;
    

    });

  // display to the browser  
    document.getElementById('body_container').innerHTML = html
       
});












 