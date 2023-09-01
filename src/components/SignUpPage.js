import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-100 p-10">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block font-bold mb-2">Name:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Email:</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Subject:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              name="subject"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Contact Number:</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded"
              name="contactNumber"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Message:</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white animate-bounce py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-1/2 overflow-hidden">
        <img
          src="./images/svg.svg"
          alt="Illustration"
          className="animate-spin object-cover h-full transform transition-transform duration-1000"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
