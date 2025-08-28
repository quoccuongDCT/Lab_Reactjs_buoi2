import './App.css'
import { useState } from "react";
import Model from "./components/Model";
import GlassesList from "./components/GlassesList";
import glassesData from "./data/dataGlasses.json";

function App() {
  const [selectedGlasses, setSelectedGlasses] = useState(glassesData[0]);
  return (
     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Ứng Dụng Chọn Kính</h1>
      <Model glasses={selectedGlasses} />
      <GlassesList glassesData={glassesData} onSelectGlasses={setSelectedGlasses}
      />
    </div>
  )
}

export default App
