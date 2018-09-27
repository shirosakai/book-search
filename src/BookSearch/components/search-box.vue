<template>
    <div class="search_box">
        <input class="input search_text" type="text" placeholder="Search Text">
        <a class="button is-dark search_button">Search</a>
    </div>
</template>

<script>
import Spinner from '../../modules/Spinner/Spinner';
import GetBookData from '../GetBookData';
export default {
    name: 'search-box',
    data() {},
    mounted() {
        const thisElement = this.$el;
        const searchBtn = thisElement.getElementsByClassName('search_button')[0];
        searchBtn.addEventListener(
            'click',
            () => {
                // todo スピナーが表示されない !!!!!!!!!!!!
                const spinner = new Spinner();
                spinner.show();
                try {
                    const inputText = thisElement.getElementsByClassName('search_text')[0].value;
                    const that = this;
                    GetBookData.getAllFromGoogleBook(inputText, 30).then(bookDatas => {
                        that.$parent.bookDatas = bookDatas;
                    });
                } catch (e) {
                    alert(e);
                } finally {
                    spinner.hide();
                }
            },
            false
        );
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
