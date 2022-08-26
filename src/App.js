import React, { useEffect } from 'react'
import { EasyAuth } from 'axios-easy-auth'

const App = () => {
    const auth = new EasyAuth('https://jsonplaceholder.typicode.com', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9')
    
    const getData = async () => {
        const responce = await auth.get('/todos/1')
        
        // get(path: string, query: array, headers: array)
        console.log('GET')
        console.log(responce.data)
    }

    const postData = async () => {
        const responce = await auth.post('/posts', {}, {Header: 'value'}) 
        
        // post(path: string, body: array, headers: array)
        console.log('POST')
        console.log(responce.data)
    }

    const putData = async () => {
        const responce = await auth.put('/posts/1', {title: 'New Title', body: 'body'}) 
        
        // put(path: string, data: array, headers: array)
        console.log('PUT')
        console.log(responce.data)
    }

    const patchData = async () => {
        const responce = await auth.put('/posts/1', {title: 'Patch Title'}) 
        
        // patch(path: string, data: array, headers: array)
        console.log('PATCH')
        console.log(responce.data)
    }

    const deleteData = async () => {
        const responce = await auth.delete('/posts/1', {title: 'Patch Title'}) 
        
        // delete(path: string, data: array, headers: array)
        console.log('DELETE')
        console.log(responce.data)
    }
    
    useEffect(() => {
        getData()
        postData()
        putData()
        patchData()
        deleteData()
    }, [])

    return 'Check Console'
}

export default App
