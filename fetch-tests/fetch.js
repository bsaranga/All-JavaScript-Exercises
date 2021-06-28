let usersReq = fetch('http://localhost:3000/api/users')

let formElem = document.getElementById('formElem')

formElem.onsubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData(formElem);
    console.log(formData)
}