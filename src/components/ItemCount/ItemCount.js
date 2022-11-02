import { useState } from 'react';
import '../ItemCount/itemCount.css';
import { Link } from 'react-router-dom';
export const ItemCount = (props) => {
  const { stockInicial, stockMaximo, onAdd } = props;
  const [cant, setCant] = useState(1);
  // Estado para manejar los botones
  const [isBuy, setIsBuy] = useState(false);
  // Suma cantidad al dar +
  const addCount = () => {
    setCant(cant + 1);
  };
  // resta cantidad al dar -
  const delCount = () => {
    setCant(cant - 1);
  };
  // Agrega al carrito
  const AddToCart = () => {
    onAdd(cant);
    setIsBuy(true);
  };
  return (
    <>
      <h5>Stock disponible: {stockMaximo}</h5>
      <div className="mt-2 d-flex justify-content-center">
        <button
          className="btn btn-ItemCount-css"
          disabled={stockInicial >= cant}
          onClick={delCount}
        >
          -
        </button>
        <h5 className="text-Stock">{cant}</h5>
        <button
          className="btn btn-ItemCount-css"
          disabled={cant >= stockMaximo}
          onClick={addCount}
        >
          +
        </button>
      </div>
      {/* Btn para hacer compra */}
      <div className="col">
        {isBuy ? (
          <>
            <Link to="/">
              <button id="btnBuy" className="mb-2 btn">
                Seguir comprando
              </button>
            </Link>
            <Link to="/cart">
              <button id="btnBuy" className="btn">
                ir al carrito
              </button>
            </Link>
          </>
        ) : (
          <button id="btnBuy" className="btn" onClick={AddToCart}>
            Comprar
          </button>
        )}
      </div>
    </>
  );
};
