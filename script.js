(function () {
    emailjs.init("saojtfUM4ZiTSY864");
    console.log("EmailJS initialized");
  })();
  
  document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Form submitted");
      let spinner = document.querySelector(".spinner-border.text-dark.mt-3")
      let success = document.querySelector(".alert.alert-success")
      spinner.style.display = "block"
  
      emailjs.sendForm("service_uvm2rha", "template_yh59jr8", this).then(
        function () {

         spinner.style.display = "none"
          console.log("Email sent successfully");
          success.style.display = "block"
        //   alert("Message Sent Successfully!");
          setTimeout(()=>{
            success.style.display = "none"
          },5000)

        },
        function (error) {
            spinner.style.display = "block"
          console.error("Error sending email:", error);
          alert("Failed to send the message: " + JSON.stringify(error));
        }
      );
    });