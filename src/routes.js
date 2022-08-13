import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Piso from "./components/pages/Piso";

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      
      <Route path="/piso/filo/bege" element={<Piso type={'Filo'} id={1} />} />
      <Route path="/piso/filo/branco" element={<Piso type={'Filo'} id={2} />} />
      <Route path="/piso/filo/gamma" element={<Piso type={'Filo'} id={3} />} />
      <Route path="/piso/filo/greicce" element={<Piso type={'Filo'} id={4} />} />

      <Route path="/piso/marmore/atlantico" element={<Piso type={'Mármore'} id={5} />} />
      <Route path="/piso/marmore/charleston" element={<Piso type={'Mármore'} id={6} />} />
      <Route path="/piso/marmore/michelangelo" element={<Piso type={'Mármore'} id={7} />} />
      <Route path="/piso/marmore/mont-blanc-caramel" element={<Piso type={'Mármore'} id={8} />} />

      <Route path="*" element={<center>Página não encontrada, erro 404</center>} />
    </Routes>
  );
}
