import React from 'react';
import { observer } from 'mobx-react';
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import '../styles/tailwind.css';
import { action } from "mobx";
import AboutObservables from "./css.js";


const FullName = styled.button `
${tw `h-8 w-1/4 text-center`}
border:2px solid red`;

const InputTag = styled.input `
${tw `w-1/3`}
border:2px solid red`;

const AddButton = styled.button `
${tw `bg-grey-400`}
border:2px solid blue`;

@observer
class EventPage extends React.Component {
    @action.bound
    handleOnchangeF(event) {
        this.first_Name = event.target.value;
    }

    @action.bound
    handleOnchangeF(event) {
        this.last_Name = event.target.value;
    }

    @action.bound
    addEvent() {
        const name = new AboutObservables();
        this.namesList.push(name);
    }

    render() {
        return (
            <div>
                <InputTag type="text" placeHolder="Enter firstName" onChange={this.handleOnchangeF}></InputTag>
                <InputTag type="text" placeHolder="Enter lastName" onChange={this.handleOnchangeL}></InputTag>
                <AddButton onClick={this.addEvent}>Add</AddButton>
                <div>{this.namesList.length>0?this.namesList.map(name=><p>{name}</p>):null}</div>
            </div>
        );
    }
}

export default EventPage;
