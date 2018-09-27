/**

 created by shiro on 2018/09/15
 */

import domify from 'domify';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all';

import './spinner.css';

export default class Spinner {
    /**
     * モーダルダイアログを作成して、document.bodyの最後に挿入する。
     * デフォルトでは非表示なので、show() メソッドを実行することによって表示させることができる。
     *
     * @param message {string} モーダルダイアログに表示するメッセージ。
     * @param icon {string} モーダルダイアログに表示したい Font Awesome のアイコン名。
     * @param color {string} アイコンの色を指定します。CSS のカラープロパティを使用します。例: '#888'、'lightgreen' など
     * @param isRotate {boolean} false にすると、デフォルトで回転するアイコンを止めることができる。
     *
     * Font Awesome のアイコン名は、次のページの Free のものから探す。
     *
     * Icons | Font Awesome
     * https://fontawesome.com/icons?d=gallery&m=free
     *
     * たとえば、★のアイコンなら、"fa-star" を指定する。 grip-horizontal fa-spinner
     */
    constructor(message = 'loading …', icon = 'fa-spinner', color = '', isRotate = true) {
        /**
         * モーダルダイアログを表示するかどうかを示す。
         * @type {boolean}
         */
        this.isActive = false;

        const html = `
  <div id="modal-dialog" class="modal ${this.isActive ? 'is-active' : ''}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box has-text-centered">
        <p><i class="fa fa-4x ${icon} ${isRotate ? 'fa-pulse' : ''}" style="${color ? `color: ${color}` : ''}"></i></p>
        <p>${message}</p>
      </div>
    </div>
  </div>`;

        this.dom = domify(html, document);
        document.body.appendChild(this.dom);
    }

    /**
     * モーダルダイアログを表示する
     */
    show() {
        this.dom.classList.add('is-active');
    }
    hide() {
        this.dom.classList.remove('is-active');
    }
}