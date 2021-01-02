const c = require('../../config/colors');

module.exports = function errorHandler(err) {
    const errorsObj = {}
    errorsObj.count = err.errors.length
    err.errors.forEach((err, i) => {
        errorsObj[`Error${i}`] = {
            message: err.message,
            value: err.value
        }
    });

    console.log(c.bRed, `Errors: ${err.errors.length}`)

    err.errors.forEach(error => {
        console.log(c.red, `Message: ${error.message}\nValue: ${error.value}`)
    });

    return errorsObj
}