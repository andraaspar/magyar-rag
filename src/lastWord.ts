export function lastWord(s: string): string {
	return (
		s
			.trim()
			.split(/[-\s]+/)
			.pop() ?? ''
	)
}
