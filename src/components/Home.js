import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addData } from '../slice/counterSlice'
import './index.css'
import { TextField } from '@mui/material'

function Home() {

    const [firstName, setFirstName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addData(firstName))
        navigate('/main')
    }

    return (
        <>
            <div className="home-container">
                <div className='navbar'></div>
                <div className='form-container'>
                    <div className='search'>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Search"
                        />
                    </div>
                    <div className='form'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>First Name</label>
                                <input required type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
                            </div>
                            <div>
                                <label>Mobile Number</label>
                                <input type="number" value={mobileNumber} onChange={(event) => setMobileNumber(event.target.value)}></input>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
