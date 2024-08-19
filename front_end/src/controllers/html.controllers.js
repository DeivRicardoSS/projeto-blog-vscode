import path from 'path';

const __dirname = path.resolve();

const Html = {
    getPrincipal(req, res) {
        res.sendFile(path.join(__dirname, 'front_end/src/html/index.html'));
    }
}

export default Html;