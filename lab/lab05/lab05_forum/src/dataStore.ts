let data: object = {
  post: [

  ],
  comments: [

  ],
};

function getData() {
  return data;
}

function setData(newData: object) {
  data = newData;
}

export {
  getData,
  setData
};
