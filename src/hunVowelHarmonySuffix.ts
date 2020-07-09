import { hunAlterEnd } from './hunAlterEnd'
import { hunVowelHarmony, VowelHarmony } from './hunVowelHarmony'
import { lastWord } from './lastWord'

export function hunVowelHarmonySuffix(low: string, high: string) {
	return (words: string): string => {
		const word = lastWord(words)
		if (!word) {
			return words
		}
		const harmony = hunVowelHarmony(word)
		const pitchedWords = hunAlterEnd(words)
		return harmony === VowelHarmony.High
			? pitchedWords + high
			: pitchedWords + low
	}
}
