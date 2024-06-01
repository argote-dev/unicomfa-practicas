module.exports = class DeleteFaculty {
    constructor(facultyRespository) {
        this.facultyRespository = facultyRespository;
    }

    async execute(id) {
        await this.facultyRespository.delete(id);
    }
};
