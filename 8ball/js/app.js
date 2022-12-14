/*
Create an input field for users to ask a question
Create a label for your input field telling your user to "Ask me anything!"
Create an "ask" button (this will run the function that outputs a random magic 8 ball image)
Create a div with an id of "answers" that you will insert the images into using js
Create an "ask" function that when clicked, will choose a random 8ball image and insert it into your "answers" div
Replace the input field with the user's question when displaying the answer
Style your page any way you like
Activate Github Pages for your project
*/

const ask = () => {
  const result = '';
  const answers = [
    'Definitely!',
    'Very likely!',
    'Hm, possibly.',
    "Ehh, it's 50/50",
    'Seems unlikely.',
    "There's a small, small, small chance.",
    'Nope! No way, not happening. Sorry bud.',
    ];
    
    

  return result;
};

const createDOM = () => {
  const qLabel = createEl('label', 'Ask a question!', []);

  const qInput = createEl('input', '', []);
  qInput.setAttribute('type', 'text');

  const askButton = createEl('button', 'Ask', []);

  const answersDiv = createEl('div', '', []);

  document.body.append(qLabel);
  document.body.append(qInput);
  document.body.append(askButton);
  document.body.append(answersDiv);
};

createEl = (el, text, classes = []) => {
  let element = document.createElement(el);
  element.textContent = text;
  if (classes.length !== 0) {
    classes.forEach((c) => {
      element.classList.add(c);
    });
  }

  return element;
};

createDOM();
