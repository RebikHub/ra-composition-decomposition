import React from "react";

export default function App() {
  const news = [
    {
      img: '#',
      text: 'Путин упростил получение автомобильных номеров'
    },
    {
      img: '#',
      text: 'В команде Зеленского раскрыли план реформ на Украине'
    },
    {
      img: '#',
      text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье'
    },
    {
      img: '#',
      text: 'Суд закрыл дело Демпартии США против России'
    },
    {
      img: '#',
      text: 'На Украине призвали создать ракеты для удара по Москве'
    }
  ]
  return (
    <>
      <a href="#" className="search-link">Яндекс</a>
      <div className="App">
        <div className="news-side">
          <div className="news">
            <header className="header-news">
              <ul className="header-news-list">
                <li><a href="#">Сейчас в СМИ</a></li>
                <li><a href="#">в Германии</a></li>
                <li><a href="#">Рекомендуем</a></li>
              </ul>
              <p className="news-date">31 июля, среда 02 32</p>
            </header>
            <nav className="body-news">
              <ul>
                <li>
                  <img src="#" alt="..." />
                  <a href="#">{news[0].text}</a>
                </li>
                <li>
                  <img src="#" alt="..." />
                  <a href="#">{news[1].text}</a>
                </li>
                <li>
                  <img src="#" alt="..." />
                  <a href="#">{news[2].text}</a>
                </li>
                <li>
                  <img src="#" alt="..." />
                  <a href="#">{news[3].text}</a>
                </li>
                <li>
                  <img src="#" alt="..." />
                  <a href="#">{news[4].text}</a>
                </li>
              </ul>
            </nav>
            <div className="quotes">
              <ul>
                <li>
                  <h5>USD MOEX</h5>
                  <p>63,52</p>
                  <span>+0,09</span>
                </li>
                <li>
                  <h5>EUR MOEX</h5>
                  <p>70,86</p>
                  <span>+0,14</span>
                </li>
                <li>
                  <h5>НЕФТЬ</h5>
                  <p>64,90</p>
                  <span>+1,63%</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="side-item">
            <img src="#" alt="..." />
            <h4>
              <a href="#">Работа над ошибками</a>
            </h4>
            <p>Смотрите на Яндекс и запоминайте</p>
          </div>
        </div>
        <div className="list-search">
          <nav className="list-nav">
            <ul>
              <li>
                <a href="">Видео</a>
              </li>
              <li>
                <a href="">Картинки</a>
              </li>
              <li>
                <a href="">Новости</a>
              </li>
              <li>
                <a href="">Карты</a>
              </li>
              <li>
                <a href="">Маркет</a>
              </li>
              <li>
                <a href="">Переводчик</a>
              </li>
              <li>
                <a href="">Эфир</a>
              </li>
              <li>
                <a href="">ещё</a>
              </li>
            </ul>
          </nav>
          <div className="search">
            <form action="" className="search-form">
              <input type="text" className="search-input"/>
              <button className="search-btn">Найти</button>
            </form>
            <p className="search-comment">Найдется все. Например, фаза луны сегодня</p>
          </div>
        </div>
        <div className="advertising">
          <div className="advertising-link"></div>
        </div>
        <div className="section-cards">
          <div className="weather-card card">
            <h4>
              <a href="#">Погода</a>
            </h4>
            <div className="weather">
              <img src="#" alt="..." />
              <p>+17</p>
              <span>Утром +17, днем +20</span>
              </div>
            </div>
          <div className="maps-card card">
            <h4>
              <a href="#">Карта Германии</a>
            </h4>
            <p>Расписания</p>
          </div>
          <div className="broadcast-card card">
            <h4>
              <a href="#">Эфир</a>
            </h4>
            <ul>
              <li>
                <img src="#" alt="..." />
                <p>Управление как искусство</p>
                <span>Успех</span>
              </li>
              <li>
                <img src="#" alt="..." />
                <p>Ночь. Мир в это время</p>
                <span>earthTV</span>
              </li>
              <li>
                <img src="#" alt="..." />
                <p>Андрей Возн...</p>
                <span>Совершенно секретно</span>
              </li>
            </ul>
          </div>
          <div className="visited-card card">
            <h4>
              <a href="#">Посещаемое</a>
            </h4>
            <ul>
              <li>
                <a href="#">Недвижимость</a>
                <p>-о сталинках</p>
              </li>
              <li>
                <a href="#">Маркет</a>
                <p>-люстры и светильники</p>
              </li>
              <li>
                <a href="#">Авто.ру</a>
                <p>-привод 4х4 до 500 000</p>
              </li>
            </ul>
          </div>
          <div className="tv-program-card card">
            <header>
              <h4>
                <a href="#">Телепрограмма</a>
              </h4>
              <a href="#">Эфир</a>
            </header>
            <ul>
              <li>
                <time>02:00</time>
                <p>ТНТ.Best</p>
                <span>THT International</span>
              </li>
              <li>
                <time>02:15</time>
                <p>Джинглики</p>
                <span>Карусель INT</span>
              </li>
              <li>
                <time>02:25</time>
                <p>Наедине со всеми</p>
                <span>Первый</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
