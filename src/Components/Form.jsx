import React, { useRef, useState, useEffect } from "react";
import { FaTwitter } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { IoMdLink } from "react-icons/io";
import { PiBuildingOfficeFill } from "react-icons/pi";
import toast from "react-hot-toast";
import Piechart from "./Piechart"; 
import "./Card.css";
import Navbar from "./Navbar";

function Form({ getData }) {
  const [datas, setDatas] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [followersModal, setFollowersModal] = useState(false);
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
      toast.error(
        "User not found. Please enter a valid GitHub username ! ✋🤦‍♂️"
      );
      textInput.current.value = "";
    }
  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openFollowersModal = () => {
    setFollowersModal(true);
  };

  const closeFollowersModal = () => {
    setFollowersModal(false);
  };

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
                  <h1 className="text-2xl font-bold ml-9">
                    {datas.name || datas.login}
                  </h1>
                </div>
                <div className="h4">
                  <h4>
                    Joined {new Date(datas.created_at).toLocaleDateString()}
                  </h4>
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
                  <button onClick={openModal} className="text-2xl font-bold">
                    {datas.public_repos}
                  </button>
                  {showModal && (
                    <Modal repos={datas.repos_url} closeModal={closeModal} />
                  )}
                </div>
                <div className="repos text-center">
                  <h1 className="mb-2">Followers</h1>
                  <button
                    onClick={openFollowersModal}
                    className="text-2xl font-bold"
                  >
                    {datas.followers}
                  </button>
                  {followersModal && (
                    <FollowersModal
                      followersUrl={datas.followers_url}
                      closeModal={closeFollowersModal}
                    />
                  )}
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

      {datas && <Piechart datas={datas} />}
    </div>
  );
}

export default Form;

function Modal({ repos, closeModal }) {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await fetch(repos);
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const repoData = await response.json();
        setRepositories(repoData);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    }

    fetchRepositories();
  }, [repos]);

  return (
    <dialog open className="modal">
      <div className="modal-box">
        <button onClick={closeModal} className="modal-close btn btn-error mb-4">
          Close
        </button>
        <h3 className="font-bold text-lg">Repositories</h3>
        <ul className="repo-list flex gap-9 flex-wrap ">
          {repositories.map((repo) => (
            <li key={repo.id} className="mb-4 btn btn-primary ">
              <a href={repo.html_url}>{repo.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  );
}

function FollowersModal({ followersUrl, closeModal }) {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    async function fetchFollowers() {
      try {
        const response = await fetch(followersUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch followers");
        }
        const followersData = await response.json();
        setFollowers(followersData);
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    }

    fetchFollowers();
  }, [followersUrl]);

  return (
    <dialog open className="modal">
      <div className="modal-box">
        <button onClick={closeModal} className="modal-close btn btn-error mb-4">
          Close
        </button>
        <h3 className="font-bold text-lg">Followers</h3>
        <ul className="follower-list flex gap-9 flex-wrap">
          {followers.map((follower) => (
            <li key={follower.id} className="mb-4 btn btn-primary">
              <a href={follower.html_url}>{follower.login}</a>
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  );
}
