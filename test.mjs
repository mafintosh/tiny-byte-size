import test from 'brittle'
import byteSize from './index.js'

test('byteSize', (t) => {
  t.is(byteSize(1234), '1.2kB')
})

test('perSecond', (t) => {
  t.is(byteSize.perSecond(1234), '1.2kB/s')
  t.is(byteSize.perSecond(1234, 500), '2.5kB/s')
})
