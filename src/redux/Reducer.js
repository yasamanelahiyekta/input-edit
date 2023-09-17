export const number = (state = 0, action) => {
    switch (action.type) {
        case "changenumber":
            return action.payload;
        default:
            return state;
    }
}
export const posts = (state = { data: [], loading: false, error: "" }, { type, payload }) => {
    switch (type) {
        case "loading":

            return payload;
        case "faild":

            return payload;
        case "success":

            return payload;
        case "changeTitle":

            return payload;

        default:
            return state;
    }
}