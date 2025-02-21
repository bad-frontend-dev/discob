import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
	}),
);

const PORT = 9000;

const tempMessages = {
	sam: [
		{
			username: "test",
			text: "hi",
		},
		{
			username: "test",
			text: "hi",
		},
		{
			username: "another username",
			text: "hi",
		},
		{
			username: "test",
			text: "hi",
		},
		{
			username: "test",
			text: "hi",
		},
		{
			username: "test",
			text: "hi",
		},
	],
	room2: [
		{
			username: "cob",
			text: "aldgajsdjhhgasdkjj",
		},
	],
};

app.get("/messages/:room", (req: Request, res: Response) => {
	const { room } = req.params;
	res.json(tempMessages[room] || []);
});

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
