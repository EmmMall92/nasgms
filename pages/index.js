
import { useState } from "react";

const foodDatabase = [
  {
    name: "ACANA Adult Small Breed",
    targets: {
      size: "Μικρόσωμο (>4kg)",
      age: "Ενήλικος",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: 31%, Λιπαρά: 17%, Ίνες: 5%, Τέφρα: 7%."
  },
  {
    name: "Farmina N&D Puppy Medium",
    targets: {
      size: "Μεσαίου μεγέθους (<25kg)",
      age: "Κουτάβι",
      condition: "Καμία"
    },
    description: "Πρωτεΐνη: 30%, Λιπαρά: 18%, Ίνες: 2.9%, Τέφρα: 6.8%."
  }
];

export default function Home() {
  const [size, setSize] = useState("");
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const nutritionalInfo = {
    "Θηλασμός/Απογαλακτισμός": "Πρωτεΐνη >25%, Λιπαρά >15%, Φυτικές ίνες 1-3%, Τέφρα 6-8%.",
    "Κουτάβι": "Πρωτεΐνη 22-32%, Λιπαρά 10-25%, Φυτικές ίνες 2-4%, Τέφρα 6-8%.",
    "Ενήλικος": "Πρωτεΐνη 18-25%, Λιπαρά 8-15%, Φυτικές ίνες 2-4%, Τέφρα 6-9%.",
    "Ηλικιωμένος": "Πρωτεΐνη 20-25%, Λιπαρά 8-12%, Φυτικές ίνες 3-6%, Τέφρα 5-8%."
  };

  const handleSearch = () => {
    if (!size || !age || !condition) {
      setError("⚠️ Παρακαλώ συμπληρώστε όλα τα πεδία.");
      return;
    }
    setError("");
    const norm = v => v?.trim().toLowerCase();
    const res = foodDatabase.filter(f =>
      norm(f.targets.size) === norm(size) &&
      norm(f.targets.age) === norm(age) &&
      norm(f.targets.condition) === norm(condition)
    );
    setResults(res);
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Προτάσεις Τροφής</h1>

      <select value={size} onChange={e => setSize(e.target.value)} className="w-full border rounded p-2">
        <option value="">Επιλέξτε μέγεθος</option>
        <option value="Μικρόσωμο (>4kg)">Μικρόσωμο (&gt;4kg)</option>
        <option value="Μεσαίου μεγέθους (<25kg)">Μεσαίου μεγέθους (&lt;25kg)</option>
        <option value="Μεγαλόσωμο (<45kg)">Μεγαλόσωμο (&lt;45kg)</option>
        <option value="Γιγαντόσωμο (>45kg)">Γιγαντόσωμο (&gt;45kg)</option>
      </select>

      <select value={age} onChange={e => setAge(e.target.value)} className="w-full border rounded p-2">
        <option value="">Επιλέξτε ηλικία</option>
        <option>Θηλασμός/Απογαλακτισμός</option>
        <option>Κουτάβι</option>
        <option>Ενήλικος</option>
        <option>Ηλικιωμένος</option>
      </select>

      <select value={condition} onChange={e => setCondition(e.target.value)} className="w-full border rounded p-2">
        <option value="">Επιλέξτε κατάσταση</option>
        <option>Καμία</option>
        <option>Στειρωμένος</option>
        <option>Αλλεργικός</option>
        <option>Ιδιότροπος / Απαιτητικός</option>
      </select>

      {error && <div className="text-red-600">{error}</div>}

      <button onClick={handleSearch} className="bg-emerald-600 text-white px-4 py-2 rounded shadow">
        Δείξε μου προτάσεις
      </button>

      {results.length > 0 && (
        <div className="bg-blue-50 p-4 mt-4 rounded shadow space-y-2">
          <h2 className="font-semibold">Διατροφικές Ανάγκες:</h2>
          <ul className="list-disc ml-4 text-sm text-gray-700">
            {nutritionalInfo[age]?.split(". ").map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {results.map((r, i) => (
            <div key={i} className="p-3 bg-white border rounded mt-2">
              <h3 className="font-semibold">{r.name}</h3>
              <p className="text-sm">{r.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
