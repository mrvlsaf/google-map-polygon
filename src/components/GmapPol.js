import { useSelector } from 'react-redux'
import Map from './Map'

function GmapPol() {

    const data = useSelector((state) => state.counterReducer[0])

    return (
        <>
            <div className='navbar head'>
                <h2>{data}</h2>
            </div>
            <div>
                <Map />
            </div>
        </>
    )
}

export default GmapPol