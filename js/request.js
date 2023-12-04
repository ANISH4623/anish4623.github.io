$(document).ready(function () {
            function pulse(element) {
                element.animate({ scale: '1.05' }, 500, function () {
                    element.animate({ scale: '1' }, 500, function () {
                        pulse(element);
                    });
                });
            }
    
            pulse($("#request"));
            $("#heading1").addClass("text-center");
        });
        function message() {
            var Name = document.getElementById("Name").value;
        }