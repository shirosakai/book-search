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

const app = new Vue({
    el: '#app',
    template,
    components: {
        bookCard,
        searchBox,
        loadingModal,
    },
    computed: {},
    methods: {},
    data: {
        bookDatas: {},
    },
});
