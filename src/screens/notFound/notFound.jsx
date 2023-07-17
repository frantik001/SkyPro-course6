import s from "./notFound.module.scss";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className={s.notFoundMain}>
      <h1 className={s.notFoundMain__title}>404</h1>
      <h2 className={s.notFoundMain__subTitle}>
        Страница не найдена <img src="img/smileCrying.png" alt="Crying smile" />
      </h2>
      <p className={s.notFoundMain__text}>
        Возможно, она была удалена или перенесена на другой адрес
      </p>
      <Link to="/">
        <button className={s.notFoundMain__button}>
          Вернуться на главную
        </button>
      </Link>
    </div>
  );
}
