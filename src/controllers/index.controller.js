import {pool} from "../db.js";

export const ping =async(req,res) => {
    const a=await pool.query('SELECT * FROM employe;')
    res.json(a[0])
}

export default ping 