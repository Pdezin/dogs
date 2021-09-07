import React from "react";
import Feed from "./Feed/Feed";
import Head from "./Helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Dogs a rede social pra cachorros, pra quem ama animais e quer compartilhar essa paixão pelo seu dog"
      />
      <Feed />
    </section>
  );
};

export default Home;
