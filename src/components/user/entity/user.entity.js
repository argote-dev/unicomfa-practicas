module.exports = class User {
  constructor(
    num_document,
    name,
    last_name,
    address,
    birth_date,
    email,
    type_document,
    type_user,
    type_municipality,
    password,
  ) {
    this.name = name;
    this.num_document = num_document;
    this.last_name = last_name;
    this.address = address;
    this.birth_date = birth_date;
    this.email = email;
    this.idTypeDocument = type_document;
    this.idTypeUser = type_user;
    this.idTypeMunicipality = type_municipality;
    this.password = password;
  }
};
