import { Uojo } from '@/types/uojo'
{
  const d1: Record<string, number> = { a: 1 }
  // error:ts
  // const d2: number = 'abc'
}

{
  const d1: Uojo = { a: 9 }
}
