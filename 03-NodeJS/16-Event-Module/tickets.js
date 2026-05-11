const TicketManager = require("./ticketManager");

//make object
const ticketManager = new TicketManager(10);

ticketManager.on("buy", (email, price, date) => {
  console.log(
    `Email: ${email}, Price: ${price}, Date: ${new Date(date).toDateString()}`
  );
});

ticketManager.on("error", (error) => {
  console.log(`${error}`);  
});

//now buy ticket
ticketManager.buy("binayak@gmail.com", 2000);
ticketManager.buy("binayak@gmail.com", 2000);
ticketManager.buy("binayak@gmail.com", 2000);
ticketManager.buy("binayak@gmail.com", 2000);
ticketManager.buy("binayak@gmail.com", 2000);
ticketManager.buy("binayak@gmail.com", 2000);
ticketManager.buy("binayak@gmail.com", 2000);
ticketManager.buy("binayak@gmail.com", 2000);
ticketManager.buy("binayak@gmail.com", 2000);
ticketManager.buy("binayak@gmail.com", 2000);
ticketManager.buy("binayak@gmail.com", 2000);
