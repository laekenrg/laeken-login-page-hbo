import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="container-title-card">
          <h1 className="card-title">DI HOLA A TODO LO QUE AMAS</h1>
        </div>
        <div className="container-data-card-main">
          <div className="container-data-card">
            <h2>
              <strong>
                8,99 €<small className="small-time">/mes</small>
              </strong>
            </h2>
            <h3>Cancela en cualquier momento.</h3>
          </div>
          <div className="container-data-card">
            <h2>
              <strong>
                <small className="small-price">107,88 €</small>
                69,99 €<small className="small-time">/año</small>
              </strong>
            </h2>
            <h3>Obtén un 35 % de descuento con una suscripción anual.*</h3>
          </div>
        </div>

        <div className="buttons-card">
          <button type="button" className="btn btn-primary btn-sm button-link">
            <Link to="/login" className="card-link text-light">
              Sign In
            </Link>
          </button>

          <button type="button" className="btn btn-primary btn-sm button-link">
            <Link to="/registration" className="card-link text-light">
              Sign Up Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
