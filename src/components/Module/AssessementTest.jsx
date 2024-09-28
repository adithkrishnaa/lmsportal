
import { useState } from "react";

const AssessmentTest = () => {
  const [questions] = useState([
    {
      question: "Assessment Question 1",
      options: ["A", "B", "C", "D"],
      answer: "A",
    },
    // Add 49 more questions
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, ] = useState(20 * 60); // 20 minutes in seconds

  const handleSelectAnswer = (questionIndex, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length === questions.length) {
      alert("Are you sure you want to submit?");
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  return (
    <div>
      <h2>Assessment: 50 Questions</h2>
      <div>
        <p>
          Time Remaining: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
        </p>
        <p>{questions[currentQuestion].question}</p>
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelectAnswer(currentQuestion, option)}>
            {option}
          </button>
        ))}
        <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
          Next
        </button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AssessmentTest;
