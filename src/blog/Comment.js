class Comment{
  constructor(content, userName){
    this.content = content;
    this.userName = userName;
    this.createAt = new Date();
  }
}

module.exports = Comment