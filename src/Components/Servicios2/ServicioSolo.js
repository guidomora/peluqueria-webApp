import React from "react";

const ServicioSolo = ({ texto, precio, id, borrarServicio }) => {
  return (
    <div>
      <ol className=" list-group">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold tamano">{texto}</div>
          </div>
          <span className="badge bg-dark rounded-pill precios">{precio}</span>
          <span
            className="badge bg-danger eliminar "
            onClick={() => borrarServicio(id)}
          >
            Eliminar
          </span>
        </li>
      </ol>
    </div>
  );
};

export default ServicioSolo;
