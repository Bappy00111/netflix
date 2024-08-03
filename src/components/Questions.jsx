import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

const QuestionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#2d2d2d] w-full md:w-2/3 mx-auto px-4 py-4 md:py-6 mb-2">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <span className="text-xl md:text-2xl">{question}</span>
        <span>
          {isOpen ? (
            <HiOutlineXMark className="text-3xl" />
          ) : (
            <AiOutlinePlus className="text-3xl" />
          )}
        </span>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mt-4 text-white">{answer}</div>
      </div>
    </div>
  );
};

const Questions = () => {
  const faqData = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
    },
  ];

  return (
    <div>
      <div className="bg-[#000000] text-white py-10 space-y-6 px-6">
        <h1 className="text-3xl md:text-5xl font-bold md:tracking-wide text-center">
          Frequently Asked
          <span className="md:hidden block mt-2"></span> Questions
        </h1>
        {faqData.map((item, index) => (
          <QuestionItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
        <p className="text-center text-xl mb-0">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row mt-5 gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="px-14 py-2 rounded-md bg-black bg-opacity-20 border border-white h-12 sm:h-auto"
            />
            <button className="bg-[#e50914] text-white flex items-center rounded px-2 py-2 gap-2 justify-center">
              <span>Get Started</span>
              <span>
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="h-3 bg-slate-800"></div>
    </div>
  );
};

export default Questions;
