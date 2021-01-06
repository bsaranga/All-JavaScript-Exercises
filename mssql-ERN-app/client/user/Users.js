const React = require('react')
const useState = React.useState
const useEffect = React.useEffect
const list = require('./api-user').list

module.exports = function Users() {
    
    const [users, setUsers] = useState([]) // initializes 'users' state variable for this functional component with [], setUsers can be used to update the state var

    useEffect(() => {
        let abortController = new AbortController()
        let signal = abortController.signal
                
        list(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setUsers(data)
            }
        })

        return function cleanup() {
            console.log('Component Unmounted')
            abortController.abort()
        }
    },[])

    return(
        <table className="ml-6">
            <thead>
                <tr>
                    <th className="border px-8 text-sm text-gray-900">Name</th>
                    <th className="border px-8 text-sm text-gray-900">Email</th>
                    <th className="border px-8 text-sm text-gray-900">Created At</th>
                    <th className="border px-8 text-sm text-gray-900">Updated At</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map((val, i) => {
                    let keys = Object.keys(val);
                    return(
                        <tr className={(i%2==0) ? "bg-blue-100" : ""} key={i}>
                            {keys.map((k, i) => {
                                return(<td className="border px-2 text-sm font-light text-gray-800" key={i}>{val[k]}</td>)
                            })}
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}