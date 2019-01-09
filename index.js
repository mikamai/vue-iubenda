export default class VueIubenda {
  static install(_Vue, options) {
    /* eslint-disable-next-line */
    window._iub = _iub || {};
    /* eslint-disable-next-line */
    _iub.csConfiguration = options;
    const iubenda = document.createElement('script');
    iubenda.setAttribute('src', '//cdn.iubenda.com/cookie_solution/safemode/iubenda_cs.js');
    document.head.appendChild(iubenda);
  }
}
