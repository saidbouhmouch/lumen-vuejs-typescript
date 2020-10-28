import { Component, Vue } from 'vue-property-decorator'
import ComponentB from '../component-b/component-b.vue'

@Component({
  components: {
    ComponentB
  }
})

export default class componentA extends Vue {
  title : string = "Component A";

  constructor(){
    super();
  }

  //computed
  created(){
    console.log("<<----- created------>>");
    //do something
  }
  

  mounted() {
    //do something
    console.log("<<----- mounted------>>");
  }

  beforeUpdate() {
    // do something
    console.log("<<----- beforeUpdate------>>");
  }

}