import { useParams } from 'react-router-dom'

function Person() {
  const { id } = useParams();
  return (
    <div>Person with id {id}</div>
  )
}

export default Person
