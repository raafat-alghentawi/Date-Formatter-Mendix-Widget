import React, { createElement, useState } from "react";
import { dateItemOptions } from "../utils/inputData";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import useGetAppContext from "../hook/useGetAppContext";
import { dateFormatterSetFollowBy } from "../actions/actions";

const ListViewItem = ({ item, itemSelected, dragHandleProps }) => {
    const { dispatch, state } = useGetAppContext();
    const onChangeFollowBy = e => {
        dispatch(dateFormatterSetFollowBy(item, e.target.value));
    };
    const { onMouseDown, onTouchStart } = dragHandleProps;
    return (
            <div
                className="disable-select row"
                style={{
                    border: "1px solid #f0f1f2",
                    margin: "4px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-around",
                    background: "#fff",
                    userSelect: "none"
                }}
            >
                <div
                    className=" col-lg-10  col-md-10  col-sm-10"
                    style={
                        {
                            // fontWeight: "600",
                            // transform: "rotate(90deg)",
                            width: "100%"
                            // height: "20px",
                            // backgroundColor: "black"
                        }
                    }
                    onTouchStart={e => {
                        e.preventDefault();
                        console.log("touchStart");
                        e.target.style.backgroundColor = "blue";
                        document.body.style.overflow = "hidden";
                        onTouchStart(e);
                    }}
                    onMouseDown={e => {
                        console.log("mouseDown");
                        document.body.style.overflow = "hidden";
                        onMouseDown(e);
                    }}
                    onTouchEnd={e => {
                        e.target.style.backgroundColor = "black";
                        document.body.style.overflow = "visible";
                    }}
                    onMouseUp={() => {
                        document.body.style.overflow = "visible";
                    }}
                >
                    
                        <Card item={item}></Card>
                </div>
                <div className=" col-lg-2  col-md-2  col-sm-12 col-xs-12">
                <div className="row">
                    <input
                        className="form-control"
                        placeholder="Follow by"
                        type="text"
                        onChange={onChangeFollowBy}
                        value={item.followBy}
                    />
                    </div>
                </div>
            </div>
    );
};

export default ListViewItem;
