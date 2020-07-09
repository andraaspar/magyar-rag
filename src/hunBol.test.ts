import { hunBol } from './hunBol'

test('[qd7bkp]', () => {
	expect(hunBol('András')).toBe('Andrásból')
})
test('[qd7bkr]', () => {
	expect(hunBol('Béla')).toBe('Bélából')
})
test('[qd7bkt]', () => {
	expect(hunBol('Cecil')).toBe('Cecilből')
})
test('[qd7bkv]', () => {
	expect(hunBol('Emese')).toBe('Emeséből')
})
test('[qd7h60]', () => {
	expect(hunBol('kalap')).toBe('kalapból')
})
test('[qd7h6c]', () => {
	expect(hunBol('ernyő')).toBe('ernyőből')
})
