import timer from '../../JS_task_answers/JS_step_25/Food/js/modules/timer';
import calc from './modules/calc';
import cards from './modules/cards';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import forms from './modules/forms';


window.addEventListener('DOMContentLoaded', function() {
    

    tabs('0');
    slider();
    modal('[data-modal]', '.modal')
    forms('.order__form');
    cards()
    calc();
    timer('.timer', '2023-10-12')
    
});