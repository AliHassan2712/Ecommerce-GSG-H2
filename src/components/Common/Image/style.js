import styled from "styled-components";

// Accept numbers (as numbers or numeric strings) and append 'px' when appropriate
const valueWithUnit = (v) => {
	if (v === undefined || v === null) return null;
	// If it's a number, add px
	if (typeof v === 'number') return `${v}px`;
	const s = String(v).trim();
	// If it is a pure integer string, treat as px
	if (/^[0-9]+$/.test(s)) return `${s}px`;
	// Otherwise return as-is (allows '50%', '10rem', 'auto', etc.)
	return s;
};

export const ImageStyle = styled.img`
	object-fit: contain;
	${props => props.$width ? `width: ${valueWithUnit(props.$width)};` : ''}
	${props => props.$height ? `height: ${valueWithUnit(props.$height)};` : ''}
`;