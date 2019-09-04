{
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
