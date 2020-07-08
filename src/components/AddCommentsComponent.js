import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router";
import { connect } from "react-redux";
import {
  addFavouriteComment,
  removeFavouriteComment,
  addComment,
} from "../redux/actions";
import "../Bootstrap/css/bootstrap.css";
import "../Styles/styles.css";

export class AddCommentsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mainCommentName: "",
      mainCommentEmail: "",
      mainCommentBody: "",
    };
    this.handleCommentNameChange = this.handleCommentNameChange.bind(this);
    this.handleCommentEmailChange = this.handleCommentEmailChange.bind(this);
    this.handleCommentBodyChange = this.handleCommentBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCommentNameChange(event) {
    this.setState({ mainCommentName: event.target.value });
  }

  handleCommentEmailChange(event) {
    this.setState({ mainCommentEmail: event.target.value });
  }

  handleCommentBodyChange(event) {
    this.setState({ mainCommentBody: event.target.value });
  }

  addMainComment(comment) {
    this.props.addComment(comment);
  }

  handleSubmit(event) {
    var newAddingComment;
    let newComment = {
      postid: 1,
      id: 1,
      name: this.state.mainCommentName,
      email: this.state.mainCommentEmail,
      body: this.state.mainCommentBody,
    };
    newAddingComment = this.validateMainComment(newComment);
    if (newAddingComment != undefined) {
      this.addMainComment(newAddingComment);
    }
  }

  validateMainComment(mainComment) {
    var regexName = /^[a-z]{3,}$/;
    var regexEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var regexText = /.{2,}/;

    if (!regexName.test(mainComment.name)) {
      return alert("Zly format nazwy komentarza ");
    }
    if (!regexEmail.test(mainComment.email)) {
      return alert("Zly format emaila ");
    }
    if (!regexText.test(mainComment.body)) {
      return alert("Zly format tresci komentarza ");
    }
    return mainComment;
  }

  render() {
    return (
      <div>
        <nav className="nav nav-pills">
          <Link to="/" className="nav-link">
            All Comments
          </Link>
          <Link to="/ChoosenCommentsViewComponent" className="nav-link">
            Choosen Comments
          </Link>
          <Link to="/AddCommentsViewComponent" className="nav-link active">
            Add Main Comments
          </Link>
        </nav>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              Dodawanie komentarza:
            </label>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              Nazwa:
              <input
                type="text"
                className="form-control"
                onChange={this.handleCommentNameChange}
              />
            </label>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              Email:
              <input
                type="text"
                className="form-control"
                onChange={this.handleCommentEmailChange}
              />
            </label>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              Treść:
              <input
                type="text"
                className="form-control"
                onChange={this.handleCommentBodyChange}
              />
            </label>
          </div>
          <div className="col-sm-4 col-form-label">
            <input
              type="button"
              className="btn btn-primary"
              value="Wyślij"
              onClick={() => {
                this.handleSubmit();
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export class AddCommentsViewComponent extends Component {
  render() {
    return (
      <div>
        <h1>Comments: </h1>
        <AddCommentsComponent />
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
  addComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCommentsComponent);
