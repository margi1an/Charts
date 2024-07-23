import React, { useRef, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { IoMdLink } from "react-icons/io";
import { PiBuildingOfficeFill } from "react-icons/pi";

import "./Card.css";
import Navbar from "./Navbar";
import Inputs from "./Inputs";
import Card from "./Card";
import toast from "react-hot-toast";

function Form({ getData }) {
  const [datas, setDatas] = useState(null); 
  const textInput = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const username = textInput.current.value.trim();
    if (!username) return;

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const userData = await response.json();
      setDatas(userData); 
      textInput.current.value = "";
      toast.success("User data fetched successfully! ✋😃");
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("User not found. Please enter a valid GitHub username ! ✋🤦‍♂️");
      textInput.current.value = ''
    }
  }


  return (
    <div>
      <Navbar />
      <div className="mt-9 ml-44">
        <form onSubmit={handleSubmit}>
          <label className="input w-96 p-4 justify-center input-bordered flex items-center gap-2">
            <input
              ref={textInput}
              type="text"
              className="grow"
              placeholder="Search GitHub username…"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </form>
      </div>

      {datas && (
        <div className="mt-7">
          <div className="cardss bg-base-200 rounded">
            <div className="flex">
              <div className="ava">
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                    <img src={datas.avatar_url} alt="avatar" />
                  </div>
                </div>
              </div>
              <div className="joined">
                <div className="h1">
                  <h1 className="text-2xl font-bold ml-9">{datas.name || datas.login}</h1>
                </div>
                <div className="h4">
                  <h4>Joined {new Date(datas.created_at).toLocaleDateString()}</h4>
                </div>
              </div>
            </div>
            <div className="m">
              <a href={datas.html_url}>@{datas.login}</a>
            </div>
            <div className="profile">
              <h1>{datas.bio || "This profile has no bio"}</h1>
            </div>
            <div className="Cardsss rounded-lg">
              <div className="body rounded-lg">
                <div className="repos text-center">
                  <h1 className="mb-2">Repos</h1>
                  <h2 className="text-2xl font-bold">{datas.public_repos}</h2>
                </div>
                <div className="repos text-center">
                  <h1 className="mb-2">Followers</h1>
                  <h2 className="text-2xl font-bold">{datas.followers}</h2>
                </div>
                <div className="repos text-center">
                  <h1 className="mb-2">Following</h1>
                  <h2 className="text-2xl font-bold">{datas.following}</h2>
                </div>
              </div>
              <div className="dv">
                <div className="first">
                  <div className="one">
                    <div className="img">
                      <IoMdPin className="h-7 w-7"></IoMdPin>
                    </div>
                    <div className="text">
                      <h1>{datas.location || "Location no !"}</h1>
                    </div>
                  </div>
                  <div className="two">
                    <div className="img">
                      <FaTwitter className="h-7 w-7"></FaTwitter>
                    </div>
                    <div className="text">
                      <h1>{datas.twitter_username || "Twitter no !"}</h1>
                    </div>
                  </div>
                </div>
                <div className="three">
                  <div className="threee">
                    <div className="img">
                      <IoMdLink className="h-7 w-7"></IoMdLink>
                    </div>
                    <div className="text">
                      <h1>{datas.blog || "Blog no !"}</h1>
                    </div>
                  </div>
                  <div className="four">
                    <div className="img">
                      <PiBuildingOfficeFill className="h-7 w-7"></PiBuildingOfficeFill>
                    </div>
                    <div className="text">
                      <h1>{datas.company || "Company no !"}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
