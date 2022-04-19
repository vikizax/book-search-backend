import { Router } from "express";
import * as BookController from "../../controller/book";;

const router = Router();

router.get('/all', BookController.getAllBooks);

router.get('/details/:id', BookController.getBooksDetailsByBookId);

export default router;