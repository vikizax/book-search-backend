import {
    Request,
    Response
} from 'express';

import axios from 'axios';

interface IBooksRequest extends Request {
    query: {
        keyword: string;
        startIndex: string;
        maxResults: string;
        [key: string]: string;
    }
    params: {
        id: string;
    }
}

export const getAllBooks = async (req: IBooksRequest, res: Response) => {
    try {
        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.keyword ? `"${req.query.keyword}"` : `""`}&startIndex=${req.query.startIndex ?? 0}&maxResults=${req.query.maxResults ?? 10}`);
        return res.status(200).send({ data: data.items, total: data.totalItems });
    } catch (err: any) {
        return res.status(500).send({ message: 'Something went wrong. Please try again.' });
    }
}

export const getBooksDetailsByBookId = async (req: IBooksRequest, res: Response) => {
    try {
        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes/${req.params.id}`);
        return res.status(200).send({ data: data, total: data.totalItems });
    } catch (err: any) {
        return res.status(500).send({ message: 'Something went wrong. Please try again.' });
    }
}