import '@fortawesome/fontawesome-free/js/all.js';
import Router from 'very-tiny-router';

import {ItemListComponent} from "./app/item-list/item-list.component";
import {ItemViewComponent} from "./app/item-view/item-view.component";
import './style.scss'; //TailwindCSS and Custom Style definition

// Route Definition
const router = new Router({
    routes: [
        { path: '/', action: () => ItemListComponent.init() },
        { path: '/items/:id', action: ({ id }) => ItemViewComponent.init(id) },
        { path: '/*', action: () => console.log('Not found!') }
    ],
    scrollRestoration: 'auto'
});

router.init();

