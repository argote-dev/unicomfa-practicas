const express = require('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('The file isn`t PDF'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

/**
 * @swagger
 * /api/v1/upload-pdf:
 *   post:
 *     summary: Sube un archivo PDF
 *     description: Sube un archivo PDF al servidor.
 *     tags:
 *       - Upload
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               pdf:
 *                 type: string
 *                 format: binary
 *                 description: El archivo PDF a subir.
 *     responses:
 *       200:
 *         description: Archivo subido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: File is uploaded
 *                 file:
 *                   type: object
 *                   properties:
 *                     fieldname:
 *                       type: string
 *                     originalname:
 *                       type: string
 *                     encoding:
 *                       type: string
 *                     mimetype:
 *                       type: string
 *                     destination:
 *                       type: string
 *                     filename:
 *                       type: string
 *                     path:
 *                       type: string
 *                     size:
 *                       type: integer
 *       400:
 *         description: Error al subir el archivo.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Fail to upload files.
 *                 message:
 *                   type: string
 *                   example: The file isn't PDF
 */
router.post('/', upload.single('pdf'), (req, res) => {
  try {
    res.send({
      status: 'success',
      message: 'File is uploaded',
      file: req.file,
    });
  } catch (error) {
    res.status(400).send({
      status: 'Fail to upload files.',
      message: error.message,
    });
  }
});

module.exports = router;
