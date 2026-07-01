emailjs.init("bUHyqxHb2UokzCTO3");

document.getElementById("contact-form").addEventListener("submit", function (e) {

  e.preventDefault();

  emailjs.sendForm(
    "service_wd4gb4j",
    "template_ci4aq1e",
    this
  )
  .then(function () {
    alert("Message sent successfully!");
    document.getElementById("contact-form").reset();
  })
  .catch(function (error) {
    alert("Failed to send message!");
    console.log(error);
  });

});