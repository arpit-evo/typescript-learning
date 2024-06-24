class ArrayUtils{
  static wrapInArray<T>(value: T){
    return [value]
  }
}

const list = ArrayUtils.wrapInArray("1")