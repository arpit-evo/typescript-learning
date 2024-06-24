type ComponentOption = {
  selector: string;
};

function Component1(options: ComponentOption) {
  return (constructor: Function) => {
    console.log("decorator is executed");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertIntoDOM = () => {
      console.log("inserting the component in the DOM.");
    };
  };
}

function Pipe(constructor: Function) {
  console.log("Pipe decorators executed");
  constructor.prototype.pipe = true;
}

@Pipe
@Component1({ selector: "#my-profile" })
class ProfileComponent1 {}
