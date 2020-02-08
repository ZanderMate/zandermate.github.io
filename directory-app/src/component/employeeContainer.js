import React, { Component } from "react";
import EmployeeList from "../data/data.json";
import EmployeeInfo from "./employeeInfo";


class EmployeeContainer extends Component {
    state = {
        result: [],
        search: ""
    }

    componentDidMount() {
        this.searchEmployess();
    };

    searchEmployess = () => {
        const searchQuery = this.state.search.trim();
        const searchResults = EmployeeList.filter((employee) => employee.lastName === searchQuery);
        this.setState({ 'result': searchResults });
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployess();
    };

    render() {
        return(
            <EmployeeInfo />
        )
    }
}

export default EmployeeContainer;