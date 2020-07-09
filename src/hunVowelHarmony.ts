export enum VowelHarmony {
	Low,
	Mixed,
	High,
}

const lowRe = /[aáoóuú]/gi
const highRe = /[eéiíöőüű]/gi

export function hunVowelHarmony(s: string): VowelHarmony {
	let hasHigh = false
	highRe.lastIndex = 0
	if (highRe.exec(s)) {
		hasHigh = true
	}
	let hasLow = false
	lowRe.lastIndex = 0
	if (lowRe.exec(s)) {
		hasLow = true
	}
	return hasLow && !hasHigh
		? VowelHarmony.Low
		: hasHigh && !hasLow
		? VowelHarmony.High
		: VowelHarmony.Mixed
}
