type WatchParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameter: WatchParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameter.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}
console.log(watchedParameter);
