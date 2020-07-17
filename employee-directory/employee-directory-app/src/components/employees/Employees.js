
import React, { Component } from "react";
import axios from "axios"; 
import { MDBDataTable } from "mdbreact"; 

class Employees extends Component {

    state = {
        employeeRecords: []

    }; 



componentDidMount = () => {
    axios.get("http://api.randomuser.me/?results=200")
    
    .then(response => {

        const employeeRecords = []
        for (let i = 0; i < response.data.length; i++) {
            let employee = { 
                picture: <img alt={`${response.data.results[i].name.first} ${response.data.results[i].name.last}`} src={`${response.data.results[i].picture.medium}`}></img>,
                firstName: response.data.results[i].name.first,
                lastName: response.data.results[i].name.last,
                email: response.data.results[i].email,
                phoneNum: response.data.results[i].cell

            }
            employeeRecords.push(employee)
           
            
        }
        this.setState({ employeeRecords: employeeRecords});

    });
}; 
render() {

    var employeeData = {
        columns: [
            {
                label: "Image",
                field: "picture"
            },
            {
                label: "First Name",
                field: "firstName",
                sort: "asc",
                width: 150

            },
            {
                label: "Last Name",
                field: "lastName",
                sort: "asc",
                width: 150

            },
            {
                label: "E-Mail",
                field: "email",
                sort: "asc",
                width: 150

            },
            {
                label: "Phone Number",
                field: "phoneNum",
                sort: "asc",
                width: 150

            }

        ],
        rows: this.state.employeeRecords
    }

    return (
        <div>
            <MDBDataTable bordered responsive striped data={employeeData} />
        </div>
    )
}
};

//Required Export
export default Employees


