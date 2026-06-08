"use client";
import { useState } from "react";
import Carousel from "./Carousel";

export default function Page() {
  const [page, setPage] = useState<"home" | "valentine" | "carousel">("carousel");
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => setNoCount(noCount + 1);

  const getNoButtonText = () => {
    const phrases = [
      "Non",
      "Tu es sûr ?",
      "Et si je demandais vraiment gentiment ?",
      "S'il te plaît",
      "Avec un gâteau de riz au chocolat sur le dessus",
      "Et un frosty matcha alors ?",
      "S'IL TE PLAÎT",
      "Mais :*(",
      "Je vais mourir",
      "Oui je suis mort",
      "ok tu parles au fantôme de Nathan",
      "s'il te plaît bébé",
      ":(((",
      "S'IL TE PLAÎT",
      "Je suis mort",
      "Non :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  if (page === "home") {
    return (
      <div className="-mt-16 flex h-screen flex-col items-center justify-center" style={{ background: "#ffe6f0" }}>
        <h1 className="my-4 text-4xl font-bold">Choisis une page</h1>
        <div className="flex gap-4 mt-4">
          <button
            className="rounded bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-700"
            onClick={() => setPage("valentine")}
          >
            Oui / Non
          </button>
          <button
            className="rounded bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
            onClick={() => setPage("carousel")}
          >
            Carrousel
          </button>
        </div>
      </div>
    );
  }

  if (page === "carousel") {
    return (
      <div className="-mt-16 flex h-screen flex-col items-center justify-center" style={{ background: "#ffe6f0" }}>
        <button
          className="mb-4 rounded bg-gray-600 px-4 py-2 font-bold text-white hover:bg-gray-800"
          onClick={() => setPage("home")}
        >
          Retour
        </button>
        <Carousel />
      </div>
    );
  }

  // valentine page
  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center" style={{ background: "#ffe6f0" }}>
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO !!! Je t'adore !! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Veux-tu être ma petite amie ?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Oui
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Non" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <button
        className="mt-8 rounded bg-gray-600 px-4 py-2 font-bold text-white hover:bg-gray-800"
        onClick={() => setPage("home")}
      >
        Retour au menu
      </button>
    </div>
  );
}
