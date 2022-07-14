import React from 'react'
import { useDispatch } from 'react-redux'
import { resetStep } from '../store/action'

const ResetStep = () => {
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(resetStep())
    }


    return (
        <button className="secondary" onClick={handleSubmit}>Reset Step</button>
    )
}

export default ResetStep