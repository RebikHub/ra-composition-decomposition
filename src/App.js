import React from "react";
import NewsSide from "./components/NewsSide";

export default function App() {
  const newsHead = [{
    name: 'Сейчас в СМИ',
    url: '#',
    value: [
      {
        img: '#',
        text: 'Путин упростил получение автомобильных номеров',
        url: ''
      },
      {
        img: '#',
        text: 'В команде Зеленского раскрыли план реформ на Украине',
        url: ''
      },
      {
        img: '#',
        text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
        url: ''
      },
      {
        img: '#',
        text: 'Суд закрыл дело Демпартии США против России',
        url: ''
      },
      {
        img: '#',
        text: 'На Украине призвали создать ракеты для удара по Москве',
        url: ''
      }
    ]
  },
  {
    name: 'в Германии',
    url: '#',
    value: []
  },
  {
    name: 'Рекомендуем',
    url: '#',
    value: []
  }]
  const newsDate = '31 июля, среда 02 32'
  const quotes = [{
    currency: 'USD MOEX',
    value: '63,52',
    difference: '+0,09'
  },
  {
    currency: 'EUR MOEX',
    value: '70,86',
    difference: '+0,14'
  },
  {
    currency: 'НЕФТЬ',
    value: '64,90',
    difference: '+1,63%'
  }
]
const sideItem = {
  img: '#',
  name: 'Работа над ошибками',
  url: '#',
  text: 'Смотрите на Яндекс и запоминайте'
}
  return (
    <>
      <a href="#" className="search-link">Яндекс</a>
      <div className="App">

        <NewsSide
          news={newsHead}
          date={newsDate}
          item={sideItem}
          quotes={quotes}/>

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
