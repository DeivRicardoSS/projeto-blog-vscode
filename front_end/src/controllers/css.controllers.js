import path from 'path';

const __dirname = path.resolve();

const Css = {
    getPrincipal(req, res) {
        res.sendFile(path.join(__dirname, 'front_end/src/css/style.css'));
    },
    getUserArea(req, res) {
        res.sendFile(path.join(__dirname, 'front_end/src/css/user.css'));
    }
}

export default Css;