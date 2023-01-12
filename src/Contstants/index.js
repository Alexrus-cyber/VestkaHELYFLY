import woman from "../assets/Woman.png";
import plane from "../assets/plane.png";
import helicopter from "../assets/Helicopter.png";
import first from "../assets/first.png";
import review1 from "../assets/reviews1.png";
import review2 from "../assets/reviews2.png";
import review3 from "../assets/reviews3.png";
import Instagram from "../assets/Instragram.svg";
import vk from "../assets/vk.svg";
import Facebook from "../assets/Facebook.svg";
import clock from "../assets/clock.svg";
import camera from "../assets/camera.svg";
import Moscow from "../assets/Moscow.svg";
import Message from "../assets/Messages.svg";

export const aboutMessage = [
    {
        id: 1,
        text: "        Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов\n" +
            "                        туристической отрасли, которые хорошо разбираются в маркетинге, операциях и услугах обслуживания\n" +
            "                        клиентов, специализирующихся на совместном использовании и частных турах.",
        title: "Об организаторе:",
        text2: "Сначала мы (я и моя команда) изучаем интересы клиентов, а затем\n" +
            "                        придумываем подходящее решение, которое соответствует бюджету\n" +
            "                        и планам клиента. Мы никогда не зависим от субпоставщиков\n" +
            "                        и не свяжемся…"
    },
    {
        id: 2,
        text: " Встречу вас на машине после длительного перелёта. Качественный подбор места и локации для вашей\n" +
            "                        съемки. При необходимости всегда возможно прерваться на обед/ужин. Более 50 фотографий на выходе\n" +
            "                        с\n" +
            "                        обработкой и замечательные впечатления о Дубае !",
        title: "Что я предоставлю:"
    }
]
export const inputs = [
    {id: 1, title: "Дата", placeholder: "Дата", object: true},
    {id: 2, title: "Email", placeholder: "Электронная почта"},
    {id: 3, title: "Имя", placeholder: "Имя"},
    {id: 4, title: "Фамилия", placeholder: "Фамилия"},
    {id: 5, title: "Телефон", placeholder: "+7 (905) 184-81-40"},
]
export const carts = [
    {id: 1, img: woman},
    {id: 2, img: plane},
    {id: 3, img: helicopter},
    {id: 4, img: first},
    {id: 5, img: helicopter},
    {id: 6, img: first},
    {id: 7, img: plane},
    {id: 8, img: helicopter},
]
export const placeTime = [
    {id: 1, time: "15:00-18:00", price: "1500", places: "1 место"},
    {id: 2, time: "19:00-22:00", price: "1500", places: "1 место"}
]
export const mapMessage = [
    {id: 1, title: "Где встречаемся?", text: "Москва"},
    {id: 2, title: "Время съемки", text: "3 часа"},
    {id: 3, title: "Мест осталось:", text: "2 места"},
]
export const texts = [
    {
        id: 1,
        name: "Валерия Антонова",
        job: "Арт-директор",
        text: "Хотим выразить огромную благодарность вашей компании! Получили море ощущений, " +
            "все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!",
        data: "27 Апреля, 2019г.",
        img: review1,
    },
    {
        id: 2,
        name: "Виталий Петров",
        job: "Фотограф",
        text: "Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) " +
            "Впечатлило всё: сам вертолет, взлет, полёт, приземление. \n" +
            "Организация полёта отличная. Спасибо!",
        data: "19 Апреля, 2019г..",
        img: review2,
    },
    {
        id: 3,
        name: "Джим Керри",
        job: "",
        text: "Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы \n" +
            "с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить)))" +
            " Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!",
        data: "11 Апреля, 2019г.",
        img: review3,
    }
]
export const socialIcons = [
    {id: 1, img: vk},
    {id: 2, img: Facebook},
    {id: 3, img: Instagram}
]
export const menuShooting = [
    {id: 1, img: clock, text: "3 часа съемки"},
    {id: 2, img: camera, text: "Более 50 фотографий"},
    {id: 3, img: Moscow, text: "Москва"},
    {id: 4, img: Message, text: "Готовы ответить на любые вопросы"}
]