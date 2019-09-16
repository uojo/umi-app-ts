{
  // 别名
  type A = string
  type B = () => string
  type C = A | B
  const funcA = (e: C): A => {
    if (typeof e === 'string') {
      return e
    }
    return e()
  }
}

{
  // error:tslint
  const funcA = (e: any): null => {
    return e.length
  }
  // console.log(100)
  funcA(undefined)
}

// 函数表达式
{
  // 声明具体类型
  let funcB: (x: number) => number
  funcB = x => {
    return x
  }

  // 泛型
  let funcA: <T>(a: T) => T
  funcA = function(a) {
    return a
  }
}

// 泛型声明，典型示例
{
  function funcA<T>(arr: T[]): T {
    console.log('泛型函数')
    return arr[0]
  }
}

// 重载，使用接口实现
{
  interface B {
    (a: string): string
    (a: number, b: number): string
  }
  const fn1: B = (a: string | number, b?: number) => {
    return typeof a === 'string' ? a : '' + b
  }
  fn1('a')
}

// 函数式，典型示例
{
  // const func1 = callback => {
  //   return (...args) => {
  //     callback(...args)
  //   }
  // }
  type F1 = (A: any[]) => void
  const func1 = (callback: (B: any[]) => void): F1 => {
    return (...args) => {
      callback(...args)
    }
  }
}

// 函数式，真实案例
{
  interface ReadyCallback<A extends any[]> {
    (...args: A): void
  }

  const createAlreadyCallback = <A extends any[]>(callback: (...args: A) => void): ReadyCallback<A> => {
    // eslint-disable-next-line func-names
    return function(...args) {
      if (callback) {
        callback(...args)
      }
    }
  }
}

// 接口，类型约束
{
  interface A {
    a: number
  }
  const funcA = <T extends A>(b: T): T => b
  funcA({ a: 1 }) // okay
}

// 接口，先定义再实现
{
  interface A {
    (source: string, subString: string): boolean
  }
  let a1: A
  a1 = function(src) {
    return src.search('') > -1
  }
}

// 接口，定义并实现
{
  interface A {
    (x: number, y: number, desc?: string): void
  }

  const a1: A = function(x) {
    return x
  }
}
