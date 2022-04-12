import { IRefriger } from '../atoms';

interface IBoardProps {
	foods: IRefriger[];
	boardId: string;
}

function RefrigerBoard({ foods, boardId }: IBoardProps) {
	return <div>Board</div>;
}

export default RefrigerBoard;
