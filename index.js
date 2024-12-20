// Your task is to make a function that can take any non-negative integer
// as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//on récupère une suite de nombre qui sont collés les uns aux autres

// je veux les convertir en tableau et pouvoir parcourir ce tableau afin de les ordonner
//pour pouvoir les convertir en tableau je dois avant passer par une chaine de caractère

function descendingOrder(n) {
	// console.log(typeof n);
	const nToString = String(n);
	// console.log(typeof nToString);
	const nToArray = nToString.split("");
	// console.log(nToArray);
	const nToArraySortedDescending = nToArray.sort((a, b) => b - a);
	// console.log(nToArraySortedDescending);

	// Je veux rassembler tous mes caractères
	const nSorted = nToArraySortedDescending.join("");
	console.log(typeof nSorted);

	// retourner un entier - je dois le convertir en nombre

	const result = Number(nSorted);
	console.log(typeof result);
	// return result

	// Si je veux faire sur une ligne
	return Number(
		String(n)
			.split("")
			.sort((a, b) => b - a)
			.join(""),
	);
}
//-------------------------

console.log(descendingOrder(125489));
