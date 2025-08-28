import React from "react";

export default function GlassesList({ glassesData, onSelectGlasses }) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {glassesData.map((glasses) => (
        <button
          key={glasses.id}
          onClick={() => onSelectGlasses(glasses)}
          className="p-2 bg-white rounded-xl shadow hover:scale-105 transition"
        >
          <img
            src={glasses.url}
            alt={glasses.name}
            className="w-24"
          />

        </button>
      ))}
    </div>
  );
}
