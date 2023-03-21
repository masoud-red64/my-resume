const filterArray = (array, filterMethod) => {
  let outputArray = [];
  switch (filterMethod) {
    case "html-css": {
      outputArray = array.filter((work) => work.text === "HTML&CSS");
      break;
    }
    case "js": {
      outputArray = array.filter((work) => work.text === "جاوااسکریپت");
      break;
    }
    case "react": {
      outputArray = array.filter((work) => work.text === "ریکت");
      break;
    }
    default: {
      outputArray = array;
    }
  }

  return outputArray;
};

export { filterArray };
