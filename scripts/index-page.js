// You must have an array in JavaScript with 3 default comment objects to start. Comments must have a name, a timestamp, and the comment text.

const userComments = [
  {
    userName: "Connor Walton",
    date: "02/17/2021",
    userComment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    userName: "Emilie Beach",
    date: "01/09/2021",
    userComment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    userName: "Miles Acosta",
    date: "12/20/2020",
    userComment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// 1. Bring in post section
const userCommentParent = document.querySelector(".post");

//  2. function form\
const createCommentEl = (item) => {
  // 3.  Create img div
  const imgDivEl = document.createElement("div");
  imgDivEl.classList.add("post__img");

  // 4. Create img div-container
  const imgContainerEl = document.createElement("div");
  imgContainerEl.classList.add("post__img-div");
  imgContainerEl.appendChild(imgDivEl);

  // 5. Heading 3 Element
  const h3El = document.createElement("h3");
  h3El.classList.add("post__title");
  h3El.innerText = item.userName;

  // 6. P Element for Date
  const paragraphEl = document.createElement("p");
  paragraphEl.classList.add("post__date");
  paragraphEl.innerText = item.date;

  //  7. create the comment  p
  const userPostEl = document.createElement("p");
  userPostEl.classList.add("post__text");
  userPostEl.innerText = item.userComment;

  //   8. Create Div for post top flex
  const divPostTitleEL = document.createElement("div");
  divPostTitleEL.classList.add("post__top");
  divPostTitleEL.appendChild(h3El);
  divPostTitleEL.appendChild(paragraphEl);

  // 9.  Post right container
  const sectionContainer = document.createElement("section");
  sectionContainer.classList.add("post__right");
  sectionContainer.appendChild(divPostTitleEL);
  sectionContainer.appendChild(userPostEl);

  // 10. Post Container
  const postContainerEl = document.createElement("section");
  postContainerEl.classList.add("post__container");
  postContainerEl.appendChild(imgContainerEl);
  postContainerEl.appendChild(sectionContainer);

  userCommentParent.appendChild(postContainerEl);
};

userComments.forEach((team) => {
  createCommentEl(team);
});

// FORM ELEMENT

const userForm = document.querySelector(".form__right");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e.target.username.value);
  console.log(e.target.comment.value);

  const newComment = {
    userName: e.target.username.value,
    date: e.target.date.value,
    userComment: e.target.comment.value,
  };

  userComments.unshift(newComment);

  createCommentEl(newComment);
});
