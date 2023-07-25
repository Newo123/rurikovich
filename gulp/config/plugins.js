import replace from 'gulp-replace'; // Поиск и замена
import plumber from 'gulp-plumber'; // Обработка ошибок
import notify from 'gulp-notify'; // Сообщение (подсказки)
import browsersync from 'browser-sync'; // локальный сервер
import newer from 'gulp-newer'; // проверка обновления
import ifPlugin from "gulp-if"; // Условное ветвление

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}