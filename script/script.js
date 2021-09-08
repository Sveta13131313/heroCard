'use strict';
document.addEventListener('DOMContentLoaded', () => {

    //Функция запроса на сервер
    const getHero = async () => {
        const responce = await fetch('\dbHeroes-master/dbHeroes.json');
        const data = await responce.json();
        const result = await data;

        showHero(result);

    };

    //показать героев
    const showHero = (data) => {
        let heroesDiv = document.getElementById('heroes');
        data.forEach(elem => {
            const div = document.createElement('div');
            div.classList.add('post-item');
            if (elem['movies']) {
              
                div.innerHTML = '<div class="post-item-wrap">' +
                    '<a href="" class="post-link">' +
                    `<img src="${elem['photo']}">` +
                    '<div class="post-info">' +
                    '<div class="post-meta">' +
                    '<div class="post-date">' + elem['actors'] + '</div>' +
                    '<div class="post-date">' + elem['movies'] + '</div>' +
                    '<div>' + elem['status'] + '</div>' +
                    '</div>' +
                    '<h3 class="post-title">' + elem['name'] + '</h3>' +
                    '</div>' + '</a>' + '</div>';
            } else {
                div.innerHTML = '<div class="post-item-wrap">' +
                    '<a href="" class="post-link">' +
                    `<img src="${elem['photo']}">` +
                    '<div class="post-info">' +
                    '<div class="post-meta">' +
                    '<div class="post-date">' + elem['actors'] + '</div>' +
                    '<div>' + elem['status'] + '</div>' +
                    '</div>' +
                    '<h3 class="post-title">' + elem['name'] + '</h3>' +
                    '</div>' + '</a>' + '</div>';
            }
            heroesDiv.append(div);
        })
    };

    getHero();
});