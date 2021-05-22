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
                <input className={style.search__input} placeholder="Быстрый поиск" />
              </div>
              <button className={style.login__btn}>
                <img src="/main/person.svg" alt="Логин" />
              </button>
              <div className={style.cart}>
                <span className={style.count}>12</span>
              </div>
            </div>
            <div className={style.menu}>1</div>
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
