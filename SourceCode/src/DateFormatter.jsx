import { createElement, createContext, useReducer } from "react";
import DateFormatterListview from "./components/DateFormatterListview";
import useGetProps from "./hook/useGetProps";
import reducer, { initialState } from "./reducer/reducer";
;

export const AppStateContext = createContext();
export function DateFormatter(props) {

    const {dataValue, setDataJson, formatOutput, setFormatOutput} = useGetProps(props);
    initialState.data = dataValue;
    initialState.setDataJson = setDataJson;
    initialState.setFormatOutput = setFormatOutput;
    initialState.formatOutput = formatOutput;
    const [state, dispatch] = useReducer(reducer, initialState);



    return (
        <div>
            <AppStateContext.Provider
                value={{
                    dispatch,
                    state,  
                }}
            >
                <DateFormatterListview
                ></DateFormatterListview>
            </AppStateContext.Provider>
        </div>
    );
}
