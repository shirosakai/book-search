<template>
    <div class="search_box">
        <input class="input search_text" type="text" placeholder="Search Text" v-model="inputText" @keyup.enter="showBookList">
        <a class="button is-dark search_button" @click="showBookList">Search</a>
    </div>
</template>

<script>
import Spinner from '../../modules/Spinner/Spinner';
import GetBookData from '../GetBookData';
export default {
    name: 'search-box',
    methods: {
        showBookList() {
            //todo スピナーが表示されない
            const spinner = new Spinner();
            spinner.show();
            try {
                // const thisElement = this.$el;
                // const inputText = thisElement.getElementsByClassName('search_text')[0].value;
                const that = this;
                GetBookData.getAllFromGoogleBook(this.inputText, 30).then(bookDatas => {
                    // console.log(bookDatas);
                    that.$parent.bookDatas = bookDatas;
                });
            } catch (e) {
                alert(e);
            } finally {
                spinner.hide();
            }
        },
    },
    data() {
        return {
            inputText: ''
        }
    },
    mounted() {
    },
};
</script>

<style scoped>
.search_box {
}

.search_text {
    width: 20em;
}

.search_button {
    margin-left: 0.5em;
}
</style>
