import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { foodState } from './atoms';
import RefrigerBoard from './Components/refrigerBoard';

const UlStyle = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	background-color: rgb(240, 240, 240);
	border-radius: 5px;
`;

export function Refrigerator() {
	const [food, setFood] = useRecoilState(foodState);
	const DragEnd = ({ draggableId, source, destination }: DropResult) => {
		if (destination?.droppableId === source.droppableId) {
			setFood((boards) => {
				const boardCopy = [...boards[source.droppableId]];
				const copyLeftTime = boardCopy.slice(source.index, source.index + 1)[0].leftTime;
				const copyAmount = boardCopy.slice(source.index, source.index + 1)[0].amount;
				boardCopy.splice(source.index, 1);
				boardCopy.splice(destination?.index, 0, { name: draggableId, amount: copyAmount, leftTime: copyLeftTime });
				return {
					...boards,
					[source.droppableId]: boardCopy,
				};
			});
		}
	};
	return (
		<DragDropContext onDragEnd={DragEnd}>
			<div>
				<UlStyle>
					{Object.keys(food).map((boardId) => (
						<RefrigerBoard key={boardId} boardId={boardId} foods={food[boardId]} />
					))}
				</UlStyle>
			</div>
		</DragDropContext>
	);
}
