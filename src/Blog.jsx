import React from 'react'

const Blog = ({data , handleDelete}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
        {data.title}
      </h2>
      <p className="text-gray-700">{data.body}</p>
      <button
        onClick={() => handleDelete(data.id)}
        className="px-4 py-1 mt-5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        Delete
      </button>
    </div>
  );
}

export default Blog


