module.exports = function httpsRedirect(req, res, next) {
  if(req.secure){
    // OK, continue
    return next();
  }
  res.redirect('https://' + req.hostname + req.url);
};
