const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
    async index(request, response) {
        const categories = await CategoriesRepository.findAll();

        response.json(categories);
    }

    async store(request, response) {
        const { name } = request.body;

        if (!name) {
            return response.status(400).json({ error: 'Name is required' });
        }

        const category = await CategoriesRepository.create({ name });

        response.json(category);
    }

    async update(request, response) {
        const { id } = request.params;
        const { name } = request.body;

        const updatedCategory = await CategoriesRepository.update(id, name);

        response.json(updatedCategory);
    }

    async delete(request, response) {
        const { id } = request.params;

        const deletedCategory = await CategoriesRepository.delete(id);

        response.status(204).json({ message: 'User deleted success', deletedCategory });
    }
}

module.exports = new CategoryController();
