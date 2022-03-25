import React, { Component } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints.js";
import logo from "../../logos/profile-img.png";
import "./style.css";
import { Link } from "react-router-dom";

class PostListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  //   onClickHandler = () => {
  //     this.getPost();
  //   };

  componentDidMount() {
    this.getPost();
  }

  getPost() {
    axios
      .get(Endpoints.GET_POSTS_URL)
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
      <div className="post-list">
        <h3 className="text-center"></h3>

        {this.state.users.map((customer) => (
          <div className="container">
            <div class="list-group">
              <a
                href="#"
                onClick={() => this.postDetail(customer.id)}
                class="list-group-item list-group-item-action"
              >
                <div class="d-flex w-150">
                  <small>
                    <img src={logo} className="img-thumbnail" width={80} />
                    <br />
                    {customer.postedBy.email}
                  </small>
                  &nbsp; &nbsp; &nbsp;
                  <span>{customer.post}</span>
                </div>

                <div class="d-flex w-100 justify-content-between">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <small>{customer.likesCount} Likes</small>
                  <small>{customer.commentsCount} Comments</small>
                  <div></div>
                </div>
              </a>
              <br />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default PostListItems;
