import timer from '../../JS_task_answers/JS_step_25/Food/js/modules/timer';
import calc from './modules/calc';
import cards from './modules/cards';
import slider from './modules/slider';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', function() {

    tabs('0');
    slider();
    calc();
    timer('.timer', '2023-10-12')
    cards()
});