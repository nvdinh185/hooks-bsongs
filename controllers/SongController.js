const mysql = require('mysql');

const configDB = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "bsongs"
};

class NewsController {

    // [GET] /song
    async getListSongs(req, res) {
        try {
            var conn = mysql.createConnection(configDB);

            const listSongs = await new Promise((resolve, reject) => {
                conn.query(`SELECT * FROM songs`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                })
            })
            res.status(200).send(listSongs);
        } catch (err) {
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }

    // [GET] /song/songsbycat
    async getListSongsByCat(req, res) {
        var catId = req.query.cid;
        try {
            var conn = mysql.createConnection(configDB);

            const listSongsByCat = await new Promise((resolve, reject) => {
                conn.query(`SELECT * FROM songs WHERE cat_id = ${catId}`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                })
            })
            res.status(200).send(listSongsByCat);
        } catch (err) {
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }

    // [GET] /song/songbyid
    async getSongById(req, res) {
        var id = req.query.id;
        try {
            var conn = mysql.createConnection(configDB);

            const songById = await new Promise((resolve, reject) => {
                conn.query(`SELECT * FROM songs WHERE id = ${id}`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                })
            })
            res.status(200).send(songById[0]);
        } catch (err) {
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }

    // [POST] /news/contact
    async postContact(req, res) {
        const { name, phone, web, gender, content, file } = req.form_data;

        try {
            var conn = mysql.createConnection(configDB);

            await new Promise((resolve, reject) => {
                conn.query(`INSERT INTO contact (name, phone, web, gender, picture, content) VALUES (?, ?, ?, ?, ?, ?)`,
                    [name, phone, web, gender, file, content], function (err, result) {
                        if (err) {
                            reject(err);
                        }
                        resolve(result);
                    });
            })
            res.status(200).send('OK');
        } catch (err) {
            console.log(err);
            res.status(500).send('NOK');
        } finally {
            conn.end();
        }
    }
}

module.exports = new NewsController();
