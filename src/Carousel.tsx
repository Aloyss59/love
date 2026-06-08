import "./carousel.css";

const images: string[] = [
  // Place les images fournies dans `public/images/` puis nomme-les pic1.jpg, pic2.jpg, ...
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpeg",
  "images/pic4.png",
  "images/pic5.jpg",
  "images/pic6.jpg",
  "images/pic7.jpeg",
  "images/pic8.jpeg",
  "images/pic9.jpeg",
];

export default function Carousel() {
  return (
    <div className="scene">
      <div className="a3d" style={{ ["--n" as any]: images.length }}>
              {images.map((src, i) => {
                const base = import.meta.env.BASE_URL ?? "/";
                const url = `${base.replace(/\/?$/, "/")}${src.replace(/^\/?/, "")}`;
                return (
                  <img
                    key={i}
                    className="card"
                    src={url}
                    alt={`carousel-${i}`}
                    style={{ ["--i" as any]: i }}
                  />
                );
              })}
      </div>
    </div>
  );
}
