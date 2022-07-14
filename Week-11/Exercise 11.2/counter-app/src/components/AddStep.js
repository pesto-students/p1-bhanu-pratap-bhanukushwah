import React from 'react'
import { useDispatch } from 'react-redux'

import { addAStep } from '../store/action'

const AddStep = () => {
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(addAStep())
    }

    return (
        <button className="primary" onClick={handleSubmit}>Add A Step</button>
    )
}

export default AddStep