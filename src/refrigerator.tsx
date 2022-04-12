import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { foodState } from './atoms';
import { Font } from './common/Font';
import RefrigerBoard from './Components/refrigerBoard';

const UlStyle = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	background-color: rgb(240, 240, 240);
	border-radius: 5px;
`;

export function Refrigerator() {
	const [food, setFood] = useRecoilState(foodState);
	const DragEnd = ({ draggableId, destination, source }: DropResult) => {
		/* if (!destination) return;
		setFood((prevFood) => {
			const CopyFood = [...prevFood];
			const copyLeftTime = CopyFood.slice(source.index, source.index + 1)[0].leftTime;
			const copyAmount = CopyFood.slice(source.index, source.index + 1)[0].amount;
			CopyFood.splice(source.index, 1);
			CopyFood.splice(destination?.index, 0, { name: draggableId, amount: copyAmount, leftTime: copyLeftTime });
			return CopyFood;
		}); */
	};
	return (
		<DragDropContext onDragEnd={DragEnd}>
			<div>
				<Droppable droppableId="one">
					{(provided) => (
						<UlStyle ref={provided.innerRef} {...provided.droppableProps}>
							{Object.keys(food).map((boardId) => (
								<RefrigerBoard key={boardId} boardId={boardId} foods={food[boardId]} />
							))}
						</UlStyle>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
}
