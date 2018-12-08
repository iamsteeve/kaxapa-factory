import './styles/index.scss';
import * as SmoothScroll  from 'smooth-scroll'
import * as $ from 'jquery';
import 'popper.js';
function requireAll(r:any) { r.keys().forEach(r); }
// @ts-ignore
requireAll(require.context('./img/', true));

const scroll = new SmoothScroll('[data-scroll]',{
    header: null,
    speed:600,
    easing:'easeInOutCubic',
    offset: 0,
});


$(function () {


});

