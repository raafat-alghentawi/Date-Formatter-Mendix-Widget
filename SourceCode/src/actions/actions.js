import * as actionTypes from "./actionTypes";


export const dateFormatterAdd = (item) => {
    return {
        type: actionTypes.DATE_FORMATTER_ADD,
        payload: item};
}


export const dateFormatterDelete = (item) => {
    return {
        type: actionTypes.DATE_FORMATTER_DELETE,
        payload: item};
}

export const dateFormatterSet = (arrData) => {
    return {
        type: actionTypes.DATE_FORMATTER_SET,
        payload: arrData};
}

export const dateFormatterSetFormat = (item, value) => {
    return {
        type: actionTypes.DATE_FORMATTER_SET_FORMAT,
        payload: {item, value}};
}

export const dateFormatterSetFollowBy = (item, value) => {
    return {
        type: actionTypes.DATE_FORMATTER_SET_FOLLOW_BY,
        payload: {item, value}};
}