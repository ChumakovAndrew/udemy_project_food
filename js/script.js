import timer from '../../JS_task_answers/JS_step_25/Food/js/modules/timer';
import calc from './modules/calc';
import slider from './modules/slider';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', function() {

    tabs();
    slider();
    calc();
    timer('.timer', '2023-10-12')
});