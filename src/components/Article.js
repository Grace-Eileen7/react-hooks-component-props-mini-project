import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus: calculate reading time indicator
  let indicator = "";
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    indicator = "☕️".repeat(cups);
  } else {
    const boxes = Math.ceil(minutes / 10);
    indicator = "🍱".repeat(boxes);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {indicator} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
