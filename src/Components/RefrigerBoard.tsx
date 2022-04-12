import { IFood } from '../atoms';

interface IBoardProps {
	foods: IFood[];
	boardId: string;
}

function RefrigerBoard({ foods, boardId }: IBoardProps) {
	return <div>Board</div>;
}

export default RefrigerBoard;
