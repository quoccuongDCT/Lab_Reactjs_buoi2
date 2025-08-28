export default function Model({ glasses }) {
  return (
    <div className="relative">
      <img
        src="src/assets/glassesImage/model.jpg"
        alt="model"
        className="w-72 rounded-xl shadow-lg"
      />

      {/* overlay kính */}
      <img
        src={glasses.url}
        alt={glasses.name}
        className="absolute top-21 left-1/2 -translate-x-1/2 w-40 opacity-90"
      />
      {/* thông tin kính */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center p-2 rounded-b-xl">
        <h2 className="font-semibold">{glasses.name}</h2>
        <p className="text-sm">{glasses.desc}</p>
        <span className="text-yellow-300 font-bold">${glasses.price}</span>
      </div>
    </div>
  );
}
