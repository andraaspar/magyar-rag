import { hunAlterEnd } from './hunAlterEnd'
import { hunVowelHarmony, VowelHarmony } from './hunVowelHarmony'
import { lastWord } from './lastWord'

const transforms: { [k: string]: string } = {
	ccsv: 'ccs',
	ddzv: 'ddz',
	ddzsv: 'ddzs',
	ggyv: 'ggy',
	llyv: 'lly',
	nnyv: 'nny',
	sszv: 'ssz',
	ttyv: 'tty',
	zzsv: 'zzs',
	csv: 'ccs',
	dzv: 'ddz',
	dzsv: 'ddzs',
	gyv: 'ggy',
	lyv: 'lly',
	nyv: 'nny',
	szv: 'ssz',
	tyv: 'tty',
	zsv: 'zzs',
	qv: 'qk',
	xv: 'xsz',
	yv: 'yj',
}

export function hunVal(words: string) {
	const word = lastWord(words)
	if (!word) {
		return words
	}
	const wordIsName = /^[A-ZÁÉÍÓÖŐÚÜŰ]/.test(word)
	const harmony = hunVowelHarmony(word)
	const pitchedWords = hunAlterEnd(words)
	const pitchedWordsWithV = (pitchedWords + 'v')
		.replace(
			/(?:ccs|ddz|ddzs|ggy|lly|nny|ssz|tty|zzs|cs|dz|dzs|gy|ly|ny|sz|ty|zs|[bcdfghjklmnpqrstxyz])v$/,
			(match) => {
				return match in transforms ? transforms[match] : match[0] + match[0]
			},
		)
		.replace(/(.)\1\1$/, wordIsName ? '$1$1-$1' : '$1$1')
	return harmony === VowelHarmony.High
		? pitchedWordsWithV + 'el'
		: pitchedWordsWithV + 'al'
}
