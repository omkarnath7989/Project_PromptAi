"use client"

import Form from "@components/Form"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

const Createprompt = () => {
   
  const [issubmitting , setissubmitting ] = useState(false)
  const [post, setpost] = useState({
    prompt : "",
    tag : "" , 
  })

  const router = useRouter()
  const { data : session } = useSession()
   
  const createpromt = async (e) =>{
    e.preventDefault()
    setissubmitting(true)
try{
    const response = await fetch("/api/prompt/new",{

      method: "POST",
      body : JSON.stringify({
        prompt:post.prompt,
        tag : post.tag , 
        userId : session?.user.id
      })
    })

    if(response.ok){
      router.push("/")
    }
  }
    catch(e){
      console.log(e)
    }
    finally{
      setissubmitting(false)
    }
  }
  return (

    <section>
     <Form
       type='Create'
       post = {post}
       setpost = {setpost}
       handleSubmit = {createpromt}
       submitting = {issubmitting}
     />
    </section>
  )
}

export default Createprompt