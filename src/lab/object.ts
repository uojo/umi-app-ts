const o = {
  a: 1,
  b: '2',
  c: [1, 2],
  d: { a: 1, b: 2 },
}

{
  // 解构
  let { a, e }: { a: number; e?: string } = o
}

{
  let { a, ...b } = o
  // b => {b,c,d}
  // 注意：展开对象示例时，会丢失其方法
}

{
  // 别名
  let { a: alias1 } = o
}

{
  // 函数声明
  // function funcA({ a: number, b: number }): number {
  //   return a + b
  // }
  // => error

  function funcA({ a, b }: { a: number; b: number }): number {
    return a + b
  }

  type A = { a: number; b: number }
  function funcB({ a, b }: A): number {
    return a + b
  }
}
