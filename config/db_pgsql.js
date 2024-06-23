const { Pool } = require('pg');

/* const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    database: 'postgres',
    password: '123456'
  });  */

const pool = new Pool({
  host: 'dpg-cpri3c3v2p9s73a7g8v0-a.frankfurt-postgres.render.com',
  user: 'steph',
  password: 'EtCCP71D3tH5P1LFbNchwddtKRka8LOi',
  database: 'baseprueba_ra9l',
  port: '5432',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;