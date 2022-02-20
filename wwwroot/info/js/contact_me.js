
window.addEventListener("load", function () {
    function sendData() {
        var name = document.getElementById('fullname').value;
        var businessname = document.getElementById('businessname').value;
        var email = document.getElementById('email').value;
        var webaddress = document.getElementById('webaddress').value;
        var menufile = document.getElementById('menufile');

        var files = menufile.files;

        var data = new FormData(form);

        data.append("name", name);
        data.append("businessname", businessname);
        data.append("email", email);
        data.append("webaddress", webaddress);

        for (var i = 0; i < files.length; i++) {
            data.append("file", files[i]);
        }


        $.ajax({
            url: "/api/email",
            type: "POST",
            contentType: false,
            processData: false,
            data: data,
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