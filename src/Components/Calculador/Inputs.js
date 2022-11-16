import React, { createContext, useContext, useState, useEffect } from "react";
import Tobi from "./Empleados/Tobi";
import "./Empleados/Empleados-Style/Tobi.css";
import {
  doc,
  addDoc,
  setDoc,
  collection,
  onSnapshot,
  query,
  deleteDoc,
  where,
} from "firebase/firestore";
import { db } from "../Firebase";
import { uuidv4 } from "@firebase/util";

export const InputContext = createContext();
const Inputs = ({ nombre }) => {
  const [values, setValues] = useState({
    Corte: "",
    Lavado: "",
    Peinado: "",
    Color: "",
    Decoloracion: "",
    Nutricion: "",
    Manos: "",
    Alisado: "",
    Depilacion: "",
    Base: "",
    Maquillaje: "",
    Productos: "",
    Estetica: "",
    Pies: "",
  });
  const [prec, setPrec] = useState([]);
  const [dia, setDia] = useState([]);

  const handleChange = ({ target }) => {
    setValues((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  };
  const cuenta = () => {
    const corte = 0.35 * values.Corte;
    const lavado = 0.35 * values.Lavado;
    const peinado = 0.35 * values.Peinado;
    const color = 0.25 * values.Color;
    const decoloracion = 0.25 * values.Decoloracion;
    const nutricion = 0.35 * values.Nutricion;
    const manos = 0.5 * values.Manos;
    const alisado = 0.25 * values.Alisado;
    const depilacion = 0.5 * values.Depilacion;
    const base = 0.5 * values.Base;
    const maquillaje = 0.5 * values.Maquillaje;
    const productos = 0.25 * values.Productos;
    const estetica = 0.5 * values.Estetica;
    const pies = 0.5 * values.Pies;
    const pushear = () => {
      prec.push(
        corte,
        lavado,
        peinado,
        color,
        decoloracion,
        nutricion,
        manos,
        alisado,
        depilacion,
        base,
        maquillaje,
        productos,
        estetica,
        pies
      );
    };
    pushear();

    const preciosSumados = prec.reduce((prev, current) => prev + current);
    const pasando = () => {
      setPrec([preciosSumados]);
    };
    pasando();

    const subida = async (id) => {
      const docRef = await addDoc(collection(db, "Tobi"), {
        dia: prec.reduce((prev, current) => prev + current),
      });
      console.log(docRef, docRef.id)
    };
    subida();
  };

  //--------------------------------------------
  // const obtenerServicios = async () => {
  //   const q = query(collection(db, "Tobi"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const docs = [];
  //     querySnapshot.forEach((doc) => {
  //       docs.push({ ...doc.data(), id: doc.id });
  //     });
  //     setPrec(docs);
  //   });
  // };

  // useEffect(() => {
  //   obtenerServicios();
  // }, []);

  // console.log(prec)

  // // ----------------------------------------------

  // const borrarServicio = async () => {
  //   const borrarFirestore = async (id) => {
  //     await deleteDoc(doc(db, "Tobi", id));
  //   };
  //   borrarFirestore();
  // };

  return (
    <div className="bordes">
      <div className="empleado-container">
        <p className="texto">Corte</p>
        <p className="texto">Lavado</p>
        <p className="texto">Peinado</p>
        <p className="texto">Color</p>
        <p className="texto">Decoloración</p>
        <p className="texto">Nutrición</p>
        <p className="texto">Manos</p>
      </div>
      <div className="input-container">
        <p>{nombre}</p>
        <input
          className="inputs"
          type="number"
          name="Corte"
          value={values.Corte}
          placeholder="35%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Lavado"
          value={values.Lavado}
          placeholder="35%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Peinado"
          value={values.Peinado}
          placeholder="35%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Color"
          value={values.Color}
          placeholder="25%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Decoloracion"
          value={values.Decoloracion}
          placeholder="25%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Nutricion"
          value={values.Nutricion}
          placeholder="35%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Manos"
          value={values.Manos}
          placeholder="50%"
          onChange={handleChange}
        />
      </div>
      <div className="empleado-container">
        <p className="texto">Alisado</p>
        <p className="texto">Depilación</p>
        <p className="texto">Base Rulos</p>
        <p className="texto">Maquillaje</p>
        <p className="texto">Productos</p>
        <p className="texto">Estética Rostro</p>
        <p className="texto">Pies</p>
      </div>
      <div className="input-container">
        <p>{nombre}</p>
        <input
          className="inputs"
          type="number"
          name="Alisado"
          value={values.Alisado}
          placeholder="25%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Depilacion"
          value={values.Depilacion}
          placeholder="50%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Base"
          value={values.Base}
          placeholder="50%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Maquillaje"
          value={values.Maquillaje}
          placeholder="50%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Productos"
          value={values.Productos}
          placeholder="25%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Estetica"
          value={values.Estetica}
          placeholder="50%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Pies"
          value={values.Pies}
          placeholder="50%"
          onChange={handleChange}
        />
      </div>
      <button onClick={cuenta} className="boton-precio">
        Click
      </button>
      <p>Total:{prec.dia}</p>
      {/* <ul>
        {prec.map((x) => (
          <li>
            {x.dia}
            <button onClick={() => borrarServicio()}>Eliminar</button>
          </li>
        ))}
      </ul> */}
      <InputContext.Provider value={prec}>
        <Tobi />
      </InputContext.Provider>
    </div>
  );
};

export default Inputs;
