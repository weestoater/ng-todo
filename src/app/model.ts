export class Model {
  user;
  items;

  constructor() {
    this.user = "Ian";
    this.items = [ new TodoItem("Buy flowers", false),
    new TodoItem("Cook dinner", false),
    new TodoItem("Wash cars", false),
    new TodoItem("generation Tech", true)]
  }
}

export class TodoItem {
  action;
  done;

  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
