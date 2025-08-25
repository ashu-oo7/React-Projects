const Message = (props) =>{
  const {text,bgcolor,size} = props;

  console.log(typeof size)

  return <div style={{
    background:bgcolor,
    fontSize:`${size}px`
  }}
  >
    This message text is {text} and bg color is {bgcolor}
  </div>
}

const App = ()=>{
  console.log("App is running");
  return (
    <h1>
      Rendering in App
      <Message text="Hi I am a message " bgcolor="blue" size={12} />
      <Message text="Hi I am the message " bgcolor="red" size={14} />
    </h1>
  );
}

export default App;