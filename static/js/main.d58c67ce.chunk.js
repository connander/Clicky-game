(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Rand","image":"https://vignette.wikia.nocookie.net/wot/images/b/b5/Rand3.jpg/revision/latest?cb=20091211115827","count":0},{"id":2,"name":"Perrin","image":"https://vignette.wikia.nocookie.net/wot/images/6/68/Perrin.jpg/revision/latest?cb=20091212051847","count":1},{"id":3,"name":"Matrim","image":"https://vignette.wikia.nocookie.net/wot/images/3/32/Mat.jpg/revision/latest?cb=20091212050852","count":2},{"id":4,"name":"Eqwene","image":"https://vignette.wikia.nocookie.net/wot/images/3/36/Egwene.jpg/revision/latest?cb=20091212050035","count":3},{"id":5,"name":"Nynaeve","image":"https://vignette.wikia.nocookie.net/wot/images/6/6b/Nynaeve_2.jpg/revision/latest?cb=20101223181052","count":4},{"id":6,"name":"Moiraine","image":"https://vignette.wikia.nocookie.net/wot/images/f/fa/Moiraine.jpg/revision/latest?cb=20110107133530","count":5},{"id":7,"name":"Lan","image":"https://vignette.wikia.nocookie.net/wot/images/3/37/Lan.jpg/revision/latest?cb=20131102154036","count":6},{"id":8,"name":"Thom","image":"https://vignette.wikia.nocookie.net/wot/images/8/81/Thom.jpg/revision/latest?cb=20101223180433","count":7},{"id":9,"name":"Elayne","image":"https://vignette.wikia.nocookie.net/wot/images/8/88/Elayne_2.jpg/revision/latest?cb=20101223181050","count":8},{"id":10,"name":"Aviendha","image":"https://vignette.wikia.nocookie.net/wot/images/2/25/Aviendha.jpg/revision/latest?cb=20091211213304","count":9},{"id":11,"name":"Min","image":"https://vignette.wikia.nocookie.net/wot/images/4/40/Min.jpg/revision/latest?cb=20091212045758","count":10},{"id":12,"name":"Loial","image":"https://vignette.wikia.nocookie.net/wot/images/3/31/Loial.jpg/revision/latest?cb=20091212052818","count":11}]')},,,,,,,,function(e,t,i){e.exports=i(19)},,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(3),c=i.n(o),s=i(4),r=i(5),m=i(7),g=i(6),u=i(8),l=(i(14),function(e){return a.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{alt:e.name,src:e.image})))});i(15);var h=function(e){return a.a.createElement("div",{className:"wrapper"},e.children)},d=(i(16),function(e){return a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"title"},e.children),a.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),v=i(1),p=(i(17),function(e){function t(){var e,i;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(i=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={friends:v,score:0,highscore:0},i.endGame=function(){return i.state.score>i.state.highscore&&i.setState({highscore:i.state.score}),i.state.friends.forEach((function(e){e.count=0})),i.setState({score:0}),!0},i.clickCount=function(e){i.state.friends.find((function(t,n){if(t.id===e){if(0===v[n].count)return v[n].count=v[n].count+1,i.setState({score:i.state.score+1}),i.state.friends.sort((function(){return Math.random()-.5})),!0;i.endGame()}}))},i}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(h,null,a.a.createElement(d,{score:this.state.score,highscore:this.state.highscore},"Clicky Game"),this.state.friends.map((function(t){return a.a.createElement(l,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})})))}}]),t}(a.a.Component));i(18);c.a.render(a.a.createElement(p,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.d58c67ce.chunk.js.map