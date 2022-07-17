module.exports = (req, res, next) => {
    if (req.session._Id) {
        return res.redirect('/');
    }
    next()
}