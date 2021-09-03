export const ItemHeaderTemplate = () => `
    <div class="absolute top-0 w-full flex flex-row items-center justify-between bg-white px-4 py-2 z-10 header">
        <div class="flex flex-row flex-auto">
            <button class="bg-white text-gray-400 font-bold text-xl px-4 py-2 outline-none" type="button">
                <i class="fas fa-bars"></i>
            </button>
            <input type="text" class="w-full mx-2 px-2 py-2 placeholder-gray-400 text-gray-500 bg-gray-200 rounded-lg text-base focus:outline-none" id="search" placeholder="検索">
        </div>
        <div class="flex flex-row">
            <button class="bg-white text-gray-400 font-bold text-xl px-4 py-2 outline-none" type="button">
                <i class="far fa-bell"></i>
            </button>
            <button class="bg-white text-gray-400 font-bold text-xl px-4 py-2 outline-none" type="button">
                <i class="fas fa-check"></i>
            </button>        
        </div>
    </div>
`;
