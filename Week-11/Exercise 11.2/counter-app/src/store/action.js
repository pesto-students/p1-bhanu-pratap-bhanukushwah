import { ADD_STEP, RESET_STEP } from "./action-types"

export const addAStep = () => {
    return {
        type: ADD_STEP
    }
}

export const resetStep = () => {
    return {
        type: RESET_STEP
    }
}