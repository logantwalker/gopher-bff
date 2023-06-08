import fetch from "node-fetch";
import { Request, Response } from "express";

export function GetResponse(req: Request, res: Response) {
    let url = `https://api.openai.com/v1/chat/completions`;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_KEY}`,
        },
        body: JSON.stringify(req.body),
    };

    fetch(url, options)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                console.log(res);
            }
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}
