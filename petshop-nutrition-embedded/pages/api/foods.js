export default function handler(req, res) {
  const foodDatabase = [
    {
      name: "ACANA Adult Small Breed",
      targets: {
        size: "Μικρόσωμο (>4kg)",
        age: "Ενήλικος",
        condition: "Καμία"
      },
      description: "Πρωτεΐνη: 31%, Λιπαρά: 17%, Ίνες: 5%, Τέφρα: 7%."
    }
  ];
  res.status(200).json(foodDatabase);
}
