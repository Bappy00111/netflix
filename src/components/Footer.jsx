import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#000000]">
      <div className="flex flex-col md:flex-row py-20 text-white justify-evenly   md:text-start space-y-6 md:space-y-0 px-20 md:px-0">
        <nav className="text-[#d9c3c3] underline text-base  space-y-3">
          <h2 className="-mt-6">Questions? Contact us.</h2>
          <p className="link link-hover">FAQ</p>
          <p className="link link-hover">Investor Relations</p>
          <p className="link link-hover">Privacy</p>
          <p className="link link-hover">Speed Test</p>
          <p className="link link-hover">Netflix Bangladesh</p>
        </nav>
        <nav className="text-[#d9c3c3] underline text-base space-y-3">
          <p className="link link-hover">Help Center</p>
          <p className="link link-hover">Jobs</p>
          <p className="link link-hover">Cookie Preferences</p>
          <p className="link link-hover">Legal Notices</p>
        </nav>
        <nav className="text-[#d9c3c3] underline text-base  space-y-3">
          <p className="link link-hover">Account</p>
          <p className="link link-hover"> Ways to Watch</p>
          <p className="link link-hover">Corporate Information</p>
          <p className="link link-hover">Only on Netflix</p>
        </nav>
        <nav className="text-[#d9c3c3] underline text-base  space-y-3">
          <p className="link link-hover">Media Center</p>
          <p className="link link-hover">Terms of Use</p>
          <p className="link link-hover">Contact Us</p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
