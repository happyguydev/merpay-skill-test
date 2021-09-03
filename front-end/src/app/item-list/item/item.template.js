export const ItemTemplate = item => `
    <div class="relative bg-white transition duration-500 ease-in-out transform md:hover:scale-105 itemList__item">
        <div class="absolute top-0 w-full h-full overflow-hidden">
            <span class="${item.is_sold_out === true ? 'block' : 'hidden'} transform -rotate-45 origin-bottom-left absolute top-6 px-9 pt-6 pb-2 text-white text-base z-10 bg-red-dark">
                SOLD
            </span>
        </div>
        <a href="/items/${item.id}" class="absolute top-0 left-0 w-full h-full z-10 router-link"></a>
        <div class="relative">
            <div class="itemList__skeletonBox absolute top-0 left-0 group-hover:scale-110 transition-transform transform-center block w-full"></div>
            <img src="${item.image}" class="absolute top-0 left-0 h-full min-h-full object-cover" alt="Item Image ${item.id}">
        </div>
        <div class="p-2">
            <p class="text-gray-500 text-base item-name">${item.name}</p>
            <div class="flex flex-row items-center justify-between text-gray-700">
                <p class="font-bold text-lg item-price">¥${item.price}</p>
                <button class="${item.like_count === 0 ? 'hidden' : 'block'} text-gray-500 text-base z-20">
                    <i class="far fa-heart"></i>
                    ${item.like_count}                
                </button>
            </div>
        </div>
    </div>
`;
