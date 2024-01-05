// 1. Create a form element

// const userForm = () => {
//   const form = document.createElement("form");
//   form.classList.add("form__right");
//   form.appendChild(usernameDiv);
//   form.appendChild(textareaDiv);
//   form.appendChild(btnDiv);
// };

// 2. Create a text input

// const createNameInput = () => {
// Input
// const createUserName = document.createElement("input");
// createUserName.classList.add("form__input");
// createUserName.setAttribute("type", "text");
// createUserName.setAttribute("id", "username");
// createUserName.setAttribute("name", "username");
// createUserName.setAttribute("placeholder", "Enter your name");
// };

//  3. bring in  username container (DIV)

// const usernameDiv = document.querySelector(".form__username-div");
//  usernameDiv.appendChild(
//    createInputLabel("username", "NAME", "form__subheader")
//  );

// 4.  Create a textarea
// const createTextarea = () => {
// const createTextarea = document.createElement("textarea");
// createTextarea.classList.add("form__textarea");
// createTextarea.setAttribute("id", "comment");
// createTextarea.setAttribute("name", "comment");
// createTextarea.setAttribute("placeholder", "Add a new comment");
// textarea.setAttribute("required");
// };

// 5. bring in  textarea container (DIV)

// const textareaDiv = document.querySelector(".form__comment-div");
// textareaDiv.appendChild(
//   createInputLabel("comment", "COMMENT", "form__subheader")
// );
// textareaDiv.appendChild(createTextarea);

// 6. Create reuseable label
// const createInputLabel = (inputAtt, labelInfo, addClass) => {
//   const userLabel = document.createElement("label");
//   userLabel.classList.add(addClass);
//   userLabel.setAttribute("for", inputAtt);
//   userLabel.innerText = labelInfo;
// };

// 7.  Create a submit button

// const createBtn = (className, btnText) => {
//   const btn = document.createElement("button");
//   btn.classList.add(className);
//   btn.setAttribute("type", "submit");
//   btn.innerText = btnText;
// };

// 8. bring in  button container (DIV)
// const btnDiv = document.querySelector(".form__btn-div");
//  btnDiv.appendChild(createBtn("form__btn"));
// btnDiv.appendChild(createBtn);

// OR. Bring in the form element
const bandsiteForm = document.querySelector(".form__right");

// 1. Create the text input
// const createUserName = document.createElement("input");
// createUserName.classList.add("form__input");
// createUserName.setAttribute("type", "text");
// createUserName.setAttribute("id", "username");
// createUserName.setAttribute("name", "username");
// createUserName.setAttribute("placeholder", "Enter your name");

// 2. bring in  username container (DIV)
// const usernameDiv = document.querySelector(".form__username-div");
// usernameDiv.appendChild(createUserName);

// // 6.  Create a textarea
// const createTextareai = () => {
//   const createTextarea = document.createElement("textarea");
//   createTextarea.classList.add("form__textarea");
//   createTextarea.setAttribute("id", "comment");
//   createTextarea.setAttribute("name", "comment");
//   createTextarea.setAttribute("placeholder", "Add a new comment");
//   createTextarea.setAttribute("required", "");
//   return createTextarea;
// };

// 3. bring in  textarea container (DIV)
// const textareaDiv = document.querySelector(".form__comment-div");
// console.log(textareaDiv);
// // textareaDiv.appendChild(createTextarea);
// textareaDiv.appendChild(createTextareai());

// const createBtn = document.createElement("button");
// createBtn.classList.add("form__btn");
// createBtn.setAttribute("type", "submit");
// createBtn.innerText = "COMMENT";

// 4. bring in  button container (DIV)
// const btnDiv = document.querySelector(".form__btn-div");
// btnDiv.appendChild(createBtn);

// append child
// bandsiteForm.appendChild(usernameDiv);
// bandsiteForm.appendChild(textareaDiv);
// // bandsiteForm.appendChild(btnDiv);

// console.log(bandsiteForm);
