const tripSearchStore = {
    namespaced: true,
    state:{
        //test Data
        postList: [],
        tripTags : [
            {tagcode : "1",name: "제주도",icon:""},
            {tagcode : "2",name: "바다",icon:""},
            {tagcode : "3",name: "산",icon:""},
            {tagcode : "4",name: "캠핑",icon:""},
            {tagcode : "5",name: "계곡",icon:""},
            {tagcode : "6",name: "물놀이",icon:""},
            {tagcode : "7",name: "맛집탐방",icon:""},
            {tagcode : "8",name: "호캉스",icon:""},
            {tagcode : "9",name: "도서관",icon:""},
            {tagcode : "10",name: "카페",icon:""},

        ],
        searchWord:"",
        
    }, 
    mutations:{
        SET_SEARCHWORD(state,searchWord){
            state.searchWord = searchWord;
            console.log(state.searchWord);
        },
    },
    actions:{
        search({commit} , searchWord){
            commit("SET_SEARCHWORD",searchWord);
        }
        
    },
    // getters:{

    // },
   
}
export default tripSearchStore;