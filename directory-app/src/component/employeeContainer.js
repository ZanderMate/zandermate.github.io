import React, { Component } from "react";
import data from "../data/data.json";
import EmployeeInfo from "./employeeInfo";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";

class EmployeeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: data,
            search: "",
        }
        this.sortBy = this.sortBy.bind(this);
    }

    sortBy = (key) => {
        console.log(key);
        console.log("data:", data);
        this.setState({
            results: data.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
        })
        console.log("new data: ", data)
    }

    componentDidMount = () => {
        this.searchEmployess();
    };

    searchEmployess = term => {
        term = term ? term : this.state.search;
        let searchResults;
        const searchQuery = term.trim();
        if (searchQuery === "") {
            this.setState({
                results: data
            });
        }
        else {
            this.setState({
                results: data.filter(employee => employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()))
            })
        }

        this.setState({
            results: searchResults,
            search: ""
        });

    };

    handleInputChange = event => {
        this.searchEmployess(event.target.value);
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });

    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployess();
        //EmployeeList.filter(employee => employee.lastName.toLowerCase().includes(props.search.toLowerCase()));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-4" />
                    <Col size="md-4">
                        <SearchForm
                            searchtype="Employee by Last Name"
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            sortDate={this.sortDate}
                        />
                    </Col>
                    <Col size="md-4" />
                </Row>
                <Row>
                    <Col size="md-12">
                        <hr />
                        <EmployeeInfo
                            results={this.state.data}
                            search={this.state.search}
                            sortBy={this.sortBy}
                        />
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default EmployeeContainer;