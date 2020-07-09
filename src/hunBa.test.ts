import { hunBa } from './hunBa'

test('[qd7kk8]', () => {
	expect(hunBa('András')).toBe('Andrásba')
})
test('[qd7kk9]', () => {
	expect(hunBa('Béla')).toBe('Bélába')
})
test('[qd7kkb]', () => {
	expect(hunBa('Cecil')).toBe('Cecilbe')
})
test('[qd7kkb]', () => {
	expect(hunBa('Emese')).toBe('Emesébe')
})
test('[qd7kkc]', () => {
	expect(hunBa('Hedvig')).toBe('Hedvigbe')
})
test('[qd7kkd]', () => {
	expect(hunBa('Móni')).toBe('Móniba')
})
test('[qd7kkf]', () => {
	expect(hunBa('Kovács Cecil')).toBe('Kovács Cecilbe')
})
test('[qd7kkg]', () => {
	expect(hunBa('Kárpát-medence')).toBe('Kárpát-medencébe')
})
