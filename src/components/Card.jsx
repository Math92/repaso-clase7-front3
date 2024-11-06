import './Card.css';

// eslint-disable-next-line react/prop-types
const Card = ({ nombre = "Mathias" }) => {
  return (
    <div className="card">
      <h2>Hola, soy una tarjeta</h2>
      <p>Bienvenido {nombre}</p>
    </div>
  );
};

export default Card;