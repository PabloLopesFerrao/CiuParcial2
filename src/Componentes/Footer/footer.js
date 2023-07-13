import React from "react";
import './footer.css';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
         
      
          {/* Column3 */}
          <div className="col">
            <h4>Contacto</h4>
            <ui className="list-unstyled">
              <li><i className="fas fa-phone"></i> Numero telefonico: 12345678</li>
              <li><i className="fas fa-envelope"></i> Email</li>
              <li><i className="fas fa-address-card"></i> Direccion: Avenida Falsa 1234</li>
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
