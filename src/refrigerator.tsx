import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

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
	const DragEnd = () => {
		console.log('end');
	};
	return (
		<DragDropContext onDragEnd={DragEnd}>
			<div>
				<Droppable droppableId="one">
					{(provided) => (
						<UlStyle ref={provided.innerRef} {...provided.droppableProps}>
							<p style={{ marginBottom: '1rem' }}>냉장고 1번 칸</p>
							<Draggable draggableId="first" index={0}>
								{(provided2) => (
									<Item ref={provided2.innerRef} {...provided2.draggableProps} {...provided2.dragHandleProps}>
										달걀🍀 10알 2022년 8월 1일까지
									</Item>
								)}
							</Draggable>
							<Draggable draggableId="second" index={1}>
								{(provided3) => (
									<Item ref={provided3.innerRef} {...provided3.draggableProps} {...provided3.dragHandleProps}>
										시금치🌈 200g 2022년 10월 2일까지
									</Item>
								)}
							</Draggable>
						</UlStyle>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
}
