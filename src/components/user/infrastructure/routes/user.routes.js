const express = require('express');
const router = express.Router();

/**
 * @swagger
 * api/v1/users:
 *   get:
 *     tags:
 *      - Users
 *     summary: Get all users register in db
 *     description: List of all users.
 */
router.get('/', (req, res) => {
  res.send('GET');
});

/**
 * @swagger
 * api/v1/users:
 *   post:
 *     tags:
 *      - Users
 *     summary: Insert new user
 *     description: Save user into db.
 */
router.post('/', (req, res) => {
  res.send('POST');
});

/**
 * @swagger
 * api/v1/users:
 *   put:
 *     tags:
 *      - Users
 *     summary: Update user
 *     description: Update info of user.
 */
router.put('/', (req, res) => {
  res.send('PUT');
});

/**
 * @swagger
 * api/v1/users:
 *   delete:
 *     tags:
 *      - Users
 *     summary: Delete user by id
 *     description: Delete register of user.
 */
router.delete('/', (req, res) => {
  res.send('DELETE');
});

module.exports = router;
