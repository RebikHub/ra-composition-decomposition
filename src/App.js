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
    <div className="App">
      <div className="news-side">
        <div className="news">
          <header className="header-news">
            <ul className="header-news-list">
              <li>Сейчас в СМИ</li>
              <li>в Германии</li>
              <li>Рекомендуем</li>
            </ul>
            <p className="news-date">31 июля, среда 02 32</p>
          </header>
          <nav className="body-news">
            <ul>
              <li>
                <img src="" alt="" />
                <p>{news[0].text}</p>
              </li>
              <li>
                <img src="" alt="" />
                <p>{news[1].text}</p>
              </li>
              <li>
                <img src="" alt="" />
                <p>{news[2].text}</p>
              </li>
              <li>
                <img src="" alt="" />
                <p>{news[3].text}</p>
              </li>
              <li>
                <img src="" alt="" />
                <p>{news[4].text}</p>
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
          <img src="" alt="" />
          <h4>Работа над ошибками</h4>
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
          <a href="#" className="search-link"></a>
          <form action="" className="search-form">
            <input type="text" className="search-input"/>
            <button className="search-btn">Найти</button>
          </form>
          <p className="search-comment">Найдется все. Например, фаза луны сегодня</p>
        </div>
      </div>
      <div className="advertising">
        <a href="" className="advertising-link"></a>
      </div>
      <div className="section-cards">
        <div className="weather-card">
          <h4>Погода</h4>
          <img src="" alt="" />
          <p>+17</p>
          <p>Утром +17, днем +20</p>
        </div>
        <div className="maps-card">
          <h4>Карта Германии</h4>
          <p>Расписания</p>
        </div>
        <div className="broadcast-card">
          <h4>Эфир</h4>
          <ul>
            <li>
              <img src="" alt="" />
              <p>Управление как искусство</p>
              <span>Успех</span>
            </li>
            <li>
              <img src="" alt="" />
              <p>Ночь. Мир в это время</p>
              <span>earthTV</span>
            </li>
            <li>
              <img src="" alt="" />
              <p>Андрей Возн...</p>
              <span>Совершенно секретно</span>
            </li>
          </ul>
        </div>
        <div className="visited-card">
          <h4>Посещаемое</h4>
          <ul>
            <li>
              <a href="">Недвижимость</a>
              <p>-о сталинках</p>
            </li>
            <li>
              <a href="">Маркет</a>
              <p>-люстры и светильники</p>
            </li>
            <li>
              <a href="">Авто.ру</a>
              <p>-привод 4х4 до 500 000</p>
            </li>
          </ul>
        </div>
        <div className="tv-program-card">
          <header>
            <h4>Телепрограмма</h4>
            <a href="">Эфир</a>
          </header>
          <ul>
            <li>
              <span>02:00</span>
              <p>ТНТ.Best</p>
              <span>THT International</span>
            </li>
            <li>
              <span>02:15</span>
              <p>Джинглики</p>
              <span>Карусель INT</span>
            </li>
            <li>
              <span>02:25</span>
              <p>Наедине со всеми</p>
              <span>Первый</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
