import { CategoriesTemplate } from './category.template';
import { ApiService } from "../../../api";

export const CategoryComponent = {
    async render() {
        let categoriesHTML = '';

        let categories = await ApiService.getCategories();          // Get categories data

        // Create categories template
        categories.forEach(category => {
            categoriesHTML += `<a href="#" class="flex-none px-3 py-2 bg-white text-gray-500 ${category.id === '2' ? 'active' : ''}">${category.name}</a>`;
        });

        return CategoriesTemplate(categoriesHTML);                  // return categories template
    }
};
