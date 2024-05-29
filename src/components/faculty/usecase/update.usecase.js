module.exports = class UpdateFaculty {
    constructor(facultyRespository) {
        this.facultyRespository = facultyRespository;
    }

    async execute(faculty) {
        await this.facultyRespository.update(faculty);
    }
};