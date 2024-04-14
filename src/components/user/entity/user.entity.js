module.exports = class User {
  constructor(name, last_name, address, birth_date, email, type_document, type_user, type_municipality) {
    this.name = name;
    this.last_name = last_name;
    this.address = address;
    this.birth_date = birth_date;
    this.email = email;
    this.idTypeDocument = type_document;
    this.idTypeUser = type_user;
    this.idTypeMunicipality = type_municipality;
  }
};
