import "./App.css";
import React, { Component } from "react";
import SearchBar from "./components/searchBar";
import UserCard from "./components/userCard";
import ErrorMessage from "./components/errorMessage";

import profileImage from "./images/profile-placeholder.jpg";

class App extends Component {
  constructor() {
    const baseData = {
      name: "Big Name",
      login: "usertag",
      bio: "Short Description",
      created_at: "2021-10-20T21:53:06Z",
      avatar_url: profileImage,
      public_repos: 1991,
      followers: 252,
      following: 777,
      location: "The Moon",
      twitter_username: "twitteruser",
      blog: "https://www.blog.com",
      company: "Big Company Ltd.",
    };
    super();
    this.state = {
      user: baseData,
      togInd: parseInt(localStorage.getItem("theme") ?? 0), //dark mode default
    };
  }

  updateData = (data) => {
    if (data.message === "Not Found") {
      this.showPop();
    } else {
      const {
        name,
        login,
        bio,
        created_at,
        avatar_url,
        public_repos,
        followers,
        following,
        location,
        twitter_username,
        blog,
        company,
      } = data;

      this.setState(() => {
        const newData = {
          name,
          login,
          bio,
          created_at,
          avatar_url,
          public_repos,
          followers,
          following,
          location,
          twitter_username,
          blog,
          company,
        };
        for (let p in newData) {
          if (!newData[p] && newData[p] !== 0) {
            newData[p] = "Not Available";
          }
        }
        return {
          user: newData,
        };
      });
    }
  };

  handleToggle = () => {
    this.setState({ togInd: (this.state.togInd + 1) % 2 });
    localStorage.setItem("theme", (this.state.togInd + 1) % 2);
  };

  showPop = () => {
    let errorBox = document.querySelector(".error");
    errorBox.style.width = "100%";
    errorBox.style.height = "100%";
  };

  hidePop = () => {
    let errorBox = document.querySelector(".error");
    errorBox.style.width = "0px";
    errorBox.style.height = "0px";
  };

  toggleImg = [
    [
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        enableBackground="new 0 0 512 512"
        fill="white"
      >
        <g>
          <path d="m256,432.3c-11.3,0-20.4,9.1-20.4,20.4v27.9c0,11.3 9.1,20.4 20.4,20.4s20.4-9.1 20.4-20.4v-27.9c0-11.3-9.1-20.4-20.4-20.4z" />
          <path d="m256,102.5c-84.6,0-153.5,68.8-153.5,153.5 0,84.6 68.8,153.5 153.5,153.5 84.6,0 153.5-68.8 153.5-153.5 0-84.6-68.9-153.5-153.5-153.5zm0,266.1c-62.1,0-112.6-50.5-112.6-112.6 0-62.1 50.5-112.6 112.6-112.6s112.6,50.5 112.6,112.6c0,62.1-50.5,112.6-112.6,112.6z" />
          <path d="M256,79.7c11.3,0,20.4-9.1,20.4-20.4V31.4c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4v27.9    C235.6,70.6,244.7,79.7,256,79.7z" />
          <path d="m480.6,235.6h-27.9c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h27.9c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z" />
          <path d="m59.3,235.6h-27.9c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h27.9c11.3,0 20.4-9.1 20.4-20.4 1.42109e-14-11.3-9.1-20.4-20.4-20.4z" />
          <path d="m409.5,131.4l19.7-19.7c8-8 8-20.9 0-28.9-8-8-20.9-8-28.9,0l-19.7,19.7c-8,8-8,20.9 0,28.9s20.9,7.9 28.9,0z" />
          <path d="m102.5,380.6l-19.7,19.7c-8,8-8,20.9 0,28.9 8,8 20.9,8 28.9,0l19.7-19.7c8-8 8-20.9 0-28.9s-20.9-7.9-28.9,0z" />
          <path d="m409.5,380.6c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l19.7,19.7c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-19.7-19.7z" />
          <path d="m102.5,131.4c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-19.7-19.7c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l19.7,19.7z" />
        </g>
      </svg>,
      "light",
    ],
    [
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 49.739 49.739"
        fill="rgb(30, 43, 72)"
        strokeWidth="10px"
      >
        <path
          d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
   c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
   c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
   C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253
   c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748
   c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z"
        />
      </svg>,
      "dark",
    ],
  ];

  render() {
    let nD = new Date(this.state.user.created_at);
    const result = `${nD.toLocaleString("default", {
      month: "short",
    })} ${nD.toLocaleString("default", {
      day: "numeric",
    })}, ${nD.toLocaleString("default", {
      year: "numeric",
    })}`;

    return (
      <main className={this.state.togInd ? "light" : "dark"}>
        <section className="error" onClick={this.hidePop}>
          <ErrorMessage themeInd={this.state.togInd} />
        </section>
        <div className={`App`}>
          <div className="top">
            <h3 className="app-name">devfinder</h3>
            <div className="toggler" onClick={this.handleToggle}>
              <span>{this.toggleImg[this.state.togInd][1]}</span>
              {this.toggleImg[this.state.togInd][0]}
            </div>
          </div>
          <SearchBar handleSubmit={this.updateData} />
          <UserCard info={this.state.user} dateInfo={result} />
        </div>
      </main>
    );
  }
}

export default App;
