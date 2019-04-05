

//import './css/2.css'
//import './css/1.scss'

//import '../node_modules/bootstrap/dist/css/bootstrap.css';




import Vue from '../node_modules/vue/dist/vue.js'

//var login={
 //   template:'<h1>hhhhhh</h1>'
//}
import login from './login.vue'
var vm=new Vue({
    el: '#app',
  data: {
      msg:'123'
  },
 
  //components:{
     // login
   // }
   render: c=>c(app)
  

});
import m1,{title,content} from './test.js'
console.log(m1);
console.log(title);
console.log(content);