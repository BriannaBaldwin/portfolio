'use strict';
/* Original Author: Brianna Baldwin
 Date Created: 05/04/2021
 Date Last Modified: 10/27/2021
 Modified by: Brianna Baldwin
 Modification log:
    05/04/2021 - Created file | Close navbar on click  | Smooth scrolling from W3 | included Chart.js
    10/27/2021 - Edited graph to show PHP/SQL | Added form validation */

/* Collapse navbar when link is clicked */
$('.nav-link').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

/* Smooth Scrolling from W3 Schools. Added delay to give navbar time to collapse */
$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, "swing", function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
}, 3000);



/* Chart js setup */
const labels = [
    'HTML',
    'CSS',
    'JavaScript',
    'Vue',
    'C#',
    'SQL/PHP'
];
const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: [
            '#ffadad',
            '#ffd6a5',
            '#fdffb6',
            '#caffbf',
            '#9bf6ff',
            '#bdb2ff'
        ],
        borderColor: 'rgba(23, 23, 23, .8)',
        data: [24, 25, 15, 10, 10, 15],
    }]
};
/* Chart js config */
const config = {
    type: 'doughnut',
    data: data,
    options: {
        layout: {
            padding: 10
        },
        devicePixelRatio: 2,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Languages Learned',
                font: {
                    size: 28,
                    family: 'Montserrat',
                    weight: '200'
                },
                color: '#171717'
            },
            legend: {
                labels: {
                    font: {
                        size: 18,
                        family: 'Montserrat',
                        weight: '100'
                    },
                    color: '#171717'
                }
            }
        }
    },
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);

AOS.init();


/*Validate form*/
$(document).ready(function() {
    $("#send").click(evt => {
        let isValid = true;
        const contactEntered = "Your form has been submitted";

        // validate name
        const name = $("#name").val().trim();
        if (name == null || name == "") {
            $("#error-msg").text("Name is required.");
            isValid = false;
        } else {
            console.log(name);
            // validate email address
            const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            const email = $("#email").val().trim();
            if (email == null || email == "") {
                $("#error-msg").text("Email is required.");
                isValid = false;
            } else if (!emailPattern.test(email)) {
                $("#error-msg").text("Must be a valid email address.");
                isValid = false;
            } else {
                console.log(email);
                // validate comments
                const commentsBox = $("#message").val().trim();
                if (commentsBox == null || commentsBox == "") {
                    $("#error-msg").text("Message is required.");
                    isValid = false;
                } else {
                    console.log(commentsBox);
                    $("#comments").text("");
                }
                // prevent the default action of submitting the form if any entries are invalid 
                if (isValid == false) {
                    evt.preventDefault();
                } else {
                    alert(contactEntered);
                    $("#error-msg").text("");
                    $("#contact-form").submit();
                }
            }
            // $("#contact-form").reset();
        }
    });
});