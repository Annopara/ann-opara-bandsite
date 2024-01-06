const ticketObject = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },

  {
    date: "Tue Sept 21 2021 ",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Oct 15 2021 ",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },

  {
    date: "Sat Nov 06 2021 ",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },

  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

// 1. bring in the gateway

//  2. TICKET CARD COMPONENTS
const CreateTicketEl = (subheader, text) => {
  const pSubheaderEL = document.createElement("p");
  pSubheaderEL.classList.add("tickets__subheader");
  pSubheaderEL.innerText = subheader;

  const pTicketTextEl = document.createElement("p");
  pTicketTextEl.classList.add("tickets__text");
  pTicketTextEl.innerText = text;

  const divContainerEl = document.createElement("div");
  divContainerEl.classList.add("tickets__card");
  divContainerEl.appendChild(pSubheaderEL);
  divContainerEl.appendChild(pTicketTextEl);

  return divContainerEl;
};

// Appending to the parent container

const appendToParentContainer = () => {
  const ticketParentContainer = document.querySelector(".tickets");
  ticketObject.forEach((item) => {
    ticketParentContainer.appendChild(CreateTicketEl("DATE", item.date));

    ticketParentContainer.appendChild(CreateTicketEl("VENUE", item.venue));

    ticketParentContainer.appendChild(
      CreateTicketEl("LOCATION", item.location)
    );

    // Create a ticket Btn and append
    const ticketBtn = document.createElement("button");
    ticketBtn.classList.add("tickets__btn");
    ticketBtn.innerText = "BUY TICKETS";

    ticketParentContainer.appendChild(ticketBtn);

    // if (
    //   ticketObject.name !== item.name[0] &&
    //   ticketObject.date !== item.date[0] &&
    //   ticketObject.location !== item.location
    // ) {
    // }
  });

  return ticketParentContainer;
};
appendToParentContainer();
//  6. run it through for forEach

// console.log(appendToParentContainer());
