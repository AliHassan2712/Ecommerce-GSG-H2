import styled from "styled-components";

// Accept numbers (as strings or numbers) 
const valueWithUnit = (v) => {
	if (v === undefined || v === null) return null;
	const s = String(v);
	return /^[0-9]+$/.test(s) ? `${s}px` : s;
};

export const ImageStyle = styled.img`
	object-fit: contain;
	${props => props.widthImage ? `width: ${valueWithUnit(props.widthImage)};` : ''}
	${props => props.heightImage ? `height: ${valueWithUnit(props.heightImage)};` : ''}
`;