const content = [
    {
        title: "this is a title",
        body: "this is some body text",
        img: "/vakantiekok/img/placeholder.jpg",
        url: '/travel/post/'
    },
    {
        title: "this is a title",
        body: "this is some body text",
        img: "/vakantiekok/img/placeholder.jpg",
        url: '/travel/post/'
    },
    {
        title: "this is a title",
        body: "this is some body text",
        img: "/vakantiekok/img/placeholder.jpg",
        url: '/travel/post/'
    }
];

function createCards(e) {
    const target = document.querySelector('#travel-wrapper');

    for (let i = 0; i < content.length; i++) {
        let template = `
            <div class="card">
                <img src="${content[i].img}" alt="${content[i].title}">
                <h5>
                    ${content[i].title}
                </h5>
                <p>
                    ${content[i].body}
                </p>
                <a href="${content[i].url}" class="btn ghost-btn">
                    Lees meer
                </a>
            </div>
        `

        target.insertAdjacentHTML('beforeend', template);
    }
};

$(document).ready(createCards);