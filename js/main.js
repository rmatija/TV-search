var app = new Vue({
    el: "#show-tvshowes",
    data:{
        shows: [],
        search: ""
    },

    created(){
        this.$http.get("http://api.tvmaze.com/shows?q=").then(function(data){
            console.log(data);
            this.shows = data.body;
        })
    },    

    computed: {
        filteredShows: function(){
            return this.shows.filter((show) => {
                return show.name.match(this.search);
            });
        }
    }
    
})

