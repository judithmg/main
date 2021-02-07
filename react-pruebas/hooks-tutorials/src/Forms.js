import React, { useState } from "react";

function Forms() {
  const [email, setEmail] = useState("");
  const [list, setList] = useState([]);

  function addEmail(text) {
    setList([...list, text]);
    setEmail("");
  }

  return (
    <div>
      <h1>This is useEffect</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button type="button" onClick={() => addEmail(email)}>
        CLICKME
      </button>
      <ul>
        {list.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default Forms;
