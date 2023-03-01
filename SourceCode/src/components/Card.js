import React, { createElement, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import { dateFormatterDelete, dateFormatterSetFormat } from "../actions/actions";
import useGetAppContext from "../hook/useGetAppContext";
import { generateOutputFormatOptions } from "../utils/utility";


const Card = item => {
    const { dispatch, state } = useGetAppContext();
    const options = generateOutputFormatOptions();
    const indexOptionSelected  = options.findIndex(a => a.value === item.item.format);
    let selectedOption= null;
    if (indexOptionSelected != -1){
        selectedOption = options[indexOptionSelected];
    }


    const onRemveDateFormatter = e => {
        dispatch(dateFormatterDelete(item));
    };
    const onChangeFormat = (e) => {
        dispatch(dateFormatterSetFormat(item.item, e.value));
    }

    return (
        <div className="row justify-content-end">
                <div className="col-lg-2  col-md-2  col-sm-12 col-xs-12 ">
                        <button class="btn mx-button mx-name-actionButton1 btn-danger" onClick={onRemveDateFormatter}>
                            Remove
                        </button>
                    </div>                
                    <div  className="col-lg-4  col-md-4  col-sm-12 col-xs-12">
                        <Select
                        value={selectedOption}
                        placeholder="Select format"
                        onChange={onChangeFormat}
                        options={options} />
                    </div>

        </div>
    );
};

export default Card;
