import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { Font } from '../common/Font';

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

interface IDraggableItemProps {
	foods: { name: string; leftTime: string; amount: string };
	index: number;
}

function DraggableFood({ foods, index }: IDraggableItemProps) {
	return (
		<Draggable key={foods.name} draggableId={foods.name} index={index}>
			{(provided1) => (
				<Item ref={provided1.innerRef} {...provided1.draggableProps} {...provided1.dragHandleProps}>
					<Font fontSize="1rem" fontWeight="600" marginBottom="0.5rem">
						{foods.name} {foods.amount}
					</Font>{' '}
					{foods.leftTime} 까지 먹을 수 있음!
				</Item>
			)}
		</Draggable>
	);
}

export default React.memo(DraggableFood);
