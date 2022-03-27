/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { must } from "./Must";

export = () => {
	it("should return the same value if it was not nil", () => {
		const values = ["string", "", 1, 0, 1.0, 0.0, true, false, {}];

		for (const value of values) {
			expect(must(value)).to.equal(value);
		}
	});

	it("should throw if the given value was nil", () => {
		expect(() => must(undefined)).to.throw();
	});
};
