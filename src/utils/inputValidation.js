import React from 'react';

export default class Validator {
	static validateuserNames(info) {
		const fields = Object.keys(info);
		let userNamesError;
		for (const key of fields) {
			if (info[key].length < 3) {
				return (userNamesError = (
					<ul>
						<li>Star name is required and must be more than 3 characters</li>
					</ul>
				));
			}
		}
		return userNamesError;
	}

	static validateContextText(info) {
		const fields = Object.keys(info);
		let contextTextError;
		for (const key of fields) {
			if (info[key].length < 5) {
				return (contextTextError = (
					<ul>
						<li>
							Star Coordinates are required must be more than 5 characters
						</li>
					</ul>
				));
			}
		}
		return contextTextError;
	}

	static validateStarIdConstellation(info) {
		const fields = Object.keys(info);
		let articleIdConstellationError;
		for (const key of fields) {
			if (info[key].length < 4) {
				return (articleIdConstellationError = (
					<ul>
						<li>
							Star Id Cconstellation are required and must be more than 4
							characters
						</li>
					</ul>
				));
			}
		}
		return articleIdConstellationError;
	}
}
