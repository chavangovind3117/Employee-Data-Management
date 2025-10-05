const { body, validationResult } = require('express-validator');

const validateEmployee = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required.'),

  body('email')
    .isEmail().withMessage('Must be a valid email address.'),

  body('position')
    .trim()
    .notEmpty().withMessage('Position is required.'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateEmployee,
};