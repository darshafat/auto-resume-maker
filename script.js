document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("resumeForm").addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input values
        let name = document.getElementById("name").value;
        let fatherName = document.getElementById("fatherName").value;
        let dob = document.getElementById("dob").value;
        let address = document.getElementById("address").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let experience = document.getElementById("experience").value;
        let education = document.getElementById("education").value;
        let skills = document.getElementById("skills").value;

        // Create the resume preview
        let resumeContent = `
            <h3>${name}</h3>
            <p><strong>Father's Name:</strong> ${fatherName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
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

        // Add styling and format the PDF content
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.text("Resume", 105, 20, { align: "center" });

        // Add name
        doc.setFontSize(14);
        doc.text("Name:", 10, 40);
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById("name").value, 50, 40);

        // Add father's name
        doc.setFont("helvetica", "bold");
        doc.text("Father's Name:", 10, 50);
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById("fatherName").value, 50, 50);

        // Add date of birth
        doc.setFont("helvetica", "bold");
        doc.text("Date of Birth:", 10, 60);
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById("dob").value, 50, 60);

        // Add address
        doc.setFont("helvetica", "bold");
        doc.text("Address:", 10, 70);
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById("address").value, 50, 70, { maxWidth: 140 });

        // Add email and phone
        doc.setFont("helvetica", "bold");
        doc.text("Email:", 10, 90);
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById("email").value, 50, 90);

        doc.setFont("helvetica", "bold");
        doc.text("Phone:", 10, 100);
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById("phone").value, 50, 100);

        // Add experience, education, and skills
        doc.setFont("helvetica", "bold");
        doc.text("Experience:", 10, 120);
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById("experience").value, 10, 130, { maxWidth: 190 });

        doc.setFont("helvetica", "bold");
        doc.text("Education:", 10, 150);
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById("education").value, 10, 160, { maxWidth: 190 });

        doc.setFont("helvetica", "bold");
        doc.text("Skills:", 10, 180);
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById("skills").value, 10, 190, { maxWidth: 190 });

        // Save the PDF with a name
        doc.save("resume.pdf");
    });
});
