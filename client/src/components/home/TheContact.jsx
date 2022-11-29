import React, { useState } from "react";

const TheContact = () => {
    const [emaiInput, setEmailInput] = useState("");

    const inputHandler = (e) => {
        setEmailInput(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        setEmailInput("");
    };

  return (
    <div className="w-full pt-24 pb-44 px-10">
      <div className="w-[85%] mx-auto">
        <h3 className="text-4xl font-bold tracking-wider mb-8">
          Join our Newsletter And Get 20% OFF
        </h3>
        <div className="flex flex-col lg:flex-row justify-between space-y-4">
          <p className="text-gray-500 leading-loose lg:w-1/2">
          Buying a new set of car mats can greatly improve 
          your ride interior decor. Toss away your old, 
          dirty mat to replace with squeaky clean car floor
           mats to start fresh. Muddy stains and footprints 
           don’t paint a good picture. An unclean and filthy 
           car floor mat can bring down the complete aesthetic
            of your vehicle. Consider replacing it when the car 
            mats no longer offer cleanliness.
          </p>
          <div className="">
            <form>
              <div className="flex">
                <input
                  type="email"
                  name="subscribe"
                  id="subscribe"
                  onChange={inputHandler}
                  value={emaiInput}
                  placeholder="Enter your email"
                  className="form-input rounded-l bg-gray-100 shadow-lg"
                />
                <button
                  type="submit"
                  onClick={submitForm}
                  className="px-5 bg-primary text-white rounded-r shadow-lg capitalize"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheContact;
