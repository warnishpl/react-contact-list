import styled, {css} from 'styled-components';

export const mediaStyles = css`
@media (min-width: 992px) {
	&:hover {
		background-color: #ebebeb;
	}
}`
export const ContactItemWrapper = styled.div`
	display: flex;
	width: -webkit-fill-available;
	height: 120px;
	margin-bottom: 15px;
	align-items: center;
	border-radius: 8px;
	background-color: #f7f7f7;
	transition: 0.3s ease-in;
	${mediaStyles}
`;

export const PictureWrapper = styled.div`
	& img {
		margin-left: 20px;
		border-radius: 50%;
	}
`;
export const PersonalDataWrapper = styled.div`
	margin: 0 20px 0 20px;
	width: -webkit-fill-available;
`;
export const FirstLineWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;
`;
export const Wrapper = styled.div``;

export const SecondLineWrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: 18px;
`;


