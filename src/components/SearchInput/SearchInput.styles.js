import styled, { css } from 'styled-components';

export const mediaStyles = css`
	@media (min-width: 992px) {
		grid-column: content-mid / content-end;
		grid-row: content-top / header-top;
		padding-right: 0;

		input:hover {
			background-color: #eeeeee;
		}
	}
`;
export const InputWrapper = styled.div`
	position: sticky;
	top: 0px;
	width: -webkit-fill-available;
	min-width: 195px;
	display: flex;
	align-items: end;
	grid-column: content-start / content-mid;
	grid-row: content-top / header-top;
	padding-right: 10px;
	background-color: #fff;
	${mediaStyles}
`;

export const Input = styled.input`
	height: 60px;
	width: -webkit-fill-available;
	padding-left: 37px;
	border-radius: 10px;
	border: none;
	font-size: 16px;
	line-height: 60px;
	background: url('../../assets/search.svg');
	background-color: #f7f7f7;
	background-position: 10px 50%;
	background-repeat: no-repeat;
	transition: background-color 0.3s ease;
	&:focus {
		outline: 1px solid #6cc8fb;
	}
`;
