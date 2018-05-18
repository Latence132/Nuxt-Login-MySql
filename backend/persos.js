export default function ({ db, express, config }) {
  const routes = express.Router();
  routes.get('/all', (req, res) => {
    db.query('select id, nom, degats, timeEndormi, type, atout from personnages_v2', (error, persos) => {
      if (error)
        return res.status(500).json({ type: 'error', message: 'db error', error });
      var persos = persos;
      console.log('backend persos :' + persos);
      if (persos)
        return res.json({ type: 'success', message: 'Perso chargé OK', persos });
    });
  });
  return routes;
}