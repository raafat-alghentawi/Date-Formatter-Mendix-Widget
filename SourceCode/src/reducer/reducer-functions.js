import { produce } from "immer"
import { getOutputFormat } from "../utils/utility";


export const dateFormatterAddReduce = (state, action) => {
    return produce(state, (draftState) => {
        draftState.data.push(action.payload);
        const jsonData = JSON.stringify(draftState.data);
        draftState.setDataJson(jsonData);
        let formatOutput = getOutputFormat(JSON.parse(jsonData));
        draftState.setFormatOutput(formatOutput);
    }
    )
}

export const dateFormatterDeleteReduce = (state, action) => {
    return produce(state, (draftState) => {
        const indexToDelete = draftState.data.findIndex(a => a.id === action.payload.item.id);
        draftState.data.splice(indexToDelete, 1)
        const jsonData = JSON.stringify(draftState.data);
        draftState.setDataJson(jsonData);
        let formatOutput = getOutputFormat(JSON.parse(jsonData));
        draftState.setFormatOutput(formatOutput);
    }
    )
}

export const dateFormatterSetReduce = (state, action) => {
    return produce(state, (draftState) => {
        draftState.data = [...action.payload];
        const jsonData = JSON.stringify(draftState.data);
        draftState.setDataJson(jsonData);
        let formatOutput = getOutputFormat(JSON.parse(jsonData));
        draftState.setFormatOutput(formatOutput);

    }
    )
}


export const dateFormatterSetFormatReduce = (state, action) => {
    return produce(state, (draftState) => {
        const indexToDelete = draftState.data.findIndex(a => a.id === action.payload.item.id);
        draftState.data[indexToDelete].format = action.payload.value;
        const jsonData = JSON.stringify(draftState.data);
        draftState.setDataJson(jsonData);
        let formatOutput = getOutputFormat(JSON.parse(jsonData));
        draftState.setFormatOutput(formatOutput);
    }
    )
}

export const dateFormatterSetFollowByReduce = (state, action) => {
    return produce(state, (draftState) => {
        const indexToDelete = draftState.data.findIndex(a => a.id === action.payload.item.id);
        draftState.data[indexToDelete].followBy = action.payload.value;
        const jsonData = JSON.stringify(draftState.data);
        draftState.setDataJson(jsonData);
        let formatOutput = getOutputFormat(JSON.parse(jsonData));
        draftState.setFormatOutput(formatOutput);
    }
    )
}