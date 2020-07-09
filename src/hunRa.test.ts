import { hunRa } from './hunRa'

test('[qd77qd]', () => {
	expect(hunRa('András')).toBe('Andrásra')
})
test('[qd77sb]', () => {
	expect(hunRa('Béla')).toBe('Bélára')
})
test('[qd77su]', () => {
	expect(hunRa('Cecil')).toBe('Cecilre')
})
test('[qd7b29]', () => {
	expect(hunRa('Emese')).toBe('Emesére')
})
test('[qd78ft]', () => {
	expect(hunRa('Hedvig')).toBe('Hedvigre')
})
test('[qd7885]', () => {
	expect(hunRa('Móni')).toBe('Mónira')
})
test('[qd78gs]', () => {
	expect(hunRa('Kovács Cecil')).toBe('Kovács Cecilre')
})
test('[qd7ke5]', () => {
	expect(hunRa('Kárpát-medence')).toBe('Kárpát-medencére')
})
