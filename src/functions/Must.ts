export function must<T>(value: T | undefined, undefinedMessage?: string): T {
	if (value === undefined) {
		// eslint rule doesn't understand that this isn't a truthiness issue
		// eslint-disable-next-line roblox-ts/lua-truthiness
		throw undefinedMessage ?? `Value was undefined`;
	}

	return value;
}
