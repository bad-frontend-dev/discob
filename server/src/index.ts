import express, { Request, Response } from "express";

const app = express();

app.get("/gamer", (req: Request, res: Response) => {
	res.send({
		hi: "hi",
	});
});

app.listen(9000, () => {
	console.log("server started on port 9000");
});
