import React from 'react'
import { dateFormatterSet } from '../actions/actions';

const useGetProps = (props) => {
        // Json data
        let dataValue = [];
        const {
            DataJson: { status: dataJsonStatus, value: dataJsonSComming , setValue: setDataJson }
        } = props;
    
        if (dataJsonStatus === "available") {
            var arrFromJson = [];
            try {
                var arrFromJson = JSON.parse( dataJsonSComming );
                arrFromJson.forEach(item => {
                    if (item.hasOwnProperty("format") && item.hasOwnProperty("followBy") && item.hasOwnProperty("id")){
                        dataValue.push(item);
                    }
                    
                });
            } catch (error) {
                
            }
            // dispatch(dateFormatterSet(dataValue));

        }

        // Format output data
        let formatOutput = null;
        const {
            FormatOutput: { status: formatOutputStatus, value:formatOutputComming , setValue: setFormatOutput }
        } = props;
    
        if (formatOutputStatus === "available") {
            formatOutput = formatOutputComming;
        }


  return {dataValue, setDataJson, formatOutput, setFormatOutput};
}

export default useGetProps