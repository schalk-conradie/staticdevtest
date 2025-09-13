import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      const { text } = await (await fetch("/api/message")).json();
      setData(text);
    })();
  }, []);

  return <div>{data}</div>;
}
