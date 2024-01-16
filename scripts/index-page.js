import newBandSiteApi from "./band-site-api.js";

// 1. Bring in post section
const userCommentParent = document.querySelector(".post");

//  2. function form
const createCommentEl = (name, date, comment, container, commentId) => {
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
  h3El.innerText = name;

  // 6. P Element for Date
  const paragraphEl = document.createElement("p");
  paragraphEl.classList.add("post__date");
  paragraphEl.innerText = date;

  //  Create a ticket Btn and append
  const ticketBtn = document.createElement("button");
  ticketBtn.classList.add("post__btn");
  ticketBtn.innerText = "DELETE";
  ticketBtn.addEventListener("click", () => {
    deleteComments(commentId);
  });

  //  7. create the comment  p
  const userPostEl = document.createElement("p");
  userPostEl.classList.add("post__text");
  userPostEl.innerText = comment;
  userPostEl.appendChild(ticketBtn);

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

  container.appendChild(postContainerEl);
};

// Get comment from API
async function getUserCommentAPI() {
  try {
    const response = await newBandSiteApi.getComments();
    response.forEach((item) => {
      const timestamp = item.timestamp;
      const newTimestamp = new Date(timestamp);

      const data = createCommentEl(
        item.name,
        newTimestamp.toDateString(),
        item.comment,
        userCommentParent,
        item.id
      );
      return data;
    });
  } catch (error) {
    console.error(error);
  }
}

// Rerenders the page
const commentList = (usersArray) => {
  userCommentParent.innerHTML = "";

  usersArray.forEach((item) => {
    createCommentEl(
      item.name,
      new Date(item.timestamp).toDateString(),
      item.comment,
      userCommentParent,
      item.id
    );
  });
};

const userForm = document.querySelector(".form__right");

// POST A NEW COMMENT
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const newComment = {
      name: e.target.username.value,
      comment: e.target.comment.value,
    };

    const response = await newBandSiteApi.postComment(newComment);
    const newItem = response.data;
    const allPosts = await newBandSiteApi.getComments();

    commentList(allPosts);

    e.target.reset();
  } catch (error) {
    console.error(error);
  }
});

// Delete a comment
const deleteComments = async (commentId) => {
  try {
    const response = await newBandSiteApi.deleteComment(commentId);
    const allPosts = await newBandSiteApi.getComments();
    commentList(allPosts);
  } catch (error) {
    console.error(error);
  }
};

getUserCommentAPI();
