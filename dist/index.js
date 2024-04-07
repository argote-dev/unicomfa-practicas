"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./config/application");
const port = application_1.app.get('port');
application_1.app.on('error', (error) => {
    console.log(`❌ ${error}`);
});
application_1.app.listen(port, () => {
    console.log(`✅ Server is running at http://localhost:${port}`);
});
