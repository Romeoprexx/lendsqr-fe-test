import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import { BrowserRouter } from 'react-router-dom';

describe('Login component', () => {
	it('should display an email and password field, and a submit button to proceed to the dashboard', () => {
		render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);

		const emailField = screen.getByPlaceholderText(/Email/i);
		const passwordField = screen.getByPlaceholderText(/Password/i);
		const submitButton = screen.getByRole('button');

		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});

	it('should show error messages when required fields are empty', async () => {
		render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);

		const submitButton = screen.getByRole('button');
		await userEvent.click(submitButton);

		waitFor(() => {
			const emailError = screen.getByText(/Email is required/i);
			expect(emailError).toBeInTheDocument();
		});
	});

	it('should allow a user to submit their email and password to proceed', () => {
		render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);

		const emailField = screen.getByPlaceholderText(/Email/i);
		const passwordField = screen.getByPlaceholderText(/Password/i);
		const submitButton = screen.getByRole('button');

		userEvent.type(emailField, 'romeoprexx@yahoo.com');
		userEvent.type(passwordField, 'password123');
		userEvent.click(submitButton);
	});
});