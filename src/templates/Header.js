import logo from '../assets/img/rm-logo.png'

const Header = () => {
  const view = `
  <div class="Header-main">
    <div class="Header-logo">
      <h1>
        <a href="index.html">
          <img src="${logo}" alt="logo">
        </a>
      </h1>
    </div>
    <div class="Header-nav">
      <div class="change">
        <span class="toogle-text" id="texto-toogle"></span>
        <label class="theme-switch" for="checkbox">
          <input type="checkbox" id="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  </div>
  `;
  return view;
};

export default Header;
