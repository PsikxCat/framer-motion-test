import React, { useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Modal from './components/Modal';
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  // @ hook useLocation para saber la ubicacion actual de la ruta, data que queda almacenada en la constante location. (para uso en etiqueta Switch)

  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false) // @ pasar a false por defecto

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
      <Header />

      {/* <AnimatePresence exitBeforeEnter> // ! exitBeforEnter deprecated  for mode='wait' */}
      <AnimatePresence
        mode='wait'
        onExitComplete={() => setShowModal(false)}
      >
        <Switch location={location} key={location.key}>
          {/* // @ propiedades location y key necesarias para funcionamiento de salida animada de componentes */}
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>

          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>

          <Route path="/order">
            <Order pizza={pizza} setShowModal={setShowModal} />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>

      <Modal showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
}

export default App;
