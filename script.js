fetch('https://run.mocky.io/v3/e8ddcc98-1f46-462e-9469-52854477cfc1')
    .then(response => response.json())
    .then(data => {
        const currencyBar = document.querySelector('.currency-bar');
        currencyBar.innerHTML = '';

        Object.entries(data).forEach(([key, [value, change, direction]]) => {
            const span = document.createElement('span');
            span.classList.add('currency-item');
            span.innerHTML = `
                        <a href="https://www.google.com">
                        ${key || key.toUpperCase()}
                        <span class="currency-item-value">${value}</span>
                        <span class="${direction}">${change}% ${direction === "up" ? "▲" : "▼"}</span>
                        </a>
                    `;
            currencyBar.appendChild(span);
        });
    })
    .catch(err => console.error(err));

fetch("https://run.mocky.io/v3/eb9eaaad-65f8-49d9-bb87-fe378292b025")
    .then(res => res.json())
    .then(data => {
        const carouselInner = document.querySelector('#carouselExample .carousel-inner');
        const indicators = document.querySelector('#carouselExample .carousel-indicators');

        data.haberler.forEach((imgUrl, index) => {

            const item = document.createElement('div');
            item.classList.add('carousel-item', 'square');
            if (index === 0) item.classList.add('active');
            item.innerHTML = `<a href="https://www.google.com"><img src="${imgUrl}" alt="Slide ${index + 1}" /></a>`;
            carouselInner.appendChild(item);

            const indicatorBtn = document.createElement('button');
            indicatorBtn.setAttribute('type', 'button');
            indicatorBtn.setAttribute('data-bs-target', '#carouselExample');
            indicatorBtn.setAttribute('data-bs-slide-to', index);
            indicatorBtn.setAttribute('aria-label', `Slide ${index + 1}`);
            if (index === 0) {
                indicatorBtn.classList.add('active');
                indicatorBtn.setAttribute('aria-current', 'true');
            }
            indicators.appendChild(indicatorBtn);
        });
    })
    .catch(err => console.error(err));

fetch('https://run.mocky.io/v3/a5120a12-ebd4-434a-bd0c-31705c0366cc')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector(".weather-container");

        const currentHTML = `
          <div class="current-weather">${data.city} - ${data.current.temperature}°C ${data.forecast[0].icon}</div>
          <div class="alert">🌡️ ${data.current.warning}</div>
        `;

        let forecastHTML = '<div class="forecast">';
        data.forecast.forEach(day => {
            forecastHTML += `
            <div class="day">
              <div>${day.day}</div>
              <div>${day.icon}</div>
              <div class="temp">${day.high}°</div>
              <div class="temp">${day.low}°</div>
            </div>
          `;
        });
        forecastHTML += '</div>';

        container.innerHTML = currentHTML + forecastHTML;
    })
    .catch(error => {
        console.error(error);
    });

fetch('https://run.mocky.io/v3/2713b2f5-32a7-4d7c-9c83-9552bf567e99')
    .then(response => response.json())
    .then(data => {

        document.getElementById("ad1").src = data.adImages[0];
        document.getElementById("ad2").src = data.adImages[1];

        const newsImage = document.querySelector(".news-card .img-holder img");
        const newsLinkImg = document.querySelector(".news-card .img-holder");
        const newsText = document.querySelector(".news-card-footer");

        newsImage.src = data.featured.img;
        newsImage.alt = data.featured.title;
        newsText.textContent = data.featured.title;
    })
    .catch(error => {
        console.error(error);
    });