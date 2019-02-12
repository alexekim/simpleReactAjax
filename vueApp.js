var all =
  [
    {
      "title" : "Better whatever",
      "link": "https://www.lung.org",
      "city": "Chicago",
      "state": "Illinois"
    }
  ]


var ajaxCall = function(){
  // var currentState = Cookies.get("state");
  $.ajax({
    type: "GET",
    url: 'vue.xml',
    dataType: "xml",
    success: function(data){
      console.log(data);
      var htmlCollectionAllBbc_Item = data.getElementsByTagName("bbc_item");
      htmlCollectionAllBbc_Item = [].slice.call(htmlCollectionAllBbc_Item);
      console.log(htmlCollectionAllBbc_Item);
      console.log("htmlCollectionAllBbc_Item has " + htmlCollectionAllBbc_Item.length + " items");

      var arrayOfCitiesAsStrings = htmlCollectionAllBbc_Item.map(cities => cities.getElementsByTagName("city")[0].innerHTML);
      var arrayOfLinksAsStrings = htmlCollectionAllBbc_Item.map(links => links.getElementsByTagName("link")[0].innerHTML);
      var arrayOfStatesAsStrings = htmlCollectionAllBbc_Item.map(states => states.getElementsByTagName("state")[0].innerHTML);
      var arrayOfTitlesAsStrings = htmlCollectionAllBbc_Item.map(titles => titles.getElementsByTagName("title")[0].innerHTML);

      var titlesClean = [];
      for (var i = 0; i < arrayOfTitlesAsStrings.length; i++) {
        var redoneTitle = arrayOfTitlesAsStrings[i].replace("<![CDATA[","").replace("]]>","");
        titlesClean.push(redoneTitle);
      }
      var citiesClean = [];
      for (var i = 0; i < arrayOfCitiesAsStrings.length; i++) {
        var redoneCity = arrayOfCitiesAsStrings[i].replace("<![CDATA[","").replace("]]>","");
        citiesClean.push(redoneCity);
      }
      var statesClean = [];
      for (var i = 0; i < arrayOfStatesAsStrings.length; i++) {
        var redoneState = arrayOfStatesAsStrings[i].replace("<![CDATA[","").replace("]]>","");
        statesClean.push(redoneState);
      }
      var linksClean = [];
      for (var i = 0; i < arrayOfLinksAsStrings.length; i++) {
        var redoneLinks = arrayOfLinksAsStrings[i].replace("<![CDATA[","").replace("]]>","");
        linksClean.push(redoneLinks);
      }

      if(titlesClean.length == citiesClean.length && citiesClean.length == statesClean.length && statesClean.length == linksClean.length){
        var length = titlesClean.length;
      }
      // var master = []
      // for (var i = 0; i < length; i++) {
      //   master.push(titlesClean[i]);
      //   master.push(citiesClean[i]);
      //   master.push(statesClean[i]);
      //   master.push(linksClean[i]);
      // }
      // console.log("master");
      // console.log(master);



    },
    error: function(err){
      console.warn(err);
    }
  })
}
ajaxCall();


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
