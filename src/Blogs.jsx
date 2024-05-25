import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./Blog";

const Blogs = () => {
  const [isAdd, setAdd] = useState(false);
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "What Was React?",
      body: "React is a JavaScript library used for building real-world applications without wasting a ton of time on similar code. It provides components that can be reused like building blocks.",
    },
    {
      id: 2,
      title: "The Benefits of Using React",
      body: "React allows developers to create reusable components, making the code more modular and easier to maintain. It also provides a virtual DOM (Document Object Model) which improves performance by minimizing the number of changes made to the actual DOM.",
    },
    {
      id: 3,
      title: "React's Virtual DOM Explained",
      body: "React uses a virtual DOM, which is a lightweight copy of the actual DOM. When the state of a component changes, React updates the virtual DOM and compares it with the previous version. It then calculates the minimum number of changes needed and applies them to the actual DOM, improving performance.",
    },
    {
      id: 4,
      title: "React's Component Lifecycle Methods",
      body: "React components have lifecycle methods that allow developers to perform actions at specific points in the component's lifecycle. These methods include mounting, updating, and unmounting.",
    },
    {
      id: 5,
      title: "React's State Management",
      body: "React uses state to manage the internal data of a component. When the state changes, React re-renders the component and its children. State can also be managed globally using libraries like Redux or Context API.",
    },
    {
      id: 6,
      title: "React's Hooks",
      body: "React Hooks are functions that allow you to use state and other React features without writing class components. They were introduced in React 16.8 and have become a popular way to write React code.",
    },
    {
      id: 7,
      title: "React's Routing",
      body: "React Router is a popular library for handling routing in React applications, enabling the creation of single-page applications (SPAs) by managing URLs and rendering components based on the URL path.",
    },
    {
      id: 8,
      title: "React's Testing",
      body: "React provides a testing utility called React Testing Library that simplifies testing React components by focusing on behavior rather than implementation details.",
    },
    {
      id: 9,
      title: "React's Server-Side Rendering (SSR)",
      body: "React supports server-side rendering, allowing the initial render of a component to be done on the server, which can enhance performance and SEO for certain applications.",
    },
    {
      id: 10,
      title: "React's Performance Optimization",
      body: "React offers various methods to optimize performance, including shouldComponentUpdate, PureComponent, and memoization techniques like React.memo and useMemo hooks.",
    },
  ]);

  const notify = () => toast("Blog Deleted ✅ ");
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
    notify();
  };

  const addTask = () => {
    setAdd((val) => !val);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold mb-12 text-center text-gray-900">
        Blog App
      </h1>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      {blogs.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-lg rounded-lg p-8 mb-8  hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
        >
          <Blog data={item} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
