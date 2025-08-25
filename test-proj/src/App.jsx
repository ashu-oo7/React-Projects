import Message from './Message'

const App = ()=>{
  console.log("App is running");
  return (
    <h1>
      Rendering in App
      <Message text="Hi I am a message " bgcolor="blue" size={12} >
        This is inner element
        </Message>
      <Message text="Hi I am the message " bgcolor="red" size={14} />
    </h1>
  );
}

export default App;