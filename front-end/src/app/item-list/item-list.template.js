export const ItemListTemplate = list => `
    <button class="absolute top-28 left-1/2 transform -translate-x-1/2 bg-white text-gray-600 shadow-md px-4 py-1 rounded-full z-10">
        <i class="fas fa-arrow-up text-red-dark mr-1"></i>
        <span>新しい商品</span>    
    </button>
    <div class="absolute w-full h-screen overflow-y-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-2 pt-28 pb-2 md:px-4 md:pb-4 bg-gray-200 itemList">
        ${list}
    </div>
    <button class="fixed flex flex-col -bottom-3 -right-5 items-center justify-center text-white bg-red-dark rounded-full px-8 py-5 listing">
        <span>出品</span>
        <i class="fas fa-camera"></i>
    </button>
`;
