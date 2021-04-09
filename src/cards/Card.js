import React from "react";
import "./Card.scss";

function markWord(example, word) {
  const exampleMarked = example.split(" ").map((section, i) =>
    section.includes(word) ? (
      <span key={section + i} className="word-mark">
        {section}{" "}
      </span>
    ) : (
      <span key={section + i}>{section} </span>
    )
  );

  return exampleMarked;
}

function playAudio(propsData) {
  // fetch(`/dictvoice?audio=${propsData.word}&le=eng`).then((res) => {
  //   console.log(res);
  // });
}

function Card(props) {
  return (
    <div className="card">
      <div className="card-check"></div>
      <div className="card-content">
        <div className="word">{props.word}</div>
        <div className="word-examples">
          <div className="word-example-en">
            {markWord(props.example_en, props.word)}
          </div>
          <div className="word-example-ch">{props.example_ch}</div>
        </div>
        <button className="word-pronounce" onClick={playAudio(props)}>
          聽發音
        </button>
      </div>
    </div>
  );
}

export default Card;
