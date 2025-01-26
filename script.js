document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("resumeForm").addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input values
        let name = document.getElementById("name").value;
        let fatherName = document.getElementById("fatherName").value;
        let dob = document.getElementById("dob").value;
        let address = document.getElementById("address").value;
        let maritalStatus = document.getElementById("maritalStatus").value;
        let languages = document.getElementById("languages").value;
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
            <p><strong>Marital Status:</strong> ${maritalStatus}</p>
            <p><strong>Languages Known:</strong> ${languages}</p>
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

        // Add the resume content to the PDF
        let name = document.getElementById("name").value;
        let fatherName = document.getElementById("fatherName").value;
        let dob = document.getElementById("dob").value;
        let address = document.getElementById("address").value;
        let maritalStatus = document.getElementById("maritalStatus").value;
        let languages = document.getElementById("languages").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let experience = document.getElementById("experience").value;
        let education = document.getElementById("education").value;
        let skills = document.getElementById("skills").value;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.text("Resume", 105, 20, { align: "center" });

        doc.setFontSize(14);
        doc.text("Name:", 10, 40);
        doc.setFont("helvetica", "normal");
        doc.text(name, 50, 40);

        doc.setFont("helvetica", "bold");
        doc.text("Father's Name:", 10, 50);
        doc.setFont("helvetica", "normal");
        doc.text(fatherName, 50, 50);

        doc.setFont("helvetica", "bold");
        doc.text("Date of Birth:", 10, 60);
        doc.setFont("helvetica", "normal");
        doc.text(dob, 50, 60);

        doc.setFont("helvetica", "bold");
        doc.text("Address:", 10, 70);
        doc.setFont("helvetica", "normal");
        doc.text(address, 50, 70, { maxWidth: 140 });

        doc.setFont("helvetica", "bold");
        doc.text("Marital Status:", 10, 90);
        doc.setFont("helvetica", "normal");
        doc.text(maritalStatus, 50, 90);

        doc.setFont("helvetica", "bold");
        doc.text("Languages Known:", 10, 100);
        doc.setFont("helvetica", "normal");
        doc.text(languages, 50, 100, { maxWidth: 140 });

        doc.setFont("helvetica", "bold");
        doc.text("Email:", 10, 120);
        doc.setFont("helvetica", "normal");
        doc.text(email, 50, 120);

        doc.setFont("helvetica", "bold");
        doc.text("Phone:", 10, 130);
        doc.setFont("helvetica", "normal");
        doc.text(phone, 50, 130);

        doc.setFont("helvetica", "bold");
        doc.text("Experience:", 10, 150);
        doc.setFont("helvetica", "normal");
        doc.text(experience, 10, 160, { maxWidth: 190 });

        doc.setFont("helvetica", "bold");
        doc.text("Education:", 10, 180);
        doc.setFont("helvetica", "normal");
        doc.text(education, 10, 190, { maxWidth: 190 });

        doc.setFont("helvetica", "bold");
        doc.text("Skills:", 10, 210);
        doc.setFont("helvetica", "normal");
        doc.text(skills, 10, 220, { maxWidth: 190 });

        doc.save("resume.pdf");
    });
});
