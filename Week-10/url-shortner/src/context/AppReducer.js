export const ADD_SHORT_LINK = 'ADD_SHORT_LINK';
export const DELETE_SHORT_LINK = 'DELETE_SHORT_LINK';

const AppReducer = (state, action) => {
    switch (action.type) {
        case ADD_SHORT_LINK:
            return {
                ...state,
                shortLinks: [action.payload, ...state.shortLinks]
            }
        case DELETE_SHORT_LINK:
            return {
                ...state,
                shortLinks: state.shortLinks.filter(shortLink => shortLink.code !== action.payload)
            }
        default:
            return state;
    }
}

export default AppReducer