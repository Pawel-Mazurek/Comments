import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import {
  addFavouriteComment,
  removeFavouriteComment,
  addComment,
} from "../redux/actions";
import "../Bootstrap/css/bootstrap.css";

export class ChoosenCommentsComponent extends React.Component {
  constructor() {
    super();
  }

  removeFavouriteComment(choosenComment) {
    this.props.removeFavouriteComment(choosenComment.id);
  }

  render() {
    return (
      <div>
        <nav className="nav nav-pills">
          <Link to="/" className="nav-link">
            All Comments
          </Link>
          <Link to="/ChoosenCommentsViewComponent" className="nav-link active">
            Choosen Comments
          </Link>
          <Link to="/AddCommentsViewComponent" className="nav-link">
            Add Main Comments
          </Link>
        </nav>
        <form>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              Ulubione komentarze:
            </label>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Body</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.props.comments.choosenComments.length > 0 ? (
                  this.props.comments.choosenComments.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.body}</td>
                        <td>
                          <input
                            type="button"
                            className="btn btn-primary"
                            value="Usuń ulubiony komentarz"
                            onClick={() => {
                              this.removeFavouriteComment(data);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="5">Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    );
  }
}

export class ChoosenCommentsViewComponent extends Component {
  render() {
    return (
      <div>
        <h1>Comments: </h1>
        <ChoosenCommentsComponent />
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
)(ChoosenCommentsComponent);
