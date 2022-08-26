import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Map from './Map'
import './index.css'

function GmapPol() {

    const data = useSelector((state) => state.counterReducer[0])
    const navigate = useNavigate()

    return (
        <>
            <div className='navbar head'>
            {(data ? (<h2>{data}</h2>) : (
                <h2>Might wanna go back to enter your firstname. <span onClick={()=>navigate('/')}>Here</span></h2>
            ))}
            </div>
            <div>
                <Map />
            </div>
        </>
    )
}

export default GmapPol