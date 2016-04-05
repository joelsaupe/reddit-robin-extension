function vote() {
  document.documentElement.getElementsByClassName("robin-chat--vote-increase")[0].click();
  console.log("voted to grow!");
  setTimeout(function() {
    vote();
  }, 30000);
}
console.log("Robin voting has begun!");
vote();
