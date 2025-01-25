// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Resume form submission event
    document.getElementById("resumeForm").addEventListener("submit", function (e) {
        e.preventDefault();  // Prevent the form from submitting

        // Get the user input values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let experience = document.getElementById("experience").value;
        let education = document.getElementById("education").value;
        let skills = document.getElementById("skills").value;

        // Create the resume content
        let resumeContent = `
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h4>Experience</h4>
            <p>${experience}</p>
            <h4>Education</h4>
            <p>${education}</p>
            <h4>Skills</h4>
            <p>${skills}</p>
        `;

        // Display the resume content in the preview
        document.getElementById("resumeContent").innerHTML = resumeContent;

        // Show the resume preview section
        document.getElementById("resumePreview").style.display = "block";

        // Show the download button
        document.getElementById("downloadBtn").style.display = "inline-block";
    });

    // Function to generate PDF
    document.getElementById("downloadBtn").addEventListener("click", function () {

        // Check if jsPDF is loaded correctly
        if (typeof jsPDF === 'undefined') {
            alert("jsPDF is not loaded correctly.");
            return;
        }

        // Create a new jsPDF instance
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Capture the content of the resume (without HTML tags, using innerText)
        const resumeContent = document.getElementById("resumeContent").innerText;

        // Add content to the PDF (text format)
        doc.text(resumeContent, 10, 10);

        // Save the generated PDF
        doc.save("resume.pdf");
    });

});
