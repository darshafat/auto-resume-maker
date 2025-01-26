document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("resumeForm").addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let experience = document.getElementById("experience").value;
        let education = document.getElementById("education").value;
        let skills = document.getElementById("skills").value;

        // Create the resume preview
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
        document.getElementById("resumeContent").innerHTML = resumeContent;
        document.getElementById("resumePreview").style.display = "block";
        document.getElementById("downloadBtn").style.display = "inline-block";
    });

    document.getElementById("downloadBtn").addEventListener("click", function () {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Get the content for the PDF
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let experience = document.getElementById("experience").value;
        let education = document.getElementById("education").value;
        let skills = document.getElementById("skills").value;

        // Format the content for the PDF
        doc.setFont("helvetica", "normal");
        doc.setFontSize(14);
        doc.text(`Name: ${name}`, 10, 10);
        doc.text(`Email: ${email}`, 10, 20);
        doc.text(`Phone: ${phone}`, 10, 30);

        doc.setFontSize(12);
        doc.text("Experience:", 10, 40);
        doc.text(experience, 10, 50, { maxWidth: 180 });

        doc.text("Education:", 10, 70);
        doc.text(education, 10, 80, { maxWidth: 180 });

        doc.text("Skills:", 10, 100);
        doc.text(skills, 10, 110, { maxWidth: 180 });

        // Save the PDF with the name 'resume.pdf'
        doc.save("resume.pdf");
    });
});
