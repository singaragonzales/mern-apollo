import { useMutation } from '@apollo/client'
import React from 'react'
import { CREATE_PROJECT, GET_ALL_PROJECTS } from '../graphql/project'

export default function ProjectForm() {
  const [project, setProject] = React.useState({
    name: "",
    description: ""
  })
  const [createProject, {loading, error}] = useMutation(CREATE_PROJECT, {
    refetchQueries: [
      {query: GET_ALL_PROJECTS}, "getProjects"
    ]
  })

  const handleChange = ({target: {name, value}}) => {
    setProject({
      ...project,
      [name]: value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    createProject({
      variables: {
        name: project.name,
        description: project.description
      }
    })
    setProject({
      name: "",
      description: ""
    })
  }

  return (
    <form className='w-2/5' onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}

      <input className='bg-zinc-800 text-white rounded-lg shadow-lg shadow-black p-4 block w-full mb-3' type="text" name="name" onChange={handleChange} placeholder="Write a title"/>
      <textarea className='bg-zinc-800 text-white rounded-lg shadow-lg shadow-black p-4 block w-full mb-3' name="description" onChange={handleChange} placeholder="Write a description" id="" rows="3"></textarea>
      <button className='bg-blue-500 cursor-pointer px-4 py-1 rounded-md text-lg mb-3 disabled:bg-zinc-400' disabled={!project.name || !project.description || loading}>Save</button>
    </form>
  )
}
