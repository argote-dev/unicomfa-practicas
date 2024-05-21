module.exports = class Documents {
    constructor(
        url,
        date,
        typeId,
        userId
    ) {
        this.url = url;
        this.date = date;
        this.typeId = typeId;
        this.userId = userId;
    }
};
