import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { foodState } from './atoms';
import { Font } from './common/Font';
import DraggableFood from './Components/DraggbleItem';
import RefrigerBoard from './Components/refrigerBoard';

const UlStyle = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 500px;
	background-color: rgb(220, 220, 220);
	padding: 1rem;
	border-radius: 5px;
`;

export function Refrigerator() {
	const [food, setFood] = useRecoilState(foodState);
	const DragEnd = ({ draggableId, destination, source }: DropResult) => {
		if (!destination) return;
		/* setFood((prevFood) => {
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
							<Font fontSize="1.2rem" fontWeight="600" style={{ marginBottom: '1.5rem', marginRight: 'auto' }}>
								❄️ 냉동실 1번 칸
							</Font>
							{Object.keys(food).map((boardId) => <RefrigerBoard key={boardId} boardId={boardId} foods={food[boardId]} />)}
						</UlStyle>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
}
