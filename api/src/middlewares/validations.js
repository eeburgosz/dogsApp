const validatePost = (req, res, next) => {
   const { name, minHeight, maxHeight, minWeight, maxWeight } = req.body;
   if (!name || !minHeight || !maxHeight || !minWeight || !maxWeight)
      return res.status(400).json({ message: "Missing data" });
   next();
};

module.exports = { validatePost };