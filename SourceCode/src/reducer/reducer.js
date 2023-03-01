import { DATE_FORMATTER_ADD, DATE_FORMATTER_DELETE, DATE_FORMATTER_SET, DATE_FORMATTER_SET_FOLLOW_BY, DATE_FORMATTER_SET_FORMAT } from "../actions/actionTypes";
import { dateFormatterAddReduce, dateFormatterDeleteReduce, dateFormatterSetFollowByReduce, dateFormatterSetFormatReduce, dateFormatterSetReduce } from "./reducer-functions";

export const initialState = {
    data: [
        {
            format: "",
            followBy: "",
            id: 0
        }
    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case DATE_FORMATTER_ADD:
            return dateFormatterAddReduce(state, action);
        case DATE_FORMATTER_DELETE:
            return dateFormatterDeleteReduce(state, action);
        case DATE_FORMATTER_SET:
            return dateFormatterSetReduce(state, action);
        case DATE_FORMATTER_SET_FORMAT:
            return dateFormatterSetFormatReduce(state, action);
        case DATE_FORMATTER_SET_FOLLOW_BY:
            return dateFormatterSetFollowByReduce(state, action);
        default:
            return state;
    }
}

export default reducer;
