import { pool } from "../db.js";

export const getEmploye = async (req, res) => {
  console.log(req.params.id);
  //res.send('onteniendo 1')
  try {
    throw new Error("error en all empleados");
    const [rows] = await pool.query(
      "select * from employe where id=?;",
      req.params.id
    );
    if (rows.length <= 0)
      return res.status(404).json({ message: "No encotrado" });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: " Algo paso",
    });
  }
};
export const getAllEmployes = async (req, res) => {
  try {
    throw new Error("error en all empleados");
    const [rows] = await pool.query("SELECT * FROM employe");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "error en empleados",
    });
  }
};
export const createEmploye = async (req, res) => {
  //pool.query('INSERT INTO employe (name,salary) VALUE (?,?),[]')
  //console.log(req.body)
  try {
    throw new Error("errror en crear empleados");
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employe (name,salary) VALUE (?,?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error en crear empleados",
    });
  }
};

export const deleteEmploye = async (req, res) => {
  try {
    throw new Error("Error en borrar");
    const [result] = await pool.query("DELETE FROM employe WHERE id=?;", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "No encontrado",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "error enborrar empleados",
    });
  }
};

export const updateEmploye = async (req, res) => {
  try {
    throw new Error (' error en actualizar')
    const { id } = req.params;
    const { name, salary } = req.body;
    const [result] = await pool.query(
      "UPDATE employe SET name=IFNULL(?,name) , salary=IFNULL(?,salary) WHERE id=?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      res.status(404).json({
        message: "No encontrado",
      });
    const [rows] = await pool.query("SELECT * FROM employe WHERE id=?", [id]);

    /* consolpe.log(id,name, salary) */
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "error enborrar empleados",
    });
  }
  /*    
    console.log(result) */
};
