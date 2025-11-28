export const logger = (req, res, next) => {
  console.log("ENDPOINT: ", req.url);
  next();
};
