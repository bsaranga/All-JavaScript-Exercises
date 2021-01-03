const { sign } = require("jsonwebtoken")
const { useState } = require("react")
const list = require('./api-user').list

module.exports = function Users() {
    const [users, setUsers] = useState([]) // initializes 'users' state variable for this functional component with [], setUsers can be used to update the state var

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        list(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setUsers(data)
            }
        })

        return function cleanup() {
            abortController.abort()
        }
    }, [])


}