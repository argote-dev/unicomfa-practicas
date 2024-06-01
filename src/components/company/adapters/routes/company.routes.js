const express = require('express');
const router = express.Router();

const CompanyRepository = require('../repository/company.repository');
const CreateCompanyUseCase = require('../../usecase/create.usecase');
const ListCompanyUseCase = require('../../usecase/list.usecase');
const UpdateCompanyUseCase = require('../../usecase/update.usecase');
const DeleteCompanyUsecase = require('../../usecase/delete.usecase');
const CompanyController = require('../controller/company.controller');

const companyRepository = new CompanyRepository();
const createCompanyUseCase = new CreateCompanyUseCase(companyRepository);
const listCompanyUseCase = new ListCompanyUseCase(companyRepository);
const updateCompanyUseCase = new UpdateCompanyUseCase(companyRepository);
const deleteCompanyUseCase = new DeleteCompanyUsecase(companyRepository);
const companyController = new CompanyController(
  createCompanyUseCase,
  listCompanyUseCase,
  updateCompanyUseCase,
  deleteCompanyUseCase,
);

/**
 * @swagger
 * /api/v1/company:
 *   post:
 *     tags:
 *      - Company
 *     summary: Insert new company
 *     description: Save company into db.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              nit:
 *                type: int
 *                example: 10028971
 *              name:
 *                type: string
 *                exmaple: BBVA
 *              date_association:
 *                type: string
 *                example: 12-07-2023
 *              address:
 *                 type: string
 *                 example: cra2-02-19
 *              phone:
 *                 type: int
 *                 example: 2134565342
 *              email:
 *                 type: string
 *                 example: bbva@gmail.com
 *     responses:
 *          '201':
 *             description: company created
 *          '500':
 *             description: Server error
 */
router.post('/', async (req, res) => {
  await companyController.insertCompany(req, res);
});

/**
 * @swagger
 * /api/v1/company:
 *   get:
 *     tags:
 *       - Company
 *     summary: Get all Company registered in the database
 *     description: List of all company.
 *     responses:
 *       '200':
 *         description: company found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  id:
 *                   type: integer
 *                   format: int64
 *                   example: 1
 *                  nit:
 *                   type: int
 *                   example: 10028971
 *                  name:
 *                   type: string
 *                   exmaple: BBVA
 *                  date_association:
 *                   type: string
 *                   example: 12-07-2023
 *                  address:
 *                   type: string
 *                   example: cra2-02-19
 *                  phone:
 *                   type: int
 *                   example: 2134565342
 *                  email:
 *                   type: string
 *                   example: bbva@gmail.com
 *
 */
router.get('/', async (req, res) => {
  await companyController.listAllCompany(req, res);
});

/**
 * @swagger
 * /api/v1/company:
 *   put:
 *     tags:
 *      - Company
 *     summary: Update company
 *     description: Update info of company.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              nit:
 *                type: int
 *                example: 10028971
 *              name:
 *                type: string
 *                exmaple: BBVA
 *              date_association:
 *                type: string
 *                example: 12-07-2023
 *              address:
 *                 type: string
 *                 example: cra2-02-19
 *              phone:
 *                 type: int
 *                 example: 2134565342
 *              email:
 *                 type: string
 *                 example: bbva@gmail.com
 *
 *     responses:
 *          '200':
 *             description: company created
 *          '500':
 *             description: Server error
 */
router.put('/', async (req, res) => {
  await companyController.updateCompanyInfo(req, res);
});

/**
 * @swagger
 * /api/v1/company/{id}:
 *   delete:
 *     tags:
 *       - Company
 *     summary: Delete Company by id
 *     description: Delete register of company.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Company deleted
 *       '404':
 *         description: Company not found
 *       '500':
 *         description: Server internal error
 */
router.delete('/:id', async (req, res) => {
  await companyController.deleteCompanyById(req, res);
});

module.exports = router;
