import { atom } from 'recoil';

export interface IRefriger {
	[key: string]: IFood[];
}

export interface IFood {
	name: string;
	amount: string;
	leftTime: string;
}

export const foodState = atom<IRefriger>({
	key: 'food',
	default: {
		냉장실1: [
			{ name: '달걀🥚', amount: '3알', leftTime: '2022년 3월 1일' },
			{ name: '우유🥛', amount: '2팩', leftTime: '2022년 3월 27일' },
		],
		냉장실2: [
			{ name: '참치🍣', amount: '100g', leftTime: '2022년 3월 16일' },
			{ name: '시금치🌿', amount: '300g', leftTime: '2022년 3월 17일' },
			{ name: '생선🐟', amount: '1팩', leftTime: '2022년 3월 13일' },
		],
		냉동실1: [{ name: '초밥🍣', amount: '100g', leftTime: '2022년 3월 16일' }],
		냉동실2: [
			{ name: '쌀🍚', amount: '500g', leftTime: '2022년 3월 16일' },
			{ name: '동그랑땡🥟', amount: '300g', leftTime: '2022년 3월 17일' },
			{ name: '깻잎🌿', amount: '300g', leftTime: '2022년 3월 17일' },
		],
	},
});
