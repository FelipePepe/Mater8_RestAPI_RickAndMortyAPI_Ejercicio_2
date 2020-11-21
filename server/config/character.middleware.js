const charactersMiddleware = (req, res, next) => {
  if (req.method === 'PUT') {
    req.body = {
      ...req.body,
    };
  }
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/characters') {
    charactersMiddleware(req, res, next);
  } else {
    next();
  }
};
