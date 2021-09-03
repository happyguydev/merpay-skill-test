export const ItemViewTemplate = item => `
    <div class="flex flex-row items-center justify-between p-2 header">
        <div class="flex flex-row flex-auto items-center">
            <a href="/" class="bg-white text-gray-400 font-bold text-xl px-4 py-2 outline-none router-link" type="button">
                <i class="fas fa-chevron-left"></i>
            </a>
            <span class="font-bold text-xl ml-2">${item.name}</span>
        </div>
        <div class="flex flex-row">
            <button class="bg-white text-gray-400 font-bold text-xl px-4 py-2 outline-none" type="button">
                <i class="fas fa-search"></i>
            </button>
            <button class="bg-white text-gray-400 font-bold text-xl px-4 py-2 outline-none" type="button">
                <i class="fas fa-upload"></i>
            </button>        
        </div>
    </div>
    <div class="overflow-y-auto pb-20 item">
        <div class="relative max-w-screen-sm mx-auto">
            <div class="itemList__skeletonBox absolute top-0 left-0 group-hover:scale-110 transition-transform transform-center block w-full"></div>
            <img src="${item.image}" class="absolute top-0 left-0 h-full min-h-full object-cover" alt="Item Image ${item.id}">
        </div>
        <div class="px-4 pt-2">
            <p class="text-gray-700 text-base mb-5">${item.name}</p>
            <div class="flex flex-row items-center justify-between mb-2">
                <div class="flex flex-row items-center">
                    <div class="flex flex-row items-center text-gray-500 font-bold">
                        <button class="bg-gray-200 text-gray-400 text-xs rounded-full px-3 py-2">
                            <i class="far fa-heart"></i>
                            いいね!
                        </button>
                        <span class="ml-1">${item.like_count}</span>
                    </div>   
                    <button class="bg-gray-200 text-gray-400 text-xs rounded-full px-3 py-2 ml-5">
                        <i class="far fa-comment-alt"></i>
                        コメント
                    </button>
                </div>
                <button class="bg-gray-200 text-gray-400 text-xs text-center p-2 rounded-full w-8 h-8">
                    <i class="fas fa-flag"></i>
                </button>
            </div>
            <p class="-mx-4 mb-1 px-4 pt-8 pb-2 bg-gray-200 text-gray-400">
                商品の説明
            </p>
            <p class="text-gray-700 text-base">${item.description}</p>
        </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full h-16 flex flex-row items-center justify-between p-2 bg-brown text-white">
        <p class="flex flex-row items-end">
            <span class="font-bold text-3xl">¥${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            <span class="text-sm ml-1 mb-1">${item.shipping_fee}</span>
        </p>
        <button class="bg-red-dark h-full px-3 text-white font-bold text-base rounded">購入手続きへ</button>
    </div>
`;
