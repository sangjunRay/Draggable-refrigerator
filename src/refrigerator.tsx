import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { foodState } from './atoms';
import DraggableFood from './Components/DraggbleItem';

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
		setFood((prevFood) => {
			const CopyFood = [...prevFood];
			const copyLeftTime = CopyFood.slice(source.index, source.index + 1)[0].leftTime;
			const copyAmount = CopyFood.slice(source.index, source.index + 1)[0].amount;
			CopyFood.splice(source.index, 1);
			CopyFood.splice(destination?.index, 0, { name: draggableId, amount: copyAmount, leftTime: copyLeftTime });
			return CopyFood;
		});
	};
	return (
		<DragDropContext onDragEnd={DragEnd}>
			<div>
				<Droppable droppableId="one">
					{(provided) => (
						<UlStyle ref={provided.innerRef} {...provided.droppableProps}>
							<p style={{ marginBottom: '1rem' }}>냉장고 1번 칸</p>
							{food.map((foods, index) => {
								return <DraggableFood key={foods.name} foods={foods} index={index} />;
							})}
						</UlStyle>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
}
