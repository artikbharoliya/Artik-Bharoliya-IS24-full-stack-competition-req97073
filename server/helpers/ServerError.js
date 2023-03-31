// Error object for streamlining the error handling. Can be used to provide more information about the error to the client.
module.exports = class ServerError {
  constructor(message, route) {
    this.message = message;;
    this.route = route;
  }
}