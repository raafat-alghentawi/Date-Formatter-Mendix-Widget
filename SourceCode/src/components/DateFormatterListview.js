import React, { createElement, useState, useRef } from "react";
import DraggableList from "react-draggable-list";
import { dateFormatterAdd, dateFormatterSet } from "../actions/actions";
import useGetAppContext from "../hook/useGetAppContext";
import { generateGUID } from "../utils/utility";
import ListViewItem from "./ListViewItem";

const DateFormatterListview = () => {
    const { dispatch, state } = useGetAppContext();
    const list = state.data;
    const containerRef = useRef();

    const _onListChange = newList => {
        dispatch(dateFormatterSet(newList))
    };
    const onAddDateFormatter = e => {
        let newItem = ({
            dateItem: "",
            followBy: "",
            id: generateGUID()
        });
        dispatch(dateFormatterAdd(newItem))
    };

    return (
        <div className="App">
            <div ref={containerRef} style={{ touchAction: "pan-y" }}>
                <button class="btn mx-button mx-name-actionButton1 btn-success" onClick={onAddDateFormatter}>
                    Add Date Formatter
                </button>
                <DraggableList
                    itemKey="id"
                    template={ListViewItem}
                    list={list}
                    onMoveEnd={newList => _onListChange(newList)}
                    container={() => containerRef.current}
                />
            </div>
        </div>
    );
};

export default DateFormatterListview;
