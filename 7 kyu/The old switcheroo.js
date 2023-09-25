/**
Write a function

vowel2index(str)

that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''

 */

const vowel2index = str =>
	str.split('').reduce((accum, currItem, currIndex) => {
		return currItem.match(/[aeiou]/i) ? accum + (currIndex + 1) : accum + currItem;
	},'');


console.log(vowel2index('this is my string'));
console.log(vowel2index('Codewars is the best site in the world'));
console.log(vowel2index(''));
console.log(vowel2index("90's cornhole Austin, pickled butcher yr messenger bag gastropub next level leggings listicle meditation try-hard Vice. Taxidermy gastropub gentrify, meh fap organic ennui fingerstache pickled vegan. Seitan sustainable PBR&B cornhole VHS. Jean shorts actually bitters ugh blog Intelligentsia. Artisan Kickstarter DIY, fixie cliche salvia lo-fi four loko. PBR&B Odd Future ugh fingerstache cray Wes Anderson chia typewriter iPhone bespoke four loko, Intelligentsia photo booth direct trade. Aesthetic Tumblr Portland XOXO squid, synth viral listicle skateboard four dollar toast cornhole Blue Bottle semiotics."));