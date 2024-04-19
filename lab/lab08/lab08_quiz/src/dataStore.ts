let data: object = {
  quiz: [
    {
      // quizId: number
      // quizTitle: string
      // quizSynopsis: string
      // questions: array of object
    }
  ],
  questions: [
    {
      // questionId: number
      // questionString: string
      // questionType: 'single' or 'multiple'
      // answers: [{ isCorrect: boolean, answerString: string }]
    }
  ],
  quizId: 1,
  questionId: 1,
};

// Use get() to access the data
function getData() {
  return data;
}

// Use set(newData) to pass in the entire data object, with modifications made
function setData(newData: object) {
  data = newData;
}

export {
  getData,
  setData
};
