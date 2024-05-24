function sendEmail(){
  Email.send({
      SecureToken: "#",
      To : 'email',
      From : document.getElementById("email").value,
      Subject : "New message from Memory",
      Body : "Name: " + document.getElementById("name").value
              + "<br> Email: " + document.getElementById("email").value
              + "<br> Message: " + document.getElementById("messsage").value
  }).then(
    message => alert("Message sent sucessfully")
  );
}