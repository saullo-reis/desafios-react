const Button = (props) => {
  return (
    <button
      className="btn"
      onClick={function showAlert() {
        return alert(`A label desse botão é ${props.label}`);
      }}
    >{props.label}</button>
  );
};

export default Button;
