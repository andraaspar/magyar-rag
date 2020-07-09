export function hunAlterEnd(s: string) {
	return s.replace(/[aeAE]$/, (match) => {
		switch (match) {
			case 'a':
				return 'á'
			case 'e':
				return 'é'
			case 'A':
				return 'Á'
			case 'E':
				return 'É'
		}
		return match
	})
}
