import { useNavigate } from 'react-router-dom'

export default function BackButton() {
    const back = useNavigate()

    const handleHome=()=>{
        back('/')
    }
    const handleBack=()=>{
        back(-1)
    }
  return (
    <>
      <button className='btn btn-info' style={{margin:'10px'}} onClick={handleHome}>Home</button>
      <button className='btn btn-info' style={{margin:'10px'}} onClick={handleBack}>Go Back</button>
    </>
  )
}
