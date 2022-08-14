import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Piso from "./components/pages/Piso";

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      
      <Route path="/piso/premium/avorio-di-brescia" element={<Piso type={'Premium'} id={0}/>} />
      <Route path="/piso/premium/premium-belle-blanc" element={<Piso type={'Premium'} id={1}/>} />
      <Route path="/piso/premium/cobogo" element={<Piso type={'Premium'} id={2}/>} />
      <Route path="/piso/premium/mosaicos" element={<Piso type={'Premium'} id={3}/>} />
      <Route path="/piso/premium/namore" element={<Piso type={'Premium'} id={4}/>} />
      <Route path="/piso/premium/nord" element={<Piso type={'Premium'} id={5}/>} />
      <Route path="/piso/premium/quartzito" element={<Piso type={'Premium'} id={6}/>} />
      <Route path="/piso/premium/relevos" element={<Piso type={'Premium'} id={7}/>} />
      <Route path="/piso/premium/terrazo" element={<Piso type={'Premium'} id={8}/>} />


      

      <Route path="/piso/filo/bege" element={<Piso type={'Filo'} id={9} />} />
      <Route path="/piso/filo/branco" element={<Piso type={'Filo'} id={10} />} />
      <Route path="/piso/filo/gamma" element={<Piso type={'Filo'} id={11} />} />
      <Route path="/piso/filo/greicce" element={<Piso type={'Filo'} id={12} />} />

      <Route path="/piso/marmore/atlantico" element={<Piso type={'Mármore'} id={13} />} />
      <Route path="/piso/marmore/charleston" element={<Piso type={'Mármore'} id={14} />} />
      <Route path="/piso/marmore/michelangelo" element={<Piso type={'Mármore'} id={15} />} />
      <Route path="/piso/marmore/mont-blanc-caramel" element={<Piso type={'Mármore'} id={16} />} />
      <Route path="/piso/classico/argila" element={<Piso type={'Clássico'} id={17} />} />
      <Route path="/piso/classico/azulejaria" element={<Piso type={'Clássico'} id={18} />} />
      <Route path="/piso/classico/cimento" element={<Piso type={'Clássico'} id={19} />} />
      <Route path="/piso/classico/concreto" element={<Piso type={'Clássico'} id={20} />} />
      <Route path="/piso/classico/madeira" element={<Piso type={'Clássico'} id={21} />} />
      <Route path="/piso/classico/mare-dattuno" element={<Piso type={'Clássico'} id={22} />} />
      <Route path="/piso/classico/metal" element={<Piso type={'Clássico'} id={23} />} />
      <Route path="/piso/classico/pastilhas" element={<Piso type={'Clássico'} id={24} />} />
      <Route path="/piso/classico/pedra" element={<Piso type={'Clássico'} id={25} />} />
      <Route path="/piso/classico/sintetico" element={<Piso type={'Clássico'} id={26} />} />
      <Route path="/piso/classico/tijolos" element={<Piso type={'Clássico'} id={27} />} />


      <Route path="*" element={<center>Página não encontrada, erro 404</center>} />
    </Routes>
  );
}
