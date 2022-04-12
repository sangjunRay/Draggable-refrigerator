import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { IFood } from '../atoms';
import { Font } from '../common/Font';
import DraggbleItem from './DraggbleItem';

interface IBoardProps {
	foods: IFood[];
	boardId: string;
}

const UlStyle = styled.ul<{ isDraggingOver: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 400px;
	background-color: rgb(200, 200, 200);
	padding: 1rem;
	border-radius: 5px;
	margin: 1rem;
	background-color: ${(props) => (props.isDraggingOver ? 'rgb(180,180,180)' : 'rgb(200,200,200)')};
	transition: 0.2s;
`;

function RefrigerBoard({ foods, boardId }: IBoardProps) {
	return (
		<Droppable droppableId={boardId}>
			{(provided, snapshot) => (
				<UlStyle isDraggingOver={snapshot.isDraggingOver} ref={provided.innerRef} {...provided.droppableProps}>
					<Font fontSize="1.1rem" fontWeight="600" marginBottom="1rem">
						{boardId}
					</Font>
					{foods.map((food, index) => {
						return <DraggbleItem key={food.name} index={index} foods={food} />;
					})}
				</UlStyle>
			)}
		</Droppable>
	);
}

export default RefrigerBoard;
