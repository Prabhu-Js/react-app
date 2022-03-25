import React, { Component } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints.js";
import logo from "../../logos/profile-img.png";
import "./style.css";
import { Link } from "react-router-dom";

class PostDetail extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost() {
    axios
      .get(Endpoints.GET_POSTBYID_URL)
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
        <div className="post-detail">
            <div className="container">
            <div className="text-center">
            <div class="d-flex w-150">
            <small>
                    <img src={logo} className="img-thumbnail" width={80} />
                    <br />
                    {this.state.users.postedBy}
                  </small>
              {this.state.users.post}
            </div>
            </div>
            </div>
            
            
        </div>
    );
  }
}
export default PostDetail;
