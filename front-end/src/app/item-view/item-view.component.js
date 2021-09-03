import { ItemViewTemplate } from './item-view.template';
import { ApiService } from "../../api";

export const ItemViewComponent = {
    init(itemId) {
        this.appElement = document.querySelector('#app');       // Get selector #app element
        this.id = parseInt(itemId);
        this.render();                                                  // Get rendered html for item view page
    },

    async render() {
        this.appElement.innerHTML = await this.getItemViewTemplate();   // Insert template
    },

    async getItemViewTemplate() {
        let itemData = await ApiService.getItem(this.id);               // Get item data

        if (!itemData || this.id === 0)                                 // If no item or id == 0, show error page
            return `<p class="text-base text-center text-gray-500 mt-10">
                        No Item
                    </p>
                    <a href="/" class="absolute top-0 left-0 bg-white text-gray-400 font-bold text-xl px-4 py-2 outline-none router-link" type="button">
                        <i class="fas fa-chevron-left"></i>
                    </a>
                    `;

        return ItemViewTemplate(itemData);                              // Return item view template
    }
};
