const eventEmitter = require("node:events");

class TicketManager extends eventEmitter {
  constructor(totalTickets) {
    super();
    this.totalTickets = totalTickets;
  }

  buy(email, price) {
    if (this.totalTickets > 0) {
      this.totalTickets--;
      this.emit("buy", email, price, Date.now());
      return;
    }

    this.emit("error", new Error("There are no tickets left."));
  }
}

module.exports = TicketManager;
