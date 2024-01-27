
import express from 'express';

const router = express.Router();

// Happy path stack
router.get('/*', (request, response, next) => {
    console.log(request.path);
    return response.redirect("http://localhost:3021/")
});

export default router;
