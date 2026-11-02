
/* Shelfie image gallery */

let galleryImages = document.querySelectorAll(".responsive-image");

galleryImages.forEach(function(image) {
    image.style.cursor = "pointer";

    image.addEventListener("click", function() {
        let lightbox = document.createElement("div");
        let largeImage = document.createElement("img");
        let closeButton = document.createElement("button");

        lightbox.id = "lightbox";
        largeImage.src = image.src;
        largeImage.alt = image.alt;
        closeButton.textContent = "Close X";

        closeButton.addEventListener("click", function() {
            lightbox.remove();
        });

        lightbox.addEventListener("click", function(event) {
            if (event.target === lightbox) {
                lightbox.remove();
            }
        });

        lightbox.appendChild(closeButton);
        lightbox.appendChild(largeImage);
        document.body.appendChild(lightbox);
    });
});

// Shelfie enquiry form

let enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let customerName = document.getElementById("customerName").value;
        let enquiryType = document.getElementById("enquiryType").value;
        let response = document.getElementById("enquiryResponse");

        if (customerName.trim() === "") {
            response.textContent = "Please enter your name.";
            return;
        }

        if (enquiryType === "") {
            response.textContent = "Please choose an enquiry type.";
            return;
        }

        response.textContent =
            "Thank you, " + customerName +
            ". Your " + enquiryType.toLowerCase() +
            " enquiry has been checked. Please contact Shelfie directly " +
            "to confirm availability, prices and the next steps.";

        enquiryForm.reset();
    });
}


/* Shelfie contact form */

let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("contactName").value.trim();
        let email = document.getElementById("contactEmail").value.trim();
        let type = document.getElementById("messageType").value;
        let message = document.getElementById("contactMessage").value.trim();
        let response = document.getElementById("contactResponse");

        if (name === "" || email === "" || type === "" || message === "") {
            response.textContent = "Please complete all the fields.";
            return;
        }

        let recipient = "YOUR_EMAIL_ADDRESS_HERE";

        let subject = "Shelfie Website: " + type;

        let body =
            "Customer Name: " + name + "\n" +
            "Customer Email: " + email + "\n" +
            "Message Type: " + type + "\n\n" +
            "Message:\n" + message;

        let emailLink = "mailto:" + recipient +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        window.location.href = emailLink;

        response.textContent =
            "Your email application should open with your message ready to send.";
    });
}


/* Shelfie service search */

let serviceSearch = document.getElementById("serviceSearch");

if (serviceSearch) {
    serviceSearch.addEventListener("input", function() {
        let searchWord = serviceSearch.value.toLowerCase().trim();

        let services = document.querySelectorAll("body .info-box");
        let visibleServices = 0;

        services.forEach(function(service) {
            // Do not filter the search box itself
            if (service.querySelector("#serviceSearch")) {
                return;
            }

            let serviceText = service.textContent.toLowerCase();

            if (serviceText.includes(searchWord)) {
                service.style.display = "";
                visibleServices++;
            } else {
                service.style.display = "none";
            }
        });

        let searchMessage = document.getElementById("searchMessage");

        if (searchWord === "") {
            searchMessage.textContent = "Showing all services.";
        } else if (visibleServices === 0) {
            searchMessage.textContent = "No matching services found. Try another keyword.";
        } else {
            searchMessage.textContent =
                visibleServices + " matching service(s) found.";
        }
    });
}


/* Shelfie interactive map controls */

let pretoriaButton = document.getElementById("pretoriaMapButton");
let capeTownButton = document.getElementById("capeTownMapButton");

if (pretoriaButton) {
    pretoriaButton.addEventListener("click", function() {
        let map = document.getElementById("pretoriaMap");

        if (map) {
            map.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
}

if (capeTownButton) {
    capeTownButton.addEventListener("click", function() {
        let map = document.getElementById("capeTownMap");

        if (map) {
            map.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
}



