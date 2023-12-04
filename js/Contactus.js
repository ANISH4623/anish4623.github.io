$(document).ready(function () {
    function pulse(element) {
            element.animate({ scale: '1.05' }, 500, function () {
                element.animate({ scale: '1' }, 500, function () {
                    pulse(element);
                });
            });
        };
        $("#contactForm").submit(function (event) {
            event.preventDefault(); 

            // Show alert on successful submission
            showAlert("We will get back to you soon.");
        });

        // Function to show an alert 
        function showAlert(message) {
            if(!alert(message)){window.location.reload();}
        }
      pulse($("#request"));
    });