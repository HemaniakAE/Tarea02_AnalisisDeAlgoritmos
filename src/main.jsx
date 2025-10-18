/**
 * @file index.jsx
 * @description Punto de entrada de la aplicación React. Inicializa el renderizado de la aplicación
 * en el DOM y aplica el modo estricto de React para detectar problemas en el desarrollo.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * Inicializa y renderiza la app.
 * 
 * @constant {HTMLElement} rootElement - Elemento del DOM donde se montará la aplicación.
 * @function renderApp
 * @description Crea un root de React en el elemento 'root' y renderiza el componente <App /> 
 * envuelto en <StrictMode> para habilitar comprobaciones adicionales durante el desarrollo.
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
