import React from "react";
import Api from "../Api";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function Home() {
  return (
    <div className="connexion_page">
      <img
        src="https://via.placeholder.com/1024x200"
        alt="banniere du collège"
      />
      <h1>Bienvenue au collège Marc Chagall</h1>

      <LoginModal />
      <RegisterModal />
      <Api />
    </div>
  );
}
