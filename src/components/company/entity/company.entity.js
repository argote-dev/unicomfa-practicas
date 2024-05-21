module.exports = class Company {
    constructor(
        nit, name, date_association, address, phone, email,
    ) {
        this.nit = nit;
        this.name = name;
        this.date_association = date_association;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
};
