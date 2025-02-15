import express, { Request, Response } from "express";

const app = express();
const PORT = 9000;

app.get("/gamer", (req: Request, res: Response) => {
	res.send({
		hi: "hiiiii",
	});
});

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
