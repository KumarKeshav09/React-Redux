import React, { useContext } from 'react'
import FormContext from '../context/context'
import { useData } from '../context/api'

export default function FormDataDisplay() {
    const { formData } = useContext(FormContext)
    const data = useData();
    if (!formData) {
        return (<div>
            {
                data?.map((data) => (
                    <h1 key={data.id}>{data.name}</h1>
                ))
            }
        </div>)
    }

    return (
        <div>
            <h1>Form Data</h1>
            <h1>{formData.name}</h1>
            <h1>{formData.email}</h1>

        </div>
    )
}