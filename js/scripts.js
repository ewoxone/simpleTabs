window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tabs = document.querySelector('.tabs'),
        tab = document.querySelectorAll('.tab'),
        tabContent = document.querySelectorAll('.tab-content');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1); 

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    tabs.addEventListener('click', function(event) {
        let target = event.target;
        if (target.classList.contains('tab')) {
            tab.forEach((item) => item.classList.remove('tab_active'));
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    target.classList.add('tab_active');
                    break;
                }
            }
        }

    });
});