import "./Button.css";

export default function Button({ buttonText, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {buttonText}
    </button>
  );
}
