const myLogger = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    alert(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
  };
  
  module.exports = myLogger;