const Message = (props) => {
  const { text, bgcolor, size,children } = props;

  console.log(typeof size);

  return (
    <div
      style={{
        background: bgcolor,
        fontSize: `${size}px`,
      }}
    >
      This message text is {text} and bg color is {bgcolor}
      {children ? children:""}
    </div>
  );
};

export default Message;