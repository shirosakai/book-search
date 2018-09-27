<template>
    <div class="book_card box">
        <div class="title_wrap">
            <h3 class="title">{{volumeInfo.title}}</h3>
        </div>
        <p class="authors">
            <template v-for="author in volumeInfo.authors">
                {{author}}&nbsp;
            </template>
        </p>
        <p class="page_cnt">p{{volumeInfo.pageCount}}</p>
        <!--thumbnail-->
        <template v-if="volumeInfo.imageLinks != null">
            <img class="thumbnail" :src="volumeInfo.imageLinks.thumbnail"/><!--or smallThumbnail-->
        </template>
        <p class="description">{{volumeInfo.description}}</p>
    </div>
</template>

<script>
export default {
    name: 'book-card',
    props: {
        bookData: Array,
        volumeInfo: Object,
    },
    mounted() {},
};
</script>

<style scoped>
.book_card {
    width: 20em;
    height: 30em;
    margin: 0 0 0 1em;
}

.title_wrap {

    border-bottom: 2px solid #232323;
}

.title {
    display: inline;
    font-size: 110%;
    font-weight: bold;
}

.authors {
    /*margin-top:0;*/
    font-size: 90%;
    font-weight: normal;
}

.page_cnt {
    font-size: 80%;
}

.thumbnail {
    width: 100px;
    margin-top: 0.5em;
}

.description {
    display: block;
    height: 10em;
    overflow-y: scroll;
    font-size:75%;
    color:#666;
    padding:0.3em;
    border-top:1px solid #aaa;
    border-bottom:1px solid #aaa;
}
</style>
