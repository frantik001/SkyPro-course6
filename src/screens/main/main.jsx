import s from "./main.module.scss";
import { Link } from "react-router-dom";

export function Main() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className={s.main}>
      <div className={s.main__top}>
        <Link to="/">
          <img className={s.main__top_logo} src="/img/logo1.svg" alt="logo" />
        </Link>
        <Link to="login">
          <button className={s.main__top_button}>Войти</button>
        </Link>
      </div>
      <div className={s.main__title}>
        <div>
          <p className={s.main__title_par}>
            Онлайн-тренировки для занятий дома
          </p>
          <h1 className={s.main__title_text}>
            Начните заниматься спортом и улучшите качество жизни
          </h1>
        </div>
        <img
          className={s.main__title_sticker}
          src="/img/sticker1.svg"
          alt="sticker"
        />
      </div>
      <div className={s.main__center}>
        <Link to="yoga">
          <img
            className={s.main__center_card}
            src="/img/card1.svg"
            alt="card1"
          />
        </Link>
        <img className={s.main__center_card} src="/img/card2.svg" alt="card2" />
        <img className={s.main__center_card} src="/img/card3.svg" alt="card3" />
        <img className={s.main__center_card} src="/img/card4.svg" alt="card4" />
        <img className={s.main__center_card} src="/img/card5.svg" alt="card5" />
      </div>
      <footer className={s.main__footer}>
        <button className={s.main__footer_button} onClick={scrollToTop}>
          Наверх ↑
        </button>
      </footer>
    </main>
  );
}
