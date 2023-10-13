import { expect, it } from 'vitest'
import { getTarget } from '../src/utils'

const pages = [
  {
    path: 'pages/index/index',
  },
  {
    path: 'pages/index/test',
    layout: 'test',
  },
]
it('getTarget:default', () => {
  const page = getTarget('pages/index/index.vue', pages)
  expect(page).toMatchObject({
    ...pages[0],
    layout: 'default',
  })
})

it('getTarget:false', () => {
  const page = getTarget('middleware/auth.ts', pages)
  expect(page).toEqual(false)
})
it('getTarget:test', () => {
  const page = getTarget('pages/index/test.vue', pages)
  expect(page).toEqual(pages[1])
})
