import { atom } from 'recoil';

interface IFood {
	name: string;
	amount: string;
	leftTime: string;
}

interface IFoods extends Array<IFood> {}

export const foodState = atom<IFoods>({
	key: 'food',
	default: [
		{ name: '달걀🥚', amount: '5알', leftTime: '2022/04/21' },
		{ name: '우유🥛', amount: '2팩', leftTime: '2022/05/19' },
		{ name: '참치🍣', amount: '300g', leftTime: '2022/05/29' },
		{ name: '시금치🌿', amount: '100g', leftTime: '2022/08/19' },
	],
});
