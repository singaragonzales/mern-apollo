import {useParams, Link} from 'react-router-dom'
import {useQuery} from "@apollo/client"
import { GET_PROJECT } from '../graphql/project'
import TaskList from '../components/task/TaskList'
import TaskForm from '../components/task/TaskForm'

export default function ProjectDetails() {

  const params = useParams()
  const {data, loading, error} = useQuery(GET_PROJECT, {
    variables: {
      id: params.id
    },
    skip: !params.id
  })

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>
  
  return (
    <div>
      <Link to="/Projects">
      <button className='bg-blue-500 px-3 py-2 rounded-md'>Back</button>
      </Link>
      <div className='bg-zinc-900 mb-2 p-10 flex justify-between'>
        <div>
          <h1 className='text-2xl'>{data.project.name}</h1>
          <p>{data.project.description}</p>
        </div>
      </div>
      <button className='bg-red-500 px-3 py-2 rounded-md'>Delete</button>
      <TaskForm />
      <TaskList tasks={data.project.tasks}/>
    </div>
  )
}
