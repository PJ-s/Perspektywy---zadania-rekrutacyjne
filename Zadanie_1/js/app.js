$(() => {

    const url = 'http://localhost:3000/db';

    const insertNews = (data) => {
        for(const key in data) {

            const imageSrc = "https:" + data[key].img;

            const link = "https:" + data[key].link;

            const imageTitle = data[key].title;

            const imageElement =
                $(`<li class="news-list-element">
                        <a href=${link}>
                            <img src=${imageSrc} alt=${imageTitle}>
                        </a>
                        <p class="image-title">${imageTitle}</p>
                   </li>`);

            $('#news-list').append(imageElement);
        }
    };

    $.ajax({url}).done(insertNews);
});