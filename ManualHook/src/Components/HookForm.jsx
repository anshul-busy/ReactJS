import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"


const HookForm = () => {

 const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    getValues,
  } = useForm({defaultValues: {name:"Anshul"}, mode:"onTouched"})

function submit(data){
  return new Promise((res)=> console.log("submitted", data))
}

  if(isSubmitSuccessful){
    return(
      <div>
        <h1>Form submitted successfully</h1>
      </div>
    )
  }
  return <div>
    <form onSubmit={handleSubmit(submit)}>
      <label>
        Full Name
          <input {...register('name',{required:'name is required'})} />
      </label>

      <label>
        Email
          <input {...register('Email',{required:'Email is required'})} />
      </label>

      <submit type="submit" disabled={isSubmitting}>

        {isSubmitting ? "Submitting..." : "Submit"}
      </submit>
    </form>

  </div>
}

export default HookForm