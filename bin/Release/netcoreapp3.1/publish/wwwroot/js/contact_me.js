window.addEventListener("load", function () {
    function sendData() {
        var name = document.getElementById('fullname').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;

        $.ajax({
            url: "/api/email",
            type: "POST",
            data: {
                name: name,
                email: email,
                phone: phone,
                message: message
            },
            cache: false,
            success: function () {
                alert("Thank you for your message. We will be in touch soon.");
                $("#contactForm").trigger("reset");
            },
            error: function () {
                alert("Something went wrong sending the message. You can also send us an email to team@gettableservice.co.uk.");
            },
        })
    }

    // Access the form element...
    const form = document.getElementById("contactForm");

    // ...and take over its submit event.
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        sendData();
    });
});