//import React, { Component } from "react";
//import "../../Bootstrap/css/bootstrap.css";
//import axios from "axios";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import ReactTable from "react-table";
//import "react-table/react-table.css";
//import "../../Style.css";
//import "../../Loader.css";
//import { ApiUrl } from "../../apiurl.js";

//export class ProgressForm extends React.Component {

//this.handleChange = this.handleChange.bind(this);
//this.handleSubmit = this.handleSubmit.bind(this);
//}

/*
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  ReturnJSON(value) {
    var myJSON;
    var emailsWithCourse = {
      Request: value
    };
    myJSON = JSON.stringify(emailsWithCourse);
    return myJSON;
  }

  loader = () => {
    this.setState({loading: true});
  }

  disablingLoader = () => {
    this.setState({loading: false});
  }

  handleSubmit(event) {
    this.loader();
    let myJSON = this.ReturnJSON(this.state.value);
    axios.post(this.state.url + `api/AdvancedGenerateReport`, myJSON).then((res) => {
      this.setState({ reportUrl: res.data.ReportUrl, message: res.data.Message, course: res.data.Courses });
      if(res.data.Message === 'OK') {
      setTimeout(() => {
        const response = {
          file: res.data.ReportUrl,
        };
        window.open(response.file);
      }, 100);
    alert(res.data.Message);
    }
  else
  {
    alert(res.data.Message + '\n' + res.data.Courses);
  }
    });
    setTimeout(() => {
      this.disablingLoader();
    }, 1000);
    event.preventDefault();
  }
  */
/*
  render() {
    const data = [
      {
        name: "Ayaan",
        age: 26,
      },
      {
        name: "Ahana",
        age: 22,
      },
      {
        name: "Peter",
        age: 40,
      },
      {
        name: "Virat",
        age: 30,
      },
      {
        name: "Rohit",
        age: 32,
      },
      {
        name: "Dhoni",
        age: 37,
      },
    ];

    const columns = [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Age",
        accessor: "age",
      },
    ];

    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={2}
          pageSizeOptions={[2, 4, 6]}
        />
      </div>
    );
  }
} */
/*
export class ProgressGeneratorWithoutCourseSelectComponent extends Component {
  render() {
    return (
      <div className="ProgressGenerator">
        <h1>Progress Generator Without Course Select</h1>
      </div>
    );
  }
}

export default ProgressGeneratorWithoutCourseSelectComponent;
*/
