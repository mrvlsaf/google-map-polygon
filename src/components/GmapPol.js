import { useSelector } from 'react-redux'
import Map from './Map'

function GmapPol() {

    const data = useSelector((state) => state.counterReducer[0])
    console.log(data)
    // const { mobileNumber } = useSelector(state => state.mobileNumber)

    return (
        <>
            <div><h2>{data}</h2></div>
            <div>
                <Map />
            </div>
        </>
    )
}

export default GmapPol