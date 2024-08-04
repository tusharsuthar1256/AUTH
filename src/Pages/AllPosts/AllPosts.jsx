import React, { useState } from 'react';
import './AllPosts.css';

const postsData = [
  {
    id: 1,
    title: "What is React?",
    answer: "React is a JavaScript library for building user interfaces. It allows you to build single-page applications with a component-based architecture."
  },
  {
    id: 2,
    title: "How does useState work?",
    answer: "The useState hook allows you to add state to functional components. It returns a state variable and a function to update it."
  },
  {
    id: 3,
    title: "What is JSX?",
    answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML and is used with React to describe what the UI should look like."
  },
  {
    id: 4,
    title: "What is React?",
    answer: "React is a JavaScript library for building user interfaces. It allows you to build single-page applications with a component-based architecture."
  },
  {
    id: 5,
    title: "How does useState work?",
    answer: "The useState hook allows you to add state to functional components. It returns a state variable and a function to update it."
  },
  {
    id: 6,
    title: "What is JSX?",
    answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML and is used with React to describe what the UI should look like."
  },
  {
    id: 7,
    title: "What is React?",
    answer: "React is a JavaScript library for building user interfaces. It allows you to build single-page applications with a component-based architecture."
  },
  {
    id: 8,
    title: "How does useState work?",
    answer: "The useState hook allows you to add state to functional components. It returns a state variable and a function to update it."
  },
  {
    id: 9,
    title: "What is JSX?",
    answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML and is used with React to describe what the UI should look like."
  }
  // Add more posts as needed
];

const AllPosts = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="posts-container">
      {postsData.map(post => (
        <div
          key={post.id}
          className={`post-card ${expandedId === post.id ? 'expanded' : ''}`}
          onClick={() => toggleExpand(post.id)}
        >
          <h2 className="post-title">{post.title}</h2>
          {expandedId === post.id && (
            <p className="post-answer">{post.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
