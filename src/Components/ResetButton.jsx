function ResetButton({ onReset }) {
  return (
    <button className="reset-button" onClick={onReset}>
      <img src="/icono conjunto.png" alt="Reset" />
    </button>
  );
}

export default ResetButton;