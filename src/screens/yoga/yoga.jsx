import s from "./yoga.module.scss";
import { Link } from "react-router-dom";

export function Yoga() {
  return (
    <div className={s.yoga}>
      <Link to="/">
        <img className={s.yoga__logo} src="/img/logo2.svg" alt="logo" />
      </Link>
      <img className={s.yoga__card} src="/img/yoga1.svg" alt="yogaCard" />
      <div className={s.yoga__box1}>
        <h2 className={s.yoga__box1_title}>Подойдет для вас, если:</h2>
        <div className={s.yoga__box1_list}>
          <div className={s.yoga__box1_list_card}>
            <img
              className={s.yoga__box1_list_card_img}
              src="img/1.svg"
              alt="1"
            />
            <p className={s.yoga__box1_list_card_text}>
              Давно хотели попробовать йогу, но не решались начать.
            </p>
          </div>
          <div className={s.yoga__box1_list_card}>
            <img
              className={s.yoga__box1_list_card_img}
              src="img/2.svg"
              alt="2"
            />
            <p className={s.yoga__box1_list_card_text}>
              Хотите укрепить позвоночник, избавиться от болей в спине и
              суставах.
            </p>
          </div>
          <div className={s.yoga__box1_list_card}>
            <img
              className={s.yoga__box1_list_card_img}
              src="img/3.svg"
              alt="3"
            />
            <p className={s.yoga__box1_list_card_text}>
              Ищете активность, полезную для тела и души.
            </p>
          </div>
        </div>
      </div>
      <div className={s.yoga__box2}>
        <h2 className={s.yoga__box2_title}>Направления:</h2>
        <div className={s.yoga__box2_list}>
          <ul className={s.yoga__box2_list_card}>
            <li>Йога для новичков</li>
            <li>Классическая йога</li>
            <li>Йогатерапия</li>
          </ul>
          <ul className={s.yoga__box2_list_card}>
            <li>Кундалини-йога</li>
            <li>Хатха-йога</li>
            <li>Аштанга-йога</li>
          </ul>
        </div>
      </div>
      <p className={s.yoga__text}>
        Благодаря комплексному воздействию упражнений происходит проработка всех
        групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме
        того, упражнения дарят отличное настроение, заряжают бодростью и
        помогают противостоять стрессам.
      </p>
      <div className={s.yoga__footer}>
        <div className={s.yoga__footer_box}>
          <h3 className={s.yoga__footer_box_text}>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
          </h3>
          <button className={s.yoga__footer_box_button}>
            Записаться на тренировку
          </button>
        </div>
        <img className={s.yoga__footer_img} src="img/phone.svg" alt="phone" />
      </div>
    </div>
  );
}
