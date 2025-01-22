import React, { useState } from 'react'
import FormContext from './context'

function FormProvider({children}) {
    const [formData, setFormData] = useState(null)
  return (
    <FormContext.Provider value={{formData, setFormData}}>
        {children}
    </FormContext.Provider>
  )
}

export default FormProvider