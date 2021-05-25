import { classNames } from "functions";

import style from "./index.module.scss";

export default function() {
  return (
    <>
      <div className={style.header}>
        <div className={style.container}>
          <div className={style.header__inner}>
            <div className={style.info}>
              <img className={style.logo} src="/main/logo.svg" alt="Логотип" />
              <img className={style.burger} src="/main/burger.svg" alt="Бургер" />
              <div className={style.box}>
                <img src="/main/box.svg" alt="Бокс" />
              </div>
              <button className={style.extended__btn}>Расширенный поиск</button>
              <div className={style.search}>
                <label className={style.search__inner}>
                  <input className={style.search__input} placeholder="Быстрый поиск" />
                </label>
              </div>
              <button className={style.search__btn}>
                <svg width="18" height="24" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.27148" cy="6.51562" r="5.5" stroke="black"/>
                  <path d="M14.2715 12.5156L10.2715 9.51562" stroke="black"/>
                </svg>
              </button>
              <button className={style.searchPlus__btn}>
                <svg width="18" height="24" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.27148" cy="6.51562" r="5.5" stroke="white"/>
                  <path d="M14.2715 12.5156L10.2715 9.51562" stroke="white"/>
                </svg>
                <svg width="13" height="10" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.72803 0L6.72803 12" stroke="white"/>
                  <path d="M12.728 6L0.728027 6" stroke="white"/>
                </svg>
              </button>
              <button className={style.login__btn}>
                <img src="/main/person.svg" alt="Логин" />
              </button>
              <div className={style.cart}>
                <span className={style.count}>12</span>
                <img className={style.bottle} src="/main/bottle.svg" alt="" />
                <span className={style.sum}>398 903р</span>
              </div>
            </div>
            <div className={style.menu}>
              <img className={style.bottles} src="/main/bottles.svg" alt="" />
              {["Тихие вины", "Игристые вины", "Крепленые вины", "Крепкий алкоголь", "Минеральная вода", "Сигареты", "Слабоалкогольные", "Безалкогольные"].map((name, index) => (
                <a className={classNames([style.item, index === 0 ? style.item__active : ''])} href={name}>{name}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.container}>
          <div className={style.content__inner}>
            <div className={style.titleWithPercent}>
              <div className={style.title}>Промо акции и скидки</div>
              <img className={style.percent} src="/main/percent.svg" alt="" />
            </div>
            <div className={style.breadCrumb}>
              <img className={classNames([style.item, style.arrow])} src="/main/arrow-back.svg" alt="" />
              <a className={style.item} href="#">Главная</a>
              <div className={style.item}>/</div>
              <a className={style.item} href="#">Промо-акции</a>
            </div>
            <div className={style.sale}>
              <a className={style.title} href="#">Посмотреть все вина со скидкой</a>
              <button>
                <img src="/main/percent-outline.svg" alt="" />
                <span>Акции</span>
              </button>
            </div>
            <div className={style.list}>
              {[1, 2, 3].map((item) => (
                <div className={style.item}>
                  <img className={style.photo} src="https://media.istockphoto.com/photos/red-wine-picture-id510963734" alt="" />
                  <div className={style.title}>для прекрасных дам на 8 марта</div>
                  <div className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id fusce pharetra, tellus purus. Ultricies bibendum vitae, elit, mauris, magna odio. Sed iaculis at amet et posuere in egestas lacus. Leo lectus massa, tristique hac at venenatis tempus morbi. Dui augue vivamus orci vel, at nisi elementum. Massa vitae cursus felis, urna convallis. Morbi at auctor pellentesque netus. Sit phasellus at mus id ac convallis pellentesque facilisis. Pharetra magna proin mattis augue sapien. Eget phasellus pharetra aliquet et commodo rhoncus aliquam. Sed imperdiet faucibus proin quis lacus leo ornare posuere. Nec amet, cras enim sit ac diam odio semper malesuada. Est purus et egestas pellentesque sagittis. In accumsan faucibus dignissim at turpis mi. Et ultrices sociis maecenas pretium tincidunt posuere gravida mauris amet. Aliquam magna purus vel ac arcu id. Nulla pharetra magnis risus.</div>
                  <img className={style.percent} src="/main/percent-black.svg" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={style.showMore}>
        <div className={style.container}>
          <div className={style.showMore__inner}>
            <button className={style.showMore__btn}>Показать ещё</button>
            <button
              className={style.contentUp__btn}
              onClick={() => window.scrollTo({
                top: 0,
                behavior: "smooth"
              })}
            >
              <span>Наверх</span>
              <img src="/main/arrow-up.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.list}>
          <div className={style.item}>Условия использования</div>
          <div className={style.item}>О компании</div>
          <div className={style.item}>Статьи</div>
          <div className={style.item}>Доставка и оплата</div>
          <div className={style.item}>Карта сайта</div>
          <div className={style.item}>Политика конфиденциальности</div>
        </div>
        <div className={style.copyright}>Подробнее о политике конфиденциальности   —   Все права защищены 2021 С</div>
      </div>
    </>
  );
}
