class User {
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  login() {
    return users.find(
      (user) =>
        user.username === this.username && user.password === this.password
    );
  }
}

const users = [
  new User("Selam", "Welde123", "Admin"),
  new User("Mahe", "Mahe234", "Member"),
];

module.exports = User;
