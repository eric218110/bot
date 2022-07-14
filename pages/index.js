export default function Home() {
  const onPress = async () => {
    const res = await fetch("/api/hello", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    return res.json();
  };

  return (
    <div >
      <h1>Vamos pra o topo :)</h1>
      <button onClick={onPress}>Boraaaa</button>
    </div>
  )
}
