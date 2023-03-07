import {useMutation} from '@apollo/client'
import { DELETE_TASK } from '../../graphql/task'
import {AiOutlineDelete} from "react-icons/ai"

export default function TaskCard({task}) {

    const [deleteTask] = useMutation(DELETE_TASK, {
        refetchQueries: ["getProject"],
    })

    return (
        <div className='bg-zinc-900 px-5 py-3 mb-2 flex justify-between items-center'>
            <h1 className='text-sm'>{task.title}</h1>
            <button className='bg-red-500 rounded-md py-2 px-3'
            onClick={() => deleteTask({
                variables: {
                    id: task._id
                }
            })
            }><AiOutlineDelete /></button>
        </div>
    )
}
