const Faculty = require('../entity/faculty.entity');

module.exports = class CreateFaculty {
    constructor(facultyRepository) {
        this.facultyRepository = facultyRepository;
    }

    async execute(faculty) {
        const { name } = faculty;
        await this.facultyRepository.insert(
            new Faculty(
                name                      
            ),
        );
    }


};