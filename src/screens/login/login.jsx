import s from "./login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Login() {
  const [showSignupInput, setShowSignupInput] = useState(false);

  const handleSignupClick = (e) => {
    e.preventDefault();
    setShowSignupInput(true);
  };

  return (
    <div className={s.login}>
      <form className={s.login__form}>
        <Link to="/">
          <img className={s.login__form_img} src="img/logo2.svg" alt="" />
        </Link>

        <input
          placeholder="Логин"
          className={s.login__form_input}
          type="text"
        />
        <input
          placeholder="Пароль"
          className={s.login__form_input}
          type="password"
        />
        {showSignupInput ? (
          <input
            placeholder="Повторите пароль"
            className={s.login__form_input}
            type="password"
          />
        ) : (
          <button className={s.login__form_signin}>Войти</button>
        )}
        <button
          className={
            showSignupInput ? s.login__form_signin : s.login__form_signup
          }
          onClick={handleSignupClick}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
