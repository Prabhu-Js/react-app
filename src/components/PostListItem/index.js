import React, { useState } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints.js";
import logo from "../../logos/profile-img.png";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { postList } from "../../mock/postList";

const PostListItems = () => {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  const getPost = () => {
    axios
      .get(Endpoints.GET_POSTS_URL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="post-list">
      <h3 className="text-center"></h3>

      {/* {users.map((customer) => ( */}
      {postList.map((customer) => (
        <div key={customer.id} className="container">
          <div class="list-group">
            <a
              href="#"
              onClick={() => {
                navigate(`/postDetail/${customer.id}`);
              }}
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
};
export default PostListItems;
