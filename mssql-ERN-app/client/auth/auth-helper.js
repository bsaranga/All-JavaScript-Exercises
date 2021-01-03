function authenticate(jwt, callback) {
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt", JSON.stringify(jwt))
    }
    callback()
}

function isAuthenticated() {
    if(typeof window == "undefined") {
        return false
    }

    if(localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
    }else{
        return false
    }
}

function clearJWT(callback) {
    if(typeof window !== "undefined") {
        localStorage.removeItem("jwt")
    }
    callback()
}

module.exports = {
    authenticate, isAuthenticated, clearJWT
}