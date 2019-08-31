{
  const a: [string, string[]] = [1, ['b']]

  const b = a.map(e => {
    return e.length
  })
}

// 解构
{
  const [a, ...b] = [1, 2, 3]
  // b => [2,3]
}

{
  interface A {
    [index: number]: string
  }
  const a: A = ['1', '2']
}

{
  // 元祖
  let a: [string, number] = ['0', 1]
  // a[2] = '2' // error,元组无效？
  // 新进的元素必须为 string | number
  // a.push('3') // ok
  // a.push(true) // error
}

{
  let a = new Map()
  a.set('a2', 2)
  a.set('a1', 1)
  a.forEach((value, key) => {
    console.log(key + ' ' + value)
  })

  let b = new Map<string, string>()
  b.set('a1', '1')
  b.forEach((value, key) => {
    console.log(key + ' ' + value)
  })

  let c = new Map<number, string>()
  c.set(1, 'a1')
  c.set(2, 'a2')
  for (let items of c.values()) {
    console.log(items)
  }
}
