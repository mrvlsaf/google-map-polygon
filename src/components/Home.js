import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addData } from '../slice/counterSlice'

function Home() {

    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleChange = (event) => {
        setName(event.target.value)
        // setFirstName(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // const data = {
        //     name: name,
        //     mobileNumber: mobileNumber
        // }
        dispatch(addData(name))
        navigate('/main')
    }

    return (
        <>
            <div className="home-container">
                <div>Search bar</div>
                <div>
                    <form onSubmit={handleSubmit} >
                        <label>First Name</label>
                        <input required type="text" value={name} onChange={handleChange}></input>
                        <label>Mobile Number</label>
                        <input type="number" value={mobileNumber} onChange={(event) => setMobileNumber(event.target.value)}></input>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home
