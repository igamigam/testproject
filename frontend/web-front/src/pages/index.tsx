import React, { FC, useEffect, useState } from 'react'
import axios, { AxiosInstance } from 'axios'

type Test = {
    id: string
    title: String
    body: String
}

export default (() => {
    const [tests, setTest] = useState<Test[]>([])

    const getAPIData = async () => {
        let instance: AxiosInstance

        instance = axios.create({
            baseURL: 'http://localhost:8080',
        })

        try {
            const response = await instance.get('/api/')
            console.log(response?.data)
            const testdata = response?.data as Test[]
            setTest(testdata)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            hello world
            <button onClick={getAPIData}>click</button>
            {tests.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
}) as FC