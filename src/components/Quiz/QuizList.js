// src/components/Quiz/QuizList.js

import React from 'react';

const QuizList = ({ quizzes }) => {
  return (
    <div>
      <h2>Available Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
            {/* Add more details as needed */}
            <button>Start Quiz</button> {/* Example action button */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
