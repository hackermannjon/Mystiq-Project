import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
	background: transparent;
	color: #ffffff;
	font-size: 1rem;
	font-weight: 700;
	width: 100%;
	max-width: 180px;
	border: 1px solid #ffffff;
	border-radius: 4px;
	padding: 8px 0;
	cursor: pointer;
	margin-top: 0.625rem;
	transition: all 0.3s ease-in-out;
	box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

	&:hover,
	&:active,
	&:focus {
		background-color: #006400; /* verde escuro no hover */
		border-color: #006400;
		color: #1d1d1b; /* texto no hover em #1d1d1b */
	}
`;
