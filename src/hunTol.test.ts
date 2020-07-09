import { hunTol } from './hunTol'

test('[qd7ahm]', () => {
	expect(hunTol('András')).toBe('Andrástól')
})
test('[qd7air]', () => {
	expect(hunTol('Béla')).toBe('Bélától')
})
test('[qd7aj3]', () => {
	expect(hunTol('Cecil')).toBe('Ceciltől')
})
test('[qd7b5m]', () => {
	expect(hunTol('Emese')).toBe('Emesétől')
})
