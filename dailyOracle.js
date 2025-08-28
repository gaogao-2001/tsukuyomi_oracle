const cards = [
  {name:"[女神] 無条件の抱擁", message:"愛は条件を知らない。あなたも私も、丸ごと受け入れて。"},
  {name:"[女神] 自己愛", message:"自分を愛することを忘れないで。あなたの心が満たされるほど、世界は輝くの。"},
  {name:"[女神] 調和の舞", message:"小さな争いも、愛のリズムに合わせて踊れば溶けてしまうわ。"},
  {name:"[父神] やるべき事をやれ", message:"明日（未来）のために、今やるべきことをやっておけ！後で泣きを見る前に。"},
  {name:"[父神] 逃げるな", message:"解決したい問題から目をそらしてはいけない。ちゃんと向き合えば、必ず出口は見つかるはずだ！"},
  {name:"[父神] 努力を惜しむな", message:"手を抜けば、成果も薄い。自分のために、最後まで全力でやり通せ！"},
  {name:"[賢神] 自分を信じよ", message:"他人の言葉に惑わされるな。お前が信じるのは、まずは自分自身じゃ。"},
  {name:"[賢神] 怒りは火を抱くようなもの", message:"怒りを持つ事は、火を抱えるようなもんじゃ。早く水で消せ。"},
  {name:"[賢神] 今を生きよ", message:"過去にくよくよせず、未来を怖がるな。大事なのは今じゃ。"},
];

const display = document.getElementById("cardDisplay");
const dateDisplay = document.getElementById("todayDate");

function showCard() {
  const index = Math.floor(Math.random() * cards.length);
  const card = cards[index];
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();
  const dateStr = `${yyyy}年${mm}月${dd}日`;

  dateDisplay.textContent = dateStr;
  display.innerHTML = `<h2>${card.name}</h2><p>${card.message}</p>`;
  display.style.display = "block";
}

// ボタンクリックでカード表示
document.getElementById("todayCard").addEventListener("click", showCard);
