"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDetails = void 0;
function checkDetails(login) {
    if (login.userName == "Raj" && login.password == "123") {
        return "Success";
    }
    else {
        return "Failure";
    }
}
exports.checkDetails = checkDetails;
