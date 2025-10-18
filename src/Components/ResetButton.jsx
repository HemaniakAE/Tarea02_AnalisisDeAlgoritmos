/**
 * Componente ResetButton.
 * 
 * @file ResetButton.jsx
 * @description Componente de botón que permite reiniciar o resetear el estado de la aplicación
 * al ser presionado. Se utiliza en la interfaz principal para reiniciar los valores de los inputs
 * y resultados del algoritmo.
 * 
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.onReset - Función que se ejecuta al hacer clic en el botón. 
 * Se espera que esta función resetea los estados relevantes de la aplicación.
 * @returns {JSX.Element} Botón con ícono de la pestaña que ejecuta la acción de reset al presionarlo.
 */

function ResetButton({ onReset }) {
  return (
    <button className="reset-button" onClick={onReset}>
      <img src="/icono conjunto.png" alt="Reset" />
    </button>
  );
}

export default ResetButton;