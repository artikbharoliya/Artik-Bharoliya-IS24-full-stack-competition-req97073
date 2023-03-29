module.exports = class ServerError {
  constructor(message, route) {
    this.message = message;;
    this.route = route;
  }
}