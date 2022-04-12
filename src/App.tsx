import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Font } from './common/Font';
import { Refrigerator } from './refrigerator';

const Globalstyled = createGlobalStyle`
 /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
* {
	box-sizing: border-box;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 15% 0 15%;
`;

const Header = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 3rem;
`;

function App() {
	return (
		<>
			<Header>
				<Font fontSize="1.4rem" fontWeight="600" marginBottom="0.5rem">
					냉장고를 부탁해 🧚‍♀️
				</Font>
				<p>React / Typescript / Recoil / react-beautiful-dnd</p>
				<p>create by sangjunRay.</p>
			</Header>
			<Container>
				<Globalstyled />
				<Refrigerator />
			</Container>
		</>
	);
}

export default App;
