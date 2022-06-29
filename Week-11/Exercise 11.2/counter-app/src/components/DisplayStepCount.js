import React from 'react'
import { useSelector } from 'react-redux'

const DisplayStepCount = () => {
    const stepCount = useSelector(state => state.stepCount)
    return (
        <div className="display-step-count">You've walked {stepCount} steps today!</div>
    )
}

export default DisplayStepCount