$(document).ready(function () {
    // Initialize Select2
    $(".select2").select2({});
    $(".skill-category").select2({
        placeholder: 'Select a category',
        allowClear: true
    });
    $(".sub-skills").select2({});
    $(".languages").select2({
        placeholder: 'Select languages...',
        allowClear: true
    });

    // Fetch divisions data from the API
    $.ajax({
        url: "https://bdapis.com/api/v1.2/divisions",
        method: 'GET',
        success: function (response) {
            const divisions = response.data.map((division) => ({
                id: division.division.toLowerCase(),
                text: division.division,
            }));
            $('#division').select2({
                data: [{ id: "", text: "Select a division..." }].concat(divisions),
            });
        },
        error: function () {
            alert("Failed to load divisions.");
        },
    });

    // Load Districts based on Division
    $('#division').on("change", function () {
        const division = $(this).val(); // Get selected division

        // Reset district dropdown
        $('#district').val(null)
            .html('<option value="">Select a district...</option>')
            .prop('disabled', true)
            .trigger('change');

        if (division) {
            $.ajax({
                url: `https://bdapis.com/api/v1.2/division/${division}`,
                method: 'GET',
                success: function (response) {
                    if (response && response.data) {
                        const districts = response.data.map((district) => ({
                            id: district.district.toLowerCase(),
                            text: district.district,
                        }));

                        // Populate district dropdown
                        $('#district')
                            .prop('disabled', false)
                            .select2({
                                data: [{ id: '', text: 'Select a district...' }].concat(districts),
                            });
                    } else {
                        console.error('No districts data found in the response.');
                    }
                },
                error: function () {
                    alert('Failed to load districts.');
                },
            });
        }
    });

    // Add new row for Education
    $(document).on('click', '.add-education', function () {
        let newRow = `
        <tr>
            <td><input type="text" class="form-control" name="qualification[]" required></td>
            <td><input type="text" class="form-control" name="institute[]" required></td>
            <td><input type="text" class="form-control" name="graduation-year[]" required></td>
            <td style="width: 20px">
                <i class="fas fa-trash-alt text-danger remove-education" style="cursor: pointer"></i>
            </td>
        </tr>`;
        $('#education-table').append(newRow);
    });

    // Remove row from Education
    $(document).on('click', '.remove-education', function () {
        $(this).closest('tr').remove();
    });

    // Define sub-skills data
    const subSkillsData = {
        'Front-end': ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue.js', 'Bootstrap', 'Tailwind CSS'],
        'Back-end': ['Node.js', 'Express.js', 'PHP', 'Django', 'Flask', 'Laravel'],
        'Programming Languages': ['Python', 'Java', 'C++', 'C#', 'Ruby', 'R', 'Swift', 'Kotlin'],
        'Database': ['MySQL', 'MongoDB', 'PostgreSQL', 'Oracle', 'SQLite'],
    };

    // Update sub-skills based on selected skill category
    $('#skill-category').on('change', function () {
        const selectedCategories = $(this).val(); // Get selected skill categories
        const subSkillsSelect = $('#sub-skills');

        // Clear existing options
        subSkillsSelect.empty();

        // Populate sub-skills based on selected skill categories
        if (selectedCategories && selectedCategories.length > 0) {
            selectedCategories.forEach(function (category) {
                if (subSkillsData[category]) {
                    subSkillsData[category].forEach(function (subSkill) {
                        subSkillsSelect.append('<option value="' + subSkill + '">' + subSkill + '</option>');
                    });
                }
            });
        }

        // Refresh the Select2 dropdown
        subSkillsSelect.select2({
            placeholder: 'Select sub-skills...',
            allowClear: true
        });
    });

    // Add new row for work experience
    $(document).on('click', '.add-work-experience', function () {
        let newRow = `
        <tr>
            <td><input type="text" class="form-control" name="job-title[]" required></td>
            <td><input type="text" class="form-control" name="company[]" required></td>
            <td><input type="text" class="form-control" name="duration[]" required></td>
            <td style="width: 20px">
                <i class="fas fa-trash-alt text-danger remove-work-experience" style="cursor: pointer"></i>
            </td>
        </tr>`;
        $('#work-experience-table').append(newRow);
    });

    // Remove row from work experience
    $(document).on('click', '.remove-work-experience', function () {
        $(this).closest('tr').remove();
    });

});