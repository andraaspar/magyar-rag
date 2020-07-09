import { hunNak } from './hunNak'

test('[qd7acc]', () => {
	expect(hunNak('András')).toBe('Andrásnak')
})
test('[qd7adc]', () => {
	expect(hunNak('Béla')).toBe('Bélának')
})
test('[qd7ady]', () => {
	expect(hunNak('Cecil')).toBe('Cecilnek')
})
test('[qd7b1i]', () => {
	expect(hunNak('Emese')).toBe('Emesének')
})
