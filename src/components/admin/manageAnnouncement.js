import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Form ,Divider, Button, Icon} from 'semantic-ui-react'
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';
import FileUpload from '../FileUpload';
import '../../css/admin/manageAnnouncement.css';
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

export default class manageAnnouncement extends Component {
    constructor() {
        super()
        this.state = {
            date: '',
            title: '',
            content: '',
            startdate: '',
            enddate: '',
            regdate: ''
        }
    }

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }
    render() {
        const { value } = this.state
        console.log(this.state);
        return (
            <div style={{ marginTop: "100px", marginRight: "50px", marginLeft: "50px", backgroundColor: "white", padding: "3%", borderRadius: "1%" }}>
                <header style={{marginBottom:"70px"}}><h2 style={{float:"left"}}>Manage Announcement</h2> <div style={{float:"right"}}><Button primary size="big">ADD&nbsp;&nbsp;&nbsp;&nbsp;<Icon style={{margin:"0px"}} name="plus"/></Button><Button primary size="big">EDIT&nbsp;&nbsp;&nbsp;&nbsp;<Icon style={{margin:"0px"}} name="edit outline"/></Button><Button primary size="big">DELETE&nbsp;&nbsp;&nbsp;&nbsp;<Icon style={{margin:"0px"}} name="delete"/></Button></div></header>
                <Divider/>
                <MainLayout />
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Title' placeholder='Enter announcement title' onChange={this.handleChange} />
                        <DateInput
                            label="Start Date"
                            name="startdate"
                            placeholder="Date"
                            value={this.state.date}
                            iconPosition="left"
                            onChange={this.handleChange}
                        />
                        <DateInput
                            label="End Date"
                            name="enddate"
                            placeholder="Date"
                            value={this.state.date}
                            iconPosition="left"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <div style={{ float: "left", marginTop: "20px" }}>
                            <span>Announcement Photo</span>
                            <FileUpload />
                        </div>
                        <div style={{ float: "right", width: "100%", marginLeft: "50px" }}>
                            <Form.TextArea style={{ height: "400px" }} label='Content' placeholder='Announcement Content' />

                        </div>
                    </Form.Group>
                    <Form.Button color="blue">Submit</Form.Button>
                </Form>

            </div>
        )
    }
}
