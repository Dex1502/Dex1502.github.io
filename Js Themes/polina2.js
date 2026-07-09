const words=[
    ["Cave","[кейв]","Пещера","https://static.tildacdn.com/tild3432-6163-4164-a666-626533393334/1610507695_7-p-fon-s.jpg"],
    ["Forest","[форест]","Лес","https://www.exitlag.com/blog/wp-content/uploads/2026/03/spruce-minecraft2-1024x576.png.webp"],
    ["Revive","[ривайв]","Оживлять, возвращать к жизни","https://basket-27.wbbasket.ru/vol4881/part488193/488193478/images/big/1.webp"],
    ["Fossil","[фоссил]","Окаменелость","https://avatars.mds.yandex.net/i?id=43fb428a41ed477dacb357d22781180e_l-4055261-images-thumbs&n=13"],
    ["Ancient","[эншент]","Древний","https://www.exitlag.com/blog/wp-content/uploads/2024/12/All-About-How-to-Find-and-Loot-the-Ancient-City-Minecraft.webp"],
    ["Invention","[инвэншн]","Изобретение","https://habrastorage.org/r/w1560/getpro/habr/upload_files/f0a/540/d0a/f0a540d0aaa7011e2fe3b229e62c42f2.jpg"],
    ["Tool","[тул]","Инструмент","https://i.ytimg.com/vi/-FyS3-O5aAs/maxresdefault.jpg"],
    ["Weapon","[вэапон]","Оружие","https://i.pinimg.com/originals/97/dc/cd/97dccd2688af190414b915087717ec9a.png"],
    ["Bow","[боу]","Лук (для стрельбы)","https://i.pinimg.com/originals/6c/75/f8/6c75f8d42f9a0b59b51858044bb0f434.jpg?nii=t"],
    ["Arrow","[эроу]","Стрела","https://i.ytimg.com/vi/389B8spvf3A/maxresdefault.jpg"],
    ["Rope","[роуп]","Верёвка","https://avatars.mds.yandex.net/i?id=5d0ae90ca2a067cffa28ee2e7618f3c4_l-5254303-images-thumbs&n=13"],
    ["Spark","[спарк]","Искра","https://masterpiecer-images.s3.yandex.net/0495daa0758111ee978d363fac71b015:upscaled"],
    ["Flame","[флейм]","Пламя","https://avatars.mds.yandex.net/i?id=56d668c529ef038ce72c75d4dd742db2_l-9222747-images-thumbs&n=13"],
    ["River","[ривер]","Река","https://i.tlauncher.org/images/50-19.png"],
    ["Spring","[спринг]","Родник, источник","https://avatars.mds.yandex.net/i?id=89606cd2179da9788b072138ccb885a9_l-5254476-images-thumbs&n=13"],
    ["Soil","[сойл]","Почва, земля","https://i.pinimg.com/originals/76/47/85/76478565d3b72e66d981de33ed519fba.jpg?nii=t"],
    ["Plant","[плэнт]","Растение","https://avatars.mds.yandex.net/i?id=e7b3ea14d7f46b742557a5e36b4a762b4b8e00c3-5042077-images-thumbs&n=13"],
    ["Crop","[кроп]","Сельскохозяйственная культура, урожай","https://i.ytimg.com/vi/Xu0UJ7KR-nw/maxresdefault.jpg"],
    ["Seed","[сид]","Семя, зерно","https://avatars.mds.yandex.net/i?id=61aa861cd26a28fe52e8f19f0b0d6a28_l-4578804-images-thumbs&n=13"],
    ["Harvest","[харвест]","Собирать урожай","https://img.freepik.com/premium-vector/hand-drawn-flat-fruit-harvest-illustration-with-woman-collecting-fruits-from-tree_98292-23080.jpg?semt=ais_hybrid&w=740&q=80"],
    ["Hunt","[хант]","Охотиться","https://avatars.mds.yandex.net/i?id=432e872bbf1f2b729d6b068e1891eff5_l-10261390-images-thumbs&n=13"],
    ["Trap","[трэп]","Ловушка","https://avatars.mds.yandex.net/get-mpic/4412310/2a0000018a8bba686b0d8398fcde5959b656/orig"],
    ["Animal","[энимал]","Животное","https://avatars.mds.yandex.net/i?id=c5321095c3962fc5445198a2e453ac49_l-4404915-images-thumbs&n=13"],
    ["Cook","[кук]","Готовить","https://avatars.mds.yandex.net/i?id=530c0253865b093a7e599e1bafc551e7_l-10244736-images-thumbs&n=13"],
    ["Boil","[бойл]","Кипятить","https://avatars.mds.yandex.net/i?id=fea1823c35845e06ccf1d253eafffc45_l-4592885-images-thumbs&n=13"],
    ["Roast","[роуст]","Жарить","https://e3.edimdoma.ru/data/posts/0003/3847/33847-ed4_big_wide.jpg?1769419901"],
    ["Raw","[роу]","Сырой","https://img.freepik.com/premium-photo/raw-beef-steak-white-background-top-view-angle-generative-ai_516484-1219.jpg"],
    ["Edible","[эдибл]","Съедобный","https://avatars.mds.yandex.net/i?id=cb3c17d9eee27180d64d826c38ef18e1_l-7054524-images-thumbs&n=13"],
    ["Poison","[пойзэн]","Яд","https://www.cdc.gov/chemical-threats-and-toxins-laboratory/media/images/2024/05/Toxins-Poison-Bottle-G.jpg"],
    ["Danger","[дейнджер]","Опасность","https://img.freepik.com/free-vector/warning-sign-skull-yellow_78370-3696.jpg?semt=ais_incoming&w=740&q=80"],
    ["Threat","[трет]","Угроза","https://avatars.mds.yandex.net/i?id=589d3875be17dd5f711659306701f3f0_l-4576218-images-thumbs&n=13"],
    ["Attack","[этак]","Нападать","https://avatars.mds.yandex.net/i?id=fd8f0d648ff898e4527c7b62cdc3ad5e_l-9289753-images-thumbs&n=13"],
    ["Defend","[дифенд]","Защищаться","https://tarotrening.ru/wp-content/uploads/2022/02/Shield-AdobeStock_65499335-1024x1024-1.jpeg"],
    ["Shield","[шилд]","Щит","https://i.pinimg.com/736x/ec/a8/b0/eca8b071c34d73e1f3c044dfdb2fa715.jpg"],
    ["Armor","[армор]","Броня, доспехи","https://i.pinimg.com/originals/15/d8/a2/15d8a2e3be0a56a38ae9cba0b73c46e8.jpg?nii=t"],
    ["Battle","[бэтл]","Битва, сражение","https://img.freepik.com/premium-photo/spartans-thermopylae-last-stand-against-persians_818261-14397.jpg?semt=ais_hybrid&w=740&q=80"],
    ["Success","[саксес]","Успех","https://img.freepik.com/premium-vector/flat-style-illustration-success-achievement_1324030-1176.jpg?semt=ais_hybrid&w=740&q=80"],
    ["Failure","[фейльюр]","Неудача","https://static.vecteezy.com/system/resources/previews/004/711/098/non_2x/business-loss-concepts-vector.jpg"],
    ["Mistake","[мистейк]","Ошибка","https://img-webcalypt.ru/storage/memes/128576/202510/hYUrucOv4XdC1e3DmT6YX8uVt6eMpjPXZ8qLBBhejABZmgYT6W9a2QFNwYeQyDR9Uzw4WWuDjRVsosLUYWfanEFRfuD9OhALVyfbHXvoX7qj18CzfVVDKzzWOvuRowRU.jpeg"],
    ["Fix","[фикс]","Чинить, исправлять","https://p0.zoon.ru/preview/4NpsyAYPh7d2AyMzzrOpnQ/2400x1500x85/1/3/9/original_636b5be3fd796cac9d011404_636bacc3d2f482.07813520.jpg"],
    ["Build","[билд]","Строить","https://www.s-m-r.ru/wp-content/uploads/2026/01/40.jpg"],
    ["Create","[криэйт]","Создавать","https://www.sostav.ru/blogs/images/feeds/46/91317.jpg"],
    ["Design","[дизайн]","Проектировать, дизайн","https://s.domovita.by/images/e1/1dc722db5d6c751f292a2a6ef983f1d2.png"],
    ["Iron","[айрон]","Железо","https://avatars.mds.yandex.net/i?id=97704cf5efd263adaff942376d9b59fe_l-5346809-images-thumbs&n=13"],
    ["Copper","[коппер]","Медь","https://avatars.mds.yandex.net/i?id=47b629405221415b5b31a04831ef4865_l-5870462-images-thumbs&n=13"],
    ["Clay","[клей]","Глина","https://avatars.mds.yandex.net/i?id=1823c6917adbcfce0c571f8439a0c64d_l-5026383-images-thumbs&n=13"],
    ["Wood","[вуд]","Дерево, древесина","https://i.pinimg.com/originals/59/6c/98/596c981e23a3a4454965ac80e04aac3e.jpg"],
    ["Coal","[коул]","Уголь","https://i.pinimg.com/originals/d4/8c/d0/d48cd0bd46a14a6a985063f31714a120.jpg?nii=t"],
    ["Acid","[эсид]","Кислота","https://i.yaklass.by/res/6610ce5e-a349-413c-a190-d73d661bd5db/изображениеviber20210528155808w121.jpg"],
    ["Reaction","[риэкшн]","Реакция (химическая)","https://fsd.kopilkaurokov.ru/up/html/2023/12/15/k_657c2af6d77d2/img_user_file_657c2af8ba2c9_1.jpg"],
    ["Equation","[иквейшн]","Уравнение","https://blog.skillfactory.ru/wp-content/uploads/2024/06/image75.png"],
    ["Theory","[сиори]","Теория","https://static.vecteezy.com/system/resources/previews/007/117/226/non_2x/educational-psychology-flat-person-concept-with-light-bulb-and-head-teaching-techniques-for-minds-intellectual-development-empowering-human-curiosity-imagination-and-discovery-process-by-learning-vector.jpg"],
    ["Researcher","[рисёрчер]","Исследователь","https://img.freepik.com/premium-vector/scientist-girl-doing-science-experiment_1639-44171.jpg?semt=ais_hybrid&w=740"],
    ["Engineer","[энджинир]","Инженер","https://i.vuzopedia.ru/storage/app/uploads/public/691/702/76c/69170276c6fc0289462955.jpg"],
    ["Craftsman","[крафтсмэн]","Мастер, ремесленник","https://cdn.culture.ru/images/354030a6-da5d-59a9-b52c-36c11bfdb672"],
    ["Ally","[элай]","Союзник","https://i.pinimg.com/originals/24/52/f3/2452f38765ec341e18ea2a0afd9e4ff0.jpg"],
    ["Betray","[битрэй]","Предавать","https://i.pinimg.com/originals/c5/e5/1c/c5e51ce31a016c2d8f83c018be09a369.jpg?nii=t"],
    ["Trust","[траст]","Доверять","https://static.tildacdn.com/tild6434-3461-4532-b531-373130393536/f7f2aa8b1d2f3a93dce4.jpg"],
    ["Doubt","[даут]","Сомневаться","https://sun9-7.userapi.com/impg/m92igpKLbTk0V8cInfbvTcFCVSWmB9OSohVWUA/Fd6jW7Td8_Y.jpg?size=1280x1280&quality=95&sign=f3830e599da336f868a048ede05df848&c_uniq_tag=TaozYNsENQkdmAgoJW_U0oRNQbZcN700hbieQpkM3Kg&type=album"],
    ["Fear","[фир]","Страх, бояться","https://avatars.mds.yandex.net/i?id=642005c96387af942e16132dafdbe30886f05587-4034313-images-thumbs&n=13"],
    ["Determined","[дитёрминд]","Решительный","https://static.vecteezy.com/system/resources/thumbnails/026/112/927/small_2x/young-purposeful-man-in-superhero-cape-flies-in-sky-towards-target-wanting-to-reach-goal-faster-ambitious-businessman-striving-for-success-and-career-growth-or-increasing-company-profits-vector.jpg"],
    ["Stubborn","[стабборн]","Упрямый","https://avatars.mds.yandex.net/i?id=dd2e650323bae690aeecdd32e6dd9d48_l-10199799-images-thumbs&n=13"],
    ["Brilliant","[брильянт]","Блестящий, гениальный","https://i.pinimg.com/736x/bc/ae/a6/bcaea69d66198ca3dac8735b92ac1bd0.jpg"],
]   

 



 
 








 









 
 
 


 
 


 
