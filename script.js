document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resumeForm');
    const preview = document.getElementById('preview');
    const downloadBtn = document.getElementById('download-btn');
    const updatePreviewBtn = document.getElementById('update-preview-btn');
    const addExperienceBtn = document.getElementById('add-experience-btn');
    const experienceContainer = document.getElementById('experience-forms');


    updatePreviewBtn.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const skillsInput = document.getElementById('skills');

        //Split skills by commas and trim whitespace
        const skills = skillsInput.value.split(',').map(skill => skill.trim()).filter(skill => skill !== '');


        let experienceHTML = '';

        // Loop through all dynamically created experience forms
        document.querySelectorAll('.dynamic-experience-form').forEach(form => {
            const title = form.querySelector('[name="title"]').value;
            const organization = form.querySelector('[name="organization"]').value;
            const dates = form.querySelector('[name="dates"]').value;
            const description = form.querySelector('[name="description"]').value;

            experienceHTML += `
            <p>
                ${title}<br>
                ${organization}<br>
                ${dates}<br>
                ${description}
            </p>
        `;
        });

        // Create skills list
        const skillsList = skills.map(skill => `<li>${skill}</li>`).join('');

        const previewHTML = `
        <div class="center-align">
            <h2>${name}</h2>
            <p>Email: ${email}</p>
        </div>
        <div class="left-align">
            <h3>Experiences: </h3>
            ${experienceHTML}
            <h3>Skills: </h3>
            <ul>${skillsList}</ul>
        </div>
    `;

        preview.innerHTML = previewHTML;
    });

    addExperienceBtn.addEventListener('click', function () {
        const newExperienceForm = document.createElement('div');
        newExperienceForm.classList.add('experience-form', 'dynamic-experience-form');

        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.placeholder = 'Title of Job';
        titleInput.name = 'title';
        newExperienceForm.appendChild(titleInput);

        const organizationInput = document.createElement('input');
        organizationInput.type = 'text';
        organizationInput.placeholder = 'Organization Name';
        organizationInput.name = 'organization';
        newExperienceForm.appendChild(organizationInput);

        const datesInput = document.createElement('input');
        datesInput.type = 'text';
        datesInput.placeholder = 'Dates Worked';
        datesInput.name = 'dates';
        newExperienceForm.appendChild(datesInput);

        const descriptionTextarea = document.createElement('textarea');
        descriptionTextarea.placeholder = 'Short Description';
        descriptionTextarea.name = 'description';
        newExperienceForm.appendChild(descriptionTextarea);

        experienceContainer.appendChild(newExperienceForm);
    });

    downloadBtn.addEventListener('click', function () {
        // Implement resume download functionality (e.g., create a PDF)
        alert('Download functionality not implemented in this example.');
    });
});
