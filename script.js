fetch('data.json')
.then(response => response.json())
.then(data =>{
    const profileDiv=
    document.getElementById('profile');
    profileDiv.innerHTML=`
    <p><strong>Name:</strong>${data.name}</p>
     <p><strong>E-mail:</strong>${data.E-mail}</p>
      <p><strong>Age:</strong>${data.Age}</p>`;
})
.catch(error =>{
    console.error('Error loading JSON:',error);
});