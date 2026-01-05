import sqlite3 from 'sqlite3'

const sqlite = sqlite3.verbose();

const db = new sqlite.Database('library_db.sqlite', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados', err.message)
    } else {
        console.log('Conectado ao banco de dados SQLite com sucesso!')
    }
})

export default db