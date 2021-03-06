import React from "react";
import profile from "../images/profile.png";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import {FaUserAlt } from "react-icons/fa"
import { useMediaQuery } from "react-responsive";

const BigDesktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1501 })
  return isDesktop ? children : null
}
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1500 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

export default function CustomCard({ name, title, social: { url, github, dribbble, twitter, email } }) {
  return (
    <div>
      <BigDesktop>
        <div className="w-full">
          <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
            <div className="">
              <img
                className="w-32 mx-auto shadow-xl rounded-full"
                src={profile}
                alt="Profile face"
              />
            </div>
            <div className="text-center mt-5">
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                {name}
              </p>
              <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                {title}
              </p>
              <div className="flex align-center justify-center mt-4">
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                  href={github}
                >
                  <FaGithub />
                  <span class="sr-only">Github</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                  href={url}
                >
                  <FaGithub />
                  <span class="sr-only">URL</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
                  href={dribbble}
                >
                  <FaDribbble />
                  <span class="sr-only">Dribble</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                  href={twitter}
                >
                  <FaTwitter />
                  <span class="sr-only">Twitter</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
                  href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
                >
                  <FaRegEnvelope />
                  <span class="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
    </BigDesktop>
    <Desktop>
        <div className="w-full">
          <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
            <div className="">
              <img
                className="w-32 mx-auto shadow-xl rounded-full"
                src={profile}
                alt="Profile face"
              />
            </div>
            <div className="text-center mt-5">
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                {name}
              </p>
              <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                {title}
              </p>
              <div className="flex align-center justify-center mt-4">
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                  href={github}
                >
                  <FaGithub />
                  <span class="sr-only">Github</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                  href={url}
                >
                  <FaGithub />
                  <span class="sr-only">URL</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
                  href={dribbble}
                >
                  <FaDribbble />
                  <span class="sr-only">Dribble</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                  href={twitter}
                >
                  <FaTwitter />
                  <span class="sr-only">Twitter</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
                  href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
                >
                  <FaRegEnvelope />
                  <span class="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
    </Desktop>
    <Tablet>
      <div style={{maxWidth:250, height:'100%'}}>
        <div 
          style={{maxWidth:250, height:'100%'}}
          className="w-full">
          <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
            <div className="">
              <img
                className="w-32 mx-auto shadow-xl rounded-full"
                src={profile}
                alt="Profile face"
              />
            </div>
            <div className="text-center mt-5">
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                {name}
              </p>
              <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-3 w-auto inline-block border-b-2">
                {title}
              </p>
              <div className="flex align-center justify-center mt-4">
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                  href={github}
                >
                  <FaGithub />
                  <span class="sr-only">Github</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                  href={url}
                >
                  <FaGithub />
                  <span class="sr-only">URL</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
                  href={dribbble}
                >
                  <FaDribbble />
                  <span class="sr-only">Dribble</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                  href={twitter}
                >
                  <FaTwitter />
                  <span class="sr-only">Twitter</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
                  href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
                >
                  <FaRegEnvelope />
                  <span class="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
    </Tablet>
    <Mobile>
    <div style={{maxWidth:200, height:200}}>
        <div
          className="w-full">
          <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
            <div className="">
              <img
                className="w-32 mx-auto shadow-xl rounded-full"
                src={profile}
                alt="Profile face"
              />
            </div>
            <div className="text-center mt-5">
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                {name}
              </p>
              <div className="text-center mt-5">

              <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px- w-auto inline-block border-b-2">
                {title}
              </p>
              </div>
              <div className="flex align-center justify-center mt-4">
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                  href={github}
                >
                  <FaGithub />
                  <span class="sr-only">Github</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                  href={url}
                >
                  <FaGithub />
                  <span class="sr-only">URL</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
                  href={dribbble}
                >
                  <FaDribbble />
                  <span class="sr-only">Dribble</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                  href={twitter}
                >
                  <FaTwitter />
                  <span class="sr-only">Twitter</span>
                </a>
                <a
                  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
                  href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
                >
                  <FaRegEnvelope />
                  <span class="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
    </Mobile>
    </div>
    
  );
}


