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
        const phone = document.getElementById('phone').value;
        const skillsInput = document.getElementById('skills');

        //Split skills by commas and trim whitespace
        const skills = skillsInput.value.split(',').map(skill => skill.trim()).filter(skill => skill !== '');


        let experienceHTML = '';

        // Loop through all dynamically created experience forms
        document.querySelectorAll('.dynamic-experience-form').forEach(form => {
            const title = form.querySelector('[name="title"]').value;
            const organization = form.querySelector('[name="organization"]').value;
            const startDate = form.querySelector('[name="startDate"]').value;
            const endDate = form.querySelector('[name="endDate"]').value;
            const description = form.querySelector('[name="description"]').value;

            experienceHTML += `
                <b> ${title}, </b> 
                <i> ${organization} </i>
                <p>${startDate} to ${endDate}<br>
                ${description}
            </p>
        `;

        });

        // Create skills list
        const skillsList = skills.map(skill => `<li>${skill}</li>`).join('');

        const previewHTML = `
        <div class="center-align">
            <h1>${name}</h1>
            <p>${email} | ${phone}</p>
        </div>
        <div class="left-align">
            <h2>Work Experience: </h2>
            ${experienceHTML}
            <h2>Skills: </h2>
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
        titleInput.placeholder = 'Job title';
        titleInput.name = 'title';
        newExperienceForm.appendChild(titleInput);

        const organizationInput = document.createElement('input');
        organizationInput.type = 'text';
        organizationInput.placeholder = 'Company/Organization';
        organizationInput.name = 'organization';
        newExperienceForm.appendChild(organizationInput);

        const dateRangeContainer = document.createElement('div');

        const startDateInput = document.createElement('input');
        startDateInput.type = 'text';
        startDateInput.placeholder = 'Start date';
        startDateInput.name = 'startDate';
        dateRangeContainer.appendChild(startDateInput);

        const endDateInput = document.createElement('input');
        endDateInput.type = 'text';
        endDateInput.placeholder = 'End date';
        endDateInput.name = 'endDate';
        dateRangeContainer.appendChild(endDateInput);

        newExperienceForm.appendChild(dateRangeContainer);

        // Initialize Flatpickr inside the dynamic form
        flatpickr(startDateInput, {
            mode: 'single',
            dateFormat: 'Y-m-d',
            enableTime: false,
        });

        flatpickr(endDateInput, {
            mode: 'single',
            dateFormat: 'Y-m-d',
            enableTime: false,
        });


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