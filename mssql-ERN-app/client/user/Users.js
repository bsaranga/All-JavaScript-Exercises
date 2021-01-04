const React = require('react')
const useState = React.useState
const useEffect = React.useEffect
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
            console.log('Component Unmounted')
            abortController.abort()
        }
    },[])

    console.log(users)

    return(
        <table className="ml-6">
            <thead>
                <tr>
                    <th className="border px-8 text-sm text-gray-900">Title 1</th>
                    <th className="border px-8 text-sm text-gray-900">Title 2</th>
                    <th className="border px-8 text-sm text-gray-900">Title 3</th>
                    <th className="border px-8 text-sm text-gray-900">Title 4</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-blue-100">
                    <td className="border px-2 text-sm font-light text-gray-800">kjsdhfkjsdhfksd</td>
                </tr>
                <tr className="">
                    <td className="border px-2 text-sm font-light text-gray-800">kjsdhfkjsdhfksd</td>
                </tr>
                <tr className="bg-blue-100">
                    <td className="border px-2 text-sm font-light text-gray-800">kjsdhfkjsdhfksd</td>
                </tr>
                <tr className="">
                    <td className="border px-2 text-sm font-light text-gray-800">kjsdhfkjsdhfksd</td>
                </tr>
            </tbody>
        </table>
    )
}