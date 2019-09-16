import { Uojo } from '@/types/custom'
{
  const d1: Record<string, number> = { a: 1 }
  // error:ts
  // const d2: number = 'abc'
}

{
  const d1: Uojo = { a: 9 }
}

// 全局声明 window
{
  const funcA = () => {
    if (window.isWeixin) {
      console.log(window.isWeixin)
    }
  }
}
