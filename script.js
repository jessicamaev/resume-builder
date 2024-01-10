document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resumeForm');
    const preview = document.getElementById('preview');
    const downloadBtn = document.getElementById('download-btn');
    const updatePreviewBtn = document.getElementById('update-preview-btn');
    const addExperienceBtn = document.getElementById('add-experience-btn');

    updatePreviewBtn.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const skills = document.getElementById('skills').value;

        let experienceHTML = '';

        // Loop through all experience textareas
        document.querySelectorAll('.experience-textarea').forEach((textarea, index) => {
            const experience = textarea.value;
            experienceHTML += `<p>${experience}</p>`;
        });

        const previewHTML = `
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <h3>Experiences: </h3>
            ${experienceHTML}
            <h3>Skills: </h3>
            <p>${skills}</p>
        `;

        preview.innerHTML = previewHTML;
    });

    addExperienceBtn.addEventListener('click', function () {
        const experienceContainer = document.getElementById('experience-container');
        const newExperienceTextarea = document.createElement('textarea');
        newExperienceTextarea.className = 'experience-textarea';
        newExperienceTextarea.name = 'experience';
        newExperienceTextarea.rows = 4;
        experienceContainer.appendChild(newExperienceTextarea);
    });

    downloadBtn.addEventListener('click', function () {
        // Implement resume download functionality (e.g., create a PDF)
        alert('Download functionality not implemented in this example.');
    });
});
