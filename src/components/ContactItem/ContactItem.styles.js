import styled from 'styled-components';

export const ContactItemWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 120px;
	margin-bottom: 15px;
	align-items: center;
	border-radius: 8px;
	background-color: #f7f7f7;
	transition: 0.3s ease-in;
	@media (min-width: 992px) {
		& {
			height: 50px;
			margin-bottom: 5px;
		}
		&:hover {
			background-color: #CFEEFF;
		}
	}
`;

export const PersonalDataWrapper = styled.div`
	display: grid;
	height: 100%;
	width: 100%;

	grid-template-columns: [picture-left] 72px [picture-right]20px[name-left] auto [name-right] 0 [del-left]auto[del-right];
	grid-template-rows: [top] 1fr [mid] 1fr [bottom];
	padding: 20px;
	align-items: center;
	font-size: 16px;
	@media (min-width: 992px) {
		padding: 10px;
		grid-template-columns: [name-left] minmax(200px, 400px) [name-right] 0 [phone-left] minmax(
				150px,
				300px
			) [phone-right] 0[del-left] 50px [del-right];
		grid-template-rows: [top] 1fr [bottom];
	}
`;
export const PictureWrapper = styled.div`
	grid-column: picture-left / picture-right;
	grid-row: top / bottom;
	img {
		border-radius: 50%;
	}

	@media (min-width: 992px) {
		display: none;
	}
`;
export const NameWrapper = styled.div`
	grid-column: name-left / name-right;
	grid-row: top / mid;
	@media (min-width: 992px) {
		grid-column: name-left / name-right;
		grid-row: top / bottom;
	}
`;
export const PhoneWrapper = styled.div`
	display: flex;
	grid-column: name-left / del-right;
	grid-row: mid / bottom;
	align-items: center;
	@media (min-width: 992px) {
		justify-content: space-between;
		grid-column: phone-left / phone-right;
		grid-row: top / bottom;
	}
`;
export const DeleteIconWrapper = styled.div`
	grid-column: del-left / del-right;
	grid-row: top / mid;
	justify-self: right;
	@media (min-width: 992px) {
		grid-row: top / bottom;
	}
`;
