$(document).ready(function () {
            function pulse(element) {
                element.animate({ scale: '1.05' }, 500, function () {
                    element.animate({ scale: '1' }, 500, function () {
                        pulse(element);
                    });
                });
            }
            $("#appointmentForm").submit(function (event) {
                event.preventDefault(); 
                // Perform any additional validation if needed

                // Show alert on successful submission
                showAlert("Form submitted successfully!");
            
            });

            // Function to show an alert
            function showAlert(message) {
                if(!alert(message)){window.location.reload();}
            }
    
            pulse($("#request"));
            $("#heading1").addClass("text-center");

});

    