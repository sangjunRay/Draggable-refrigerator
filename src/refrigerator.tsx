import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { foodState } from './atoms';

const Item = styled.li`
	width: 450px;
	padding: 1rem;
	list-style: none;
	background-color: white;
	margin-bottom: 0.5rem;
	font-size: 1rem;
	border-radius: 5px;
	:hover {
		opacity: 0.7;
	}
`;

const UlStyle = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 500px;
	background-color: rgb(220, 220, 220);
	padding: 1rem;
`;

export function Refrigerator() {
	const [food, setFood] = useRecoilState(foodState);
	const DragEnd = ({ draggableId, destination, source }: DropResult) => {
		if (!destination) return;
		setFood((prevFood) => {
			const CopyFood = [...prevFood];
			const copyLeftTime = CopyFood.slice(source.index, source.index + 1)[0].leftTime;
			CopyFood.splice(source.index, 1);
			CopyFood.splice(destination?.index, 0, { name: draggableId, leftTime: copyLeftTime });
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
								return (
									<Draggable key={foods.name} draggableId={foods.name} index={index}>
										{(provided1) => (
											<Item ref={provided1.innerRef} {...provided1.draggableProps} {...provided1.dragHandleProps}>
												{foods.name} {foods.leftTime}
											</Item>
										)}
									</Draggable>
								);
							})}
						</UlStyle>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
}
