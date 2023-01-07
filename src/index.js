import app from "./app.js";
import "./database.js";

app.listen(app.get('port'));

console.log(`Server listening on por ${app.get('port')}`);