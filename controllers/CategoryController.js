const mysql = require('mysql');
const util = require('util');

const configDB = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "my_songs"
};

class CategoryController {

    // [GET] /cat
    async getListCats(req, res) {
        try {
            var conn = mysql.createConnection(configDB);

            const query = util.promisify(conn.query).bind(conn);

            const listCats = await query(`SELECT * FROM categories`);
            res.status(200).send(listCats);
        } catch (err) {
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }

    // [GET] /cat/catbyid
    async getCatById(req, res) {
        var id = req.query.id;
        try {
            var conn = mysql.createConnection(configDB);

            const query = util.promisify(conn.query).bind(conn);

            const catById = await query(`SELECT * FROM categories WHERE id = ${id}`);
            res.status(200).send(catById[0]);
        } catch (err) {
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }
}

module.exports = new CategoryController();
