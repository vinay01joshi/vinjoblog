document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("newsletter-form");
  var status = document.getElementById("newsletter-status");

  if (form) {
    form.addEventListener("submit", async function(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      var button = document.getElementById("newsletter-btn");
      var originalButtonText = button.innerHTML;
      
      button.innerHTML = "Joining...";
      button.disabled = true;
      status.style.display = "none";

      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for subscribing!";
          status.style.color = "green";
          status.style.display = "block";
          form.reset();
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form";
            }
            status.style.color = "red";
            status.style.display = "block";
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
        status.style.color = "red";
        status.style.display = "block";
      }).finally(() => {
        button.innerHTML = originalButtonText;
        button.disabled = false;
      });
    });
  }
});
