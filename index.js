
import express from "express"; // ECS6
import { connectionDb } from "./Back-end Code/DB/connection.js";

import * as allRouters from "./Back-end Code/modules/index.routes.js";
import cors from 'cors'
const app = express();
const port = 3000;
const BaseUrl = "/api/v1";

app.use(express.json());
app.use(cors({
    origin: '*'
}));
connectionDb();
app.use(`${BaseUrl}/user`, allRouters.userRouter); //   /api/v1/user/adduser
app.use(`${BaseUrl}/card`, allRouters.cardRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));



