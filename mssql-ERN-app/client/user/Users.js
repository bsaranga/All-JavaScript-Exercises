const React = require('react')
const useState = React.useState
const useEffect = React.useEffect
const list = require('./api-user').list
const Table = require('antd').Table

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

    console.log(users)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Created',
            dataIndex: 'createdAt',
            key: 'createdAt'
        },
        {
            title: 'Updated',
            dataIndex: 'updatedAt',
            key: 'updatedAt'
        }
    ]

    return(
        <div>
            <Table dataSource={users} columns={columns} rowKey='id'/>
        </div>
    )
}