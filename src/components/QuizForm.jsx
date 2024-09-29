import React, { useState, useEffect } from 'react';

// Sample questions

  const questions = [
    // Politics
    { id: 'q1', question: 'Who is the current president of the United States?', answer: 'Joe Biden' },
    { id: 'q2', question: 'In what year did the UK leave the European Union?', answer: '2020' },
    { id: 'q3', question: 'What is the capital city of Canada?', answer: 'Ottawa' },
    { id: 'q4', question: 'Who was the first female Prime Minister of the UK?', answer: 'Margaret Thatcher' },
    
    // Mathematics
    { id: 'q5', question: 'What is the square root of 144?', answer: '12' },
    { id: 'q6', question: 'Solve for x: 5x + 3 = 18', answer: '3' },
    { id: 'q7', question: 'What is the value of Pi (π) up to 3 decimal places?', answer: '3.142' },
    { id: 'q8', question: 'What is 12 * 12?', answer: '144' },
    
    // General Knowledge
    { id: 'q9', question: 'Who invented the telephone?', answer: 'Alexander Graham Bell' },
    { id: 'q10', question: 'Which planet is known as the Red Planet?', answer: 'Mars' },
    { id: 'q11', question: 'Which country is the largest in the world by area?', answer: 'Russia' },
    { id: 'q12', question: 'What is the hardest natural substance on Earth?', answer: 'Diamond' },
    
    // History
    { id: 'q13', question: 'In which year did World War II end?', answer: '1945' },
    { id: 'q14', question: 'Who was the first emperor of China?', answer: 'Qin Shi Huang' },
    { id: 'q15', question: 'What was the name of the ship that famously sank in 1912?', answer: 'Titanic' },
    { id: 'q16', question: 'Who was the first man to step on the moon?', answer: 'Neil Armstrong' },
  
    // Science
    { id: 'q17', question: 'What is the chemical symbol for water?', answer: 'H2O' },
    { id: 'q18', question: 'Who developed the theory of general relativity?', answer: 'Albert Einstein' },
    { id: 'q19', question: 'What gas do plants absorb from the atmosphere?', answer: 'Carbon dioxide' },
    { id: 'q20', question: 'What is the powerhouse of the cell?', answer: 'Mitochondria' },
  
    // Computer Science - OOP
    { id: 'q21', question: 'What does OOP stand for in programming?', answer: 'Object-Oriented Programming' },
    { id: 'q22', question: 'Which of the following is NOT an OOP principle? Inheritance, Encapsulation, Polymorphism, or Compilation?', answer: 'Compilation' },
    { id: 'q23', question: 'What is the process of hiding the implementation details and showing only functionality?', answer: 'Encapsulation' },
    { id: 'q24', question: 'What is an instance of a class in OOP?', answer: 'Object' },
    
    // Computer Science - Data Structures & Algorithms
    { id: 'q25', question: 'What is the time complexity of binary search?', answer: 'O(log n)' },
    { id: 'q26', question: 'Which data structure uses FIFO (First In First Out)?', answer: 'Queue' },
    { id: 'q27', question: 'What sorting algorithm has an average time complexity of O(n^2)?', answer: 'Bubble Sort' },
    { id: 'q28', question: 'What is a linked list?', answer: 'A linear data structure where elements are linked using pointers' },
    
    // Computer Science - SQL
    { id: 'q29', question: 'What does SQL stand for?', answer: 'Structured Query Language' },
    { id: 'q30', question: 'What command is used to retrieve data from a database in SQL?', answer: 'SELECT' },
    { id: 'q31', question: 'Which SQL clause is used to filter the results?', answer: 'WHERE' },
    { id: 'q32', question: 'What SQL command is used to remove a table from the database?', answer: 'DROP TABLE' },
    
    // Computer Science - Web Development
    { id: 'q33', question: 'What does HTML stand for?', answer: 'HyperText Markup Language' },
    { id: 'q34', question: 'What is the purpose of the CSS box model?', answer: 'To define the layout and spacing of elements on a page' },
    { id: 'q35', question: 'Which HTTP method is used to send data to a server to create/update a resource?', answer: 'POST' },
    { id: 'q36', question: 'What does the acronym URL stand for?', answer: 'Uniform Resource Locator' },
  
    // Add more questions in similar categories to reach 200
    // ...
  ];

const QuizForm = () => {
  const [username, setUsername] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState({ id: '', question: '' });
  const [answer, setAnswer] = useState('');

  // Select a random question when the component mounts
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setSelectedQuestion(questions[randomIndex]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/submit-quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, rollNumber, answers: { [selectedQuestion.id]: answer } })
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-group">
        <label>Name:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label>Roll Number:</label>
        <input
          type="text"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label>{selectedQuestion.question}</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Submit Quiz</button>
    </form>
  );
};

export default QuizForm;
