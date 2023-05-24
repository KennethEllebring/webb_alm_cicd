class Greeter {
  constructor() {
    this.result = 'user';
  }

  getDefault() {
    return this.result;
  }

  greet(username = 'User') {
    this.result = `Hello ${username}`;
    return this.result;
  }
}

module.exports = Greeter;
