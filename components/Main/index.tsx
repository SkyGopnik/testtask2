import { classNames } from "functions";

import style from "./index.module.scss";

export default function() {
  return (
    <>
      <div className={style.header}>
        <div className="container">
          <div className={style.header__inner}>
            <div className={style.info}>
              <img className={style.logo} src="/main/logo.svg" alt="Логотип" />
              <div className={style.box}>
                <img src="/main/box.svg" alt="Бокс" />
              </div>
              <button className={style.extended__btn}>Расширенный поиск</button>
              <div className={style.search}>
                <label className={style.search__inner}>
                  <input className={style.search__input} placeholder="Быстрый поиск" />
                </label>
              </div>
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
              {["Тихие вины", "Игристые вины", "Крепленые вины", "Крепкий алкоголь", "Минеральная вода", "Сигареты", "Слабоалкогольные", "Безалкогольные"].map((name, index) => (
                <a className={classNames([style.item, index === 0 ? style.item__active : ''])} href={name}>{name}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className="container">
          <div className={style.content__inner}>
            <div className={style.titleWithPercent}>
              <div className={style.title}>Промо акции и скидки</div>
              <img src="/main/percent.svg" alt="" />
            </div>
            <div className={style.breadCrumb}>
              <img className={style.item} src="/main/arrow-back.svg" alt="" />
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
                  <div className={style.title}>три бутылки по цене двух</div>
                  <div className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id fusce pharetra, tellus purus. Ultricies bibendum vitae, elit, mauris, magna odio. Sed iaculis at amet et posuere in egestas lacus. Leo lectus massa, tristique hac at venenatis tempus morbi. Dui augue vivamus orci vel, at nisi elementum. Massa vitae cursus felis, urna convallis. Morbi at auctor pellentesque netus. Sit phasellus at mus id ac convallis pellentesque facilisis. Pharetra magna proin mattis augue sapien. Eget phasellus pharetra aliquet et commodo rhoncus aliquam. Sed imperdiet faucibus proin quis lacus leo ornare posuere. Nec amet, cras enim sit ac diam odio semper malesuada. Est purus et egestas pellentesque sagittis. In accumsan faucibus dignissim at turpis mi. Et ultrices sociis maecenas pretium tincidunt posuere gravida mauris amet. Aliquam magna purus vel ac arcu id. Nulla pharetra magnis risus.</div>
                  <img className={style.percent} src="/main/percent-black.svg" alt="" />
                </div>
              ))}
              <div className={style.footer}>
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
        </div>
      </div>
      {/*<div className="container">*/}
      {/*  <div className={style.wrapper}>*/}
      {/*    <div className={style.header}>Header</div>*/}
      {/*    <div className={style.sidebar}>Sidebar</div>*/}
      {/*    <div className={style.content}>Content</div>*/}
      {/*    <div className={style.footer}>Footer</div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
}
