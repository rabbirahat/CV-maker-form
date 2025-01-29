# Responsive CV Maker Form with Dynamic Fields

This project is a responsive form with dynamic fields for personal information, education, skills, work experience, and languages. The form uses Select2 for enhanced select boxes and includes dynamic field addition for education and work experience sections.

## Features

- Responsive design
- Dynamic field addition for education and work experience
- Enhanced select boxes using Select2
- Dependent dropdowns for division and district
- Multi-select dropdowns for skills and languages

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- Select2
- AJAX

## Getting Started

### Prerequisites

- A modern web browser
- Internet connection (for loading external libraries)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/rabbirahat/CV-maker-form.git
    ```

2. Navigate to the project directory:
    ```bash
    cd CV-maker-form
    ```

3. Open index.html in your web browser.

### Usage

1. Fill in the personal information section.
2. Select a division to populate the district dropdown.
3. Add education fields dynamically by clicking the plus icon.
4. Select skill categories to populate the sub-skills dropdown.
5. Add work experience fields dynamically by clicking the plus icon.
6. Select languages from the multi-select dropdown.
7. Submit the form.

## File Structure

CV-maker-form/ ├── index.html ├── style.css └── script.js


- [index.html](http://_vscodecontentref_/3): The main HTML file containing the form structure.
- [style.css](http://_vscodecontentref_/4): The CSS file for styling the form and making it responsive.
- [script.js](http://_vscodecontentref_/5): The JavaScript file for handling dynamic field addition, dependent dropdowns, and Select2 initialization.

## Customization

### Adding New Skill Categories and Sub-skills

1. Open script.js.
2. Locate the `subSkillsData` object.
3. Add new skill categories and sub-skills as needed:
    ```javascript
    const subSkillsData = {
        'Front-end': ['HTML', 'CSS', 'JavaScript', 'React', 'Angular'],
        'Back-end': ['Node.js', 'Express', 'PHP', 'Django', 'Flask'],
        'Programming Languages': ['Python', 'Java', 'C++', 'C#', 'Ruby'],
        'Database': ['MySQL', 'MongoDB', 'PostgreSQL', 'Oracle', 'SQLite'],
        // Add new categories and sub-skills here
    };
    ```

### Changing Styles

1. Open style.css
2. Modify the styles as needed to fit your design requirements.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE] file for details.

## Acknowledgements

- [Select2](https://select2.org/) for enhanced select boxes
- [jQuery](https://jquery.com/) for simplifying JavaScript
