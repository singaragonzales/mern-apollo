import {gql} from "@apollo/client"

export const GET_ALL_TASK = gql`
    {
        projects{
            _id
            name
            description
        }
    }`;

export const GET_TASKS = gql`
    query($projectId: String!){
        task(
            projectId: $projectId,
        ) {
            title
            project{
                name
            }
        }
    }`;

export const CREATE_TASK = gql`
    mutation($title: String, $projectId: ID){
        createTask(
            title: $title,
            projectId: $projectId
        ) {
            title
            project{
                name
            }
        }
    }`;

export const DELETE_TASK = gql`
mutation($id: ID!){
    deleteTask(
        _id: $id,
    ) {
        _id
        title
    }
}`;


