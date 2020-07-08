import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router";
import { connect } from "react-redux";
import {
  addFavouriteComment,
  removeFavouriteComment,
  addComments,
} from "../redux/actions";
import "../Bootstrap/css/bootstrap.css";

export class CommentsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      url: "https://jsonplaceholder.typicode.com/comments",
      datas: "",
    };
  }

  componentDidMount() {
    if (this.props.comments.comments.length == 0) {
      let datas = [];
      axios.get(this.state.url).then((response) => {
        datas = response.data.slice(0, 20).map((comment) => {
          comment.body = comment.body.substring(0, 20);
          return comment;
        });
        this.setState({ datas });
        this.props.addComments(datas);
      });
    }
  }

  chooseComment(comment) {
    this.props.addFavouriteComment(comment);
  }

  render() {
    return (
      <div>
        <nav className="nav nav-pills">
          <Link to="/" className="nav-link active">
            All Comments
          </Link>
          <Link to="/ChoosenCommentsViewComponent" className="nav-link">
            Choosen Comments
          </Link>
          <Link to="/AddCommentsViewComponent" className="nav-link">
            Add Main Comments
          </Link>
        </nav>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Komentarze:</label>
        </div>
        <div className="container-fluid">
          <div className="row">
            {this.props.comments.comments.length > 0 ? (
              this.props.comments.comments.map((data, index) => {
                return (
                  <div className="col-sm-3 col-md-3">
                    <tr key={index}>
                      <div className="col-sm-6 col-md-6 comment">
                        <td>{data.name}</td>
                      </div>
                      <div className="col-sm-6 col-md-6 comment">
                        <td>{data.email}</td>
                      </div>
                      <div className="col-sm-6 col-md-6 comment">
                        <td>{data.body}</td>
                      </div>
                      <div className="col-sm-6 col-md-6 comment">
                        <td>
                          <input
                            type="button"
                            className="btn btn-primary"
                            value="Dodaj do wybranych"
                            onClick={() => {
                              this.chooseComment(data);
                            }}
                          />
                        </td>
                      </div>
                    </tr>
                  </div>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">Loading...</td>
              </tr>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export class CommentsViewComponent extends Component {
  render() {
    return (
      <div>
        <h1>Comments: </h1>
        <CommentsComponent />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = {
  addFavouriteComment,
  removeFavouriteComment,
  addComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsComponent);
