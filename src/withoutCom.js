import React, { Fragment, useEffect, useState } from "react";
import Nav from "./Nav";

function WithoutComp() {
  const [items, setItems] = useState([
    { name: "yousef", id: 1 },
    { name: "sayed", id: 2 },
    { name: "rayed", id: 3 },
  ]);
  const [vl, setVl] = useState({ name: "", id: Math.random() });
  const submit = (e) => {
    e.preventDefault();
    // console.log(vl);
    setItems([...items, vl]);
    setVl({ name: "" });
    // console.log(items);
  };
  const Delete = (e) => {
    console.log(items);
    setItems(items.filter((item) => e !== item.id));
  };
  return (
    <div className="app2">
      <Nav />
      <form onSubmit={submit}>
        <input
          type="text"
          onChange={(e) => setVl({ name: e.target.value, id: Math.random() })}
          value={vl.name}
          placeholder="write what you want"
          required
        />
        <input type="submit" />
      </form>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => Delete(item.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default WithoutComp;
