import React from 'react'
import {useQuery} from "@apollo/client"
import { GET_ALL_PROJECTS } from '../graphql/project'
import ProjectCard from './ProjectCard';

export default function ProjectList() {

   const {loading, error, data} =  useQuery(GET_ALL_PROJECTS)
    if(loading) return <p>Loading</p>;
    if(error) return <p>Error</p>;
    return (
        <div className='overflow-y-auto h-80 w-full px-5'>
            {
                data.projects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))
            }
        </div>
    )
}
