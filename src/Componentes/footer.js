import React from "react";
import './footer.css';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Ubicacion</h4>
            <h1 className="list-unstyled">
              <li><i className="fas fa-phone"></i> 342-420-6969</li>
              <li><i className="fas fa-map-marker-alt"></i> Moscow, Russia</li>
              <li><i className="fas fa-street-view"></i> 123 Streeet South North</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contacto</h4>
            <ui className="list-unstyled">
              <li><i className="fas fa-phone"></i> Numero telefonico: 12345678</li>
              <li><i className="fas fa-envelope"></i> Email</li>
              <li><i className="fas fa-address-card"></i> Re</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            ©{new Date().getFullYear()} Pablo Lopes Ferrao | Todos los derechos reservados |
            Terminos y servicios | Privacidad
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
