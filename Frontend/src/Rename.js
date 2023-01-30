import React, { useState } from "react";
import "./Todo.css";
import { Container } from "@mui/material";
import Gallery from "./Token/Gallery";
import Description from "./Token/Description";
import MobileGallery from "./Token/MobileGallery";

function Todo(){
  const [quant, setQuant] = useState(0);
  const [orderedQuant, setOrderedQuant] = useState(0);

  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };

  const resetQuant = () => {
    setQuant(0);
    setOrderedQuant(0);
  };
  return (
    <main className="App">
      <Container component="section" maxWidth={"lg"}>
        <section className="core">
          <Gallery />
          <MobileGallery />
          <Description
            onQuant={quant}
            onAdd={addQuant}
            onRemove={removeQuant}
            onSetOrderedQuant={setOrderedQuant}
          />
        </section>
      </Container>
    </main>
  );
}

export default Todo;
