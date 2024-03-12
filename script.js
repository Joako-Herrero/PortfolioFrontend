let submitButton = document.getElementById('send_message');
submitButton.addEventListener('click', () =>{
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("message").value;

    let apiUrl = 'https://portfoliobackend-llcc.onrender.com/email/send';

    if (fullName === ""){
        fullName = "Anonymous"
    }

    let data = {
      "fullName": fullName,
      "emailAddress": email,
      "subject": subject,
      "body": body
    };
    
    console.log(data)


    fetch(apiUrl,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        // Manejar la respuesta de la API
        console.log('Thanks to contact me!');
        
      })
      .catch(error => {

        console.error('Error al realizar la solicitud:', error);

      });
   
     
    
  
});
