// import logo from "./logo.svg";
import "./App.css";
import Card from "./cards/Card.js";

function App() {
  let cards = [
    {
      word: "prevalent",
      example_en: "These diseases are more prevalent among young children.",
      example_ch: "這些疾病在幼兒中更普遍。",
    },
    {
      word: "experiment",
      example_en:
        "Some people believe that experiments on animals should be banned.",
      example_ch: "有些人認為應該禁止拿動物做實驗。",
    },
    {
      word: "infiltrate",
      example_en:
        "A journalist managed to infiltrate the powerful drug cartel.",
      example_ch: "一位記者設法滲入了勢力強大的販毒集團內部。",
    },
    {
      word: "squash",
      example_en: "He accidentally sat on her hat and squashed it.",
      example_ch: "他不小心坐在她的帽子上，把它坐扁了。",
    },
    {
      word: "knuckle down",
      example_en:
        "You need to knuckle down if you want to finish this project in time.",
      example_ch: "如果你想按時完成這項計劃，就得加把勁努力工作了。",
    },
    {
      word: "dish sth out",
      example_en: "He's very keen to dish out criticism.",
      example_ch: "他非常熱衷於發表批評意見。",
    },
  ];

  const cardList = cards.map((item) => (
    <Card
      key={item.word}
      word={item.word}
      example_en={item.example_en}
      example_ch={item.example_ch}
    ></Card>
  ));

  return (
    <div className="App">
      <div>{cardList}</div>
    </div>
  );
}

export default App;
