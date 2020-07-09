import { hunE } from './hunE'

test('[qd7ay9]', () => {
	expect(hunE('András')).toBe('Andrásé')
})
test('[qd7az8]', () => {
	expect(hunE('Béla')).toBe('Béláé')
})
test('[qd7azk]', () => {
	expect(hunE('Cecil')).toBe('Cecilé')
})
test('[qd7b0h]', () => {
	expect(hunE('Emese')).toBe('Emeséé')
})
