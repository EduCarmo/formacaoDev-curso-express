import express from "express";
import rotasBasico from "./routes/basico";
import rotasDiferentesRetornos from "./routes/diferentesRetornos";
import rotasAninhadas from "./routes/rotasAninhadas";
import rotasStatus from "./routes/status";
import rotasParametrosDeRotas from "./routes/parametrosDeRotas";

const app = express();
const porta = 8080;


//middleware
// app.use((req, res, next) => {
//     console.log(`Data: ${Date.now()}`)
//     next()
// })

app.use(rotasBasico)
app.use(rotasDiferentesRetornos)
app.use("/protudos", rotasAninhadas)
app.use(rotasStatus)
app.use("/parametrosDeRota",rotasParametrosDeRotas)


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
})