// parameter of function varies for diff decorators based on it use
function Component(constructor: Function) {
  console.log("decorator is executed");
  // constructor.prototype.uniqueId = Date.now()
  constructor.prototype.insertIntoDOM = () => {
    console.log("inserting the component in the DOM.");
  }  
}


@Component
class ProfileComponent{}