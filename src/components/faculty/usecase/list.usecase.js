module.exports = class ListFaculty {
    constructor(facultyRepository) {
        this.facultyRepository = facultyRepository;
    }

    async execute() {
        return await this.facultyRepository.list();
    }
};
