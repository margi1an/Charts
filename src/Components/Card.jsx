import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { IoMdLink } from "react-icons/io";
import { PiBuildingOfficeFill } from "react-icons/pi";

import "./Card.css";

function Card() {
  return (
    <div className=" mt-7">
      <div className="cardss bg-base-200 rounded">
        <div className="flex">
          <div className="ava">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div className="joined">
            <div className="h1">
              <h1 className="text-2xl font-bold ml-9 ">The Octocat</h1>
            </div>
            <div className="h4">
              <h4>Joined 25 Jan 2011</h4>
            </div>
          </div>
        </div>
        <div className="m">
          <a
            href="
          #"
          >
            @octocat
          </a>
        </div>
        <div className="profile">
          <h1>This profile has no bio</h1>
        </div>
        <div className="Cardsss rounded-lg">
          <div className="body rounded-lg">
            <div className="repos text-center">
              <h1 className="mb-2">Repos</h1>
              <h2 className="text-2xl font-bold">8</h2>
            </div>
            <div className="repos text-center">
              <h1 className="mb-2">Followers</h1>
              <h2 className="text-2xl font-bold">8</h2>
            </div>{" "}
            <div className="repos text-center">
              <h1 className="mb-2">Following</h1>
              <h2 className="text-2xl font-bold">8545</h2>
            </div>
          </div>
          <div className="dv">
            <div className="first">
              <div className="one">
                <div className="img">
                  <IoMdPin className="h-7 w-7"></IoMdPin>
                </div>
                <div className="text">
                  <h1>San Fransico</h1>
                </div>
              </div>
              <div className="two">
                <div className="img">
                  <FaTwitter className="h-7 w-7"></FaTwitter>
                </div>
                <div className="text">
                  <h1>Not Available</h1>
                </div>
              </div>
            </div>
            <div className="three">
              <div className="threee">
                <div className="img">
                  <IoMdLink className="h-7 w-7"></IoMdLink>
                </div>
                <div className="text">
                  <h1>https://github.blog</h1>
                </div>
              </div>

              <div className="four">
                <div className="img">
                  <PiBuildingOfficeFill className="h-7 w-7"></PiBuildingOfficeFill>
                </div>
                <div className="text">
                  <h1>@git hub link</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
