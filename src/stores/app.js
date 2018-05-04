import { observable, action, decorate } from 'mobx';

class App {
  toaster={
    show:false,
    status:"",
    message:""
  }

  setToaster=()=>{

  }
}

decorate(App, {
    toaster: observable,
    setToaster:action
})


export default App;
