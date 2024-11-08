import headerLogin from '../layout/header-login';
import {
  IcEmail,
  IcEye,
  IcSaly,
  IcKeySquare,
} from '../../resources/assets/icons/index.js';

const loginPage = () => {
  return `
   ${headerLogin()}
   <section class="section-main-login" id="rootLogin">
    <div class="section-main-login__left">
      <div class="left-box">
        <div class="left-box--bgr"></div>
        <div class="left-box--image">
          <img src="${IcSaly}" alt="icon human">
        </div>
      </div>
    </div>
    <div class="section-main-login__right">
      <div class="right-box">
        <div class="right-box--head">
          <p>Login</p>
        </div>
        <div class="right-box--body">
          <div class="input-login">
            <img src="${IcEmail}" alt="icon email">
            <input class="input-email" type="email" placeholder="Email" required>
          </div>
          <div class="input-login">
            <img class="icon-key" src="${IcKeySquare}" alt="icon key">
            <input class="input-password" type="password" placeholder="Password" required>
            <img select="false" class="icon-eye" src="${IcEye}" alt="icon eye">
          </div>
          <button class="btn-login" type="button">Login</button>
          <div id="errorMessages" style="color: red;"></div>
        </div>   
        <div class="right-box--footer">
          <p class="register">If you don't have an account yet, please <span>register</span>.</p>
        </div>   
      </div>
    </div>
   </section>
   <section class="section-main-register"></section>
  `;
};

export default loginPage;
