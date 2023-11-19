const DatabaseConnection = require("./../../models/connections"); // Ajuste o caminho conforme necessário

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS, PATCH, DELETE, POST, PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  const db = new DatabaseConnection();

  try {
    await db.connect();
    console.log("Connected to the database");

    const sql = "SELECT * FROM Cursos"; // query SQL atribuida a variavel
    const results = await db.query(sql); // query SQL sendo executada
    res.status(200).json({ status: true, data: results });
  } catch (error) {
    res.status(404).json({ status: false, data: [] });
  } finally {
    await db.close();
  }
}
