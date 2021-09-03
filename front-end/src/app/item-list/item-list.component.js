import { CategoryComponent } from "./categories/category.component";
import { ItemHeaderTemplate } from "./item-header.template";
import { ItemListTemplate } from "./item-list.template";
import { ItemTemplate } from "./item/item.template";
import { ApiService } from "../../api";

export const ItemListComponent = {
    init() {
        this.appElement = document.querySelector('#app');       // Get selector #app element
        this.render();                                                  // Get rendered html for item list page
    },

    async render() {
        let itemListHTML = '';
        itemListHTML += ItemHeaderTemplate();                           // Item list page header html
        itemListHTML += await CategoryComponent.render();               // Get categories html
        itemListHTML += await this.getItemListTemplate();               // Get item list html

        this.appElement.innerHTML = itemListHTML;                       // Insert template
    },

    async getItemListTemplate() {
        let items = await ApiService.getItems();                        // Get item list data

        let itemList = '';

        items.forEach(item => {
            item.price = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");       // Price value separate with comma
            itemList += ItemTemplate(item);                             // Add item template
        });

        return ItemListTemplate(itemList);                              // Return item list template
    },
};
