import './styles/index.scss';
import * as SmoothScroll  from 'smooth-scroll'
import * as $ from 'jquery';
import * as M from 'materialize-css';
import * as Aos from 'aos';
function requireAll(r:any) { r.keys().forEach(r); }

// @ts-ignore
requireAll(require.context('./images/', true));

const scroll = new SmoothScroll('[data-scroll]',{
    header: null,
    speed:600,
    easing:'easeInOutCubic',
    offset: 0,
});

$(function () {
    Aos.init();
    const sidenav = document.querySelectorAll('.sidenav');
    const instanceSidenav = M.Sidenav.init(sidenav, {});

    const parallax = document.querySelectorAll('.parallax');
    const instanceParallax = M.Parallax.init(parallax, {});

    const select = document.querySelectorAll('select');
    const instanceSelect = M.FormSelect.init(select,{})


});

