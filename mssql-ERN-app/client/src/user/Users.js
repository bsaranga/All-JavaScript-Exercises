import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {list} from './api-user'
import {Table, Input} from 'antd'

const {Search} = Input

export default function Users() {
    
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
            <Search placeholder="Filter user" onSearch={(value) => console.log(value)} onChange={val => console.log(val.target.value)}/>
            <Table dataSource={users} columns={columns} rowKey='id'/>
        </div>
    )
}