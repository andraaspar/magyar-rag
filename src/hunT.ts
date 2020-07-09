import { hunAlterEnd } from './hunAlterEnd'
import { hunVowelHarmony, VowelHarmony } from './hunVowelHarmony'
import { lastWord } from './lastWord'

export function hunT(words: string): string {
	const word = lastWord(words)
	if (/[aáeéiíoóöőuúüűj](?:[bcdfghmpqtvwx]|cs|gy|ty|zs|rs|rcs)$/i.test(word)) {
		const harmony = hunVowelHarmony(word)
		return harmony === VowelHarmony.High ? words + 'et' : words + 'ot'
	} else {
		return hunAlterEnd(words) + 't'
	}
}
