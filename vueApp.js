var all =
  [
    "title" : "Better whatever",
    "link": "https://www.lung.org",
    "city": "Chicago",
    "state" "Illinois"
  ]


var ajaxCall = function(){
  let currentState = Cookies.get("state");
  $.ajax({
    type: "GET",
    url: '//www.lung.org/dev/reading-position-indicator/bbc-feed.xml?related_state=' + currentState,
    dataType: "xml",
    success: function(data){
      console.log(data);
      if (data.getElementsByTagName("bbc_item").length <1) {
        console.warn("No Better Breathers Clubs at this time in this state.")
      }
      else{
        // city
        // state
        // link
        // title


        let htmlCollectionAllBbc_Item = data.getElementsByTagName("bbc_item");
        htmlCollectionAllBbc_Item = [].slice.call(htmlCollectionAllBbc_Item);
        // console.log(htmlCollectionAllBbc_Item);
        // htmlCollectionAllBbc_Item is now an array, not an htmlcollection
        let arrayOfCitiesAsStrings = htmlCollectionAllBbc_Item.map(cities => cities.getElementsByTagName("city")[0].innerHTML);
        let arrayOfLinksAsStrings = htmlCollectionAllBbc_Item.map(links => links.getElementsByTagName("link")[0].innerHTML);
        let arrayOfStatesAsStrings = htmlCollectionAllBbc_Item.map(states => states.getElementsByTagName("state")[0].innerHTML);
        let arrayOfTitlesAsStrings = htmlCollectionAllBbc_Item.map(titles => titles.getElementsByTagName("title")[0].innerHTML);

        let titlesClean = [];
        for (var i = 0; i < arrayOfTitlesAsStrings.length; i++) {
          var redoneTitle = arrayOfTitlesAsStrings[i].replace("<![CDATA[","").replace("]]>","");
          titlesClean.push(redoneTitle);
        }
        let citiesClean = [];
        for (var i = 0; i < arrayOfCitiesAsStrings.length; i++) {
          var redoneCity = arrayOfCitiesAsStrings[i].replace("<![CDATA[","").replace("]]>","");
          citiesClean.push(redoneCity);
        }
        let statesClean = [];
        for (var i = 0; i < arrayOfStatesAsStrings.length; i++) {
          var redoneState = arrayOfStatesAsStrings[i].replace("<![CDATA[","").replace("]]>","");
          statesClean.push(redoneState);
        }
        let linksClean = [];
        for (var i = 0; i < arrayOfLinksAsStrings.length; i++) {
          var redoneLinks = arrayOfLinksAsStrings[i].replace("<![CDATA[","").replace("]]>","");
          linksClean.push(redoneLinks);
        }
        this.setState({titles: titlesClean, links: linksClean, cities: citiesClean, usStates: statesClean});
      }
    },
    error: function(err){
      console.warn(err);
    }
  })
}


var app = new Vue({
  el: "#app",
  data: {
    message: "mensaje"
  },
  methods: {
    changeEmoji: () => {
      console.log(example);
    }
  }
})
