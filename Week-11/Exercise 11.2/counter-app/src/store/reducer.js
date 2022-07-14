import { ADD_STEP, RESET_STEP } from "./action-types";

export const reducer = (state = {
    stepCount: 0,
}, action) => {
    switch (action.type) {
        case ADD_STEP:
            return { stepCount: state.stepCount + 1 }

        case RESET_STEP:
            return { stepCount: 0 }

        default:
            return state
    }
}