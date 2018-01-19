import app from './server';
import './data/connectors/';
import './routes/';

app.listen(5001, () => {
  console.log('Server started listening on port 5001.');
});