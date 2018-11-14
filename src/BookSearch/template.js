/**

 created by shiro on 2018/09/15
 */

const template = `
<div id="app">
    <header>
        <h1>Book Search</h1>
    </header>
    <div id="main_container">
        <div id="search_box_container">
        <!--{{searchWord}}-->
            <search-box @set-book-datas="setBookDatas"></search-box>
        </div>
        <div id="book_card_container">
            <template v-for="book in bookDatas">
                <!--<p>{{book.volumeInfo}}</p>-->
                <book-card
                    :book-data = book
                    :volume-info = book.volumeInfo
                ></book-card>
            </template>
        </div>
    </div>
</div>`;

export default template;
