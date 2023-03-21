function sendMail(){
    var params={
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      message : document.getElementById("message").value,
    };
  
    const service_id="service_44oahtm";
    const template_id="template_ow5pzua";
  
    emailjs.send(service_id,template_id,params)
    .then((res) =>{
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("message").value="";
      console.log(res);
      alert("message sent successfully");
    })
    .catch((err) => console.log(err));
  }