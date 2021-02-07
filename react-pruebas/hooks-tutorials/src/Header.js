import React from "react";
import "./Header.css";
import logo from "./images/logo-dark.png";

export default function Header() {
  return (
    <>
      <div className="header-menu__container">
        <img src={logo} className="header-menu__logo"></img>
        <ul className="header-menu__links">
          <li className="header-menu__add">
            <a href="#">Añadir Sociedad</a>
          </li>
          <li className="header-menu__notifications"></li>
          {/* DROPDOWN NOTIFICATIONS MENU */}
          <div className="notifications-dropdown__container">
            <div className="notifications-dropdown__head">
              <span>Notificaciones</span>
              <span>
                <a>Marcar como leídas</a>
              </span>
            </div>
            <ul className="notifications-dropdown__list">
              <li className="notifications-dropdown__item">
                <span className="notifications-dropdown__status"></span>
                <div className="notifications-dropdown__notification">
                  <p className="notifications-dropdown__text">
                    You have requested to Widthdrawl
                  </p>
                  <p className="notifications-dropdown__time">2 hrs ago</p>
                </div>
              </li>
              <li className="notifications-dropdown__item">
                <span className="notifications-dropdown__status"></span>
                <div className="notifications-dropdown__notification">
                  <p className="notifications-dropdown__text">
                    You have requested to Widthdrawl
                  </p>
                  <p className="notifications-dropdown__time">2 hrs ago</p>
                </div>
              </li>
              <li className="notifications-dropdown__item">
                <span className="notifications-dropdown__status"></span>
                <div className="notifications-dropdown__notification">
                  <p className="notifications-dropdown__text">
                    You have requested to Widthdrawl
                  </p>
                  <p className="notifications-dropdown__time">2 hrs ago</p>
                </div>
              </li>
              <li className="notifications-dropdown__item">
                <span className="notifications-dropdown__status"></span>
                <div className="notifications-dropdown__notification">
                  <p className="notifications-dropdown__text">
                    You have requested to Widthdrawl
                  </p>
                  <p className="notifications-dropdown__time">2 hrs ago</p>
                </div>
              </li>
              <li className="notifications-dropdown__item">
                <span className="notifications-dropdown__status"></span>
                <div className="notifications-dropdown__notification">
                  <p className="notifications-dropdown__text">
                    You have requested to Widthdrawl
                  </p>
                  <p className="notifications-dropdown__time">2 hrs ago</p>
                </div>
              </li>
              <li className="notifications-dropdown__sticky">
                <p>Ver todas</p>
              </li>
            </ul>
          </div>

          <li className="header-menu__user"></li>
          <li className="header-menu__menu"></li>

          {/* DROPDOWN USER MENU */}

          <div className="user-dropdown__container">
            <ul className="user-dropdown__list">
              <li className="user-dropdown__item">Mi perfil</li>
              <li className="user-dropdown__item">Configuración cuenta</li>
              <li className="user-dropdown__item">Mi suscripción</li>
              <li className="user-dropdown__item">Usuarios de la cuenta</li>
              <li className="user-dropdown__item">Modo nocturno</li>
              <li className="user-dropdown__item">Salir</li>
            </ul>
          </div>
        </ul>
      </div>
    </>
  );
}
