/**
 * @swagger
 * /api/products:
 *     get:
 *      tags:
 *        - Product
 *      description: Get all products
 *      responses:
 *        200:
 *          description: Success
 */

/**
 * @swagger
 * /api/products:
 *     post:
 *      tags:
 *        - Product
 *      description: Create a new product
 *      content:
 *        application/json
 *      parameters:
 *        - name: name
 *          type: string
 *          required: false
 *          in: formData
 *        - name: price
 *          type: string
 *          required: false
 *          in: formData
 *        - name: rating
 *          type: number
 *          required: false
 *          in: formData
 *      responses:
 *        500:
 *          description: Error
 */

/**
 * @swagger
 * /api/products/{id}:
 *     get:
 *        tags:
 *          - Product
 *        description: Get a product by id
 *        parameters:
 *          - name: id
 *            type: string
 *            required: true
 *            in: path
 *        responses:
 *          500:
 *            description: Error
 */

/**
 * @swagger
 * /api/products/{id}:
 *    patch:
 *      tags:
 *        - Product
 *      description: Update a product with id
 *      parameters:
 *        - name: id
 *          type: string
 *          required: true
 *          in: path
 *        - name: name
 *          type: string
 *          required: false
 *          in: formData
 *        - name: price
 *          type: string
 *          required: false
 *          in: formData
 *        - name: rating
 *          type: number
 *          required: false
 *          in: formData
 *      responses:
 *        500:
 *          description: error
 */

/**
 * @swagger
 * /api/products/{id}:
 *     delete:
 *        tags:
 *          - Product
 *        description: Delete a product by id
 *        parameters:
 *          - name: id
 *            type: string
 *            required: true
 *            in: path
 *        responses:
 *          500:
 *            description: Error
 */
