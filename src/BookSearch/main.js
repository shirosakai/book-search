/**

 created by shiro on 2018/09/14
 */

import Vue from 'vue';
import template from './template';
import bookCard from './components/book-card';
import searchBox from './components/search-box';
import loadingModal from './components/loading-modal';

import 'bulma/css/bulma.min.css';
import './main.scss';

// todo App.vueコンポーネントを挟んで、そのコンポーネントにすべてのコンポーネントを配置するようにする。main.jsでコンポーネントの配置を行わないように要修正。
const app = new Vue({
    el: '#app',
    template,
    components: {
        bookCard,
        searchBox,
        loadingModal,
    },
    computed: {},
    methods: {
        /**
         * 本情報をセット
         * @param {object[]} bookDatas
         */
        setBookDatas(bookDatas) {
            this.bookDatas = bookDatas;
        }
    },
    data: {
        bookDatas: {},
    },
});
