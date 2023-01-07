import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Users from '../pages/Dashboard/Users';
import { apiClient } from "../utils/api";

const server = setupServer(
	rest.get(`${apiClient}/users`, (req, res, ctx) => {
		return res(ctx.json({ orgName: 'Testing' }));
	})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Users list component', () => {
	it('should be able to display users stats and tables after fetching the data from api', async () => {
		render(<Users />);

		const usersStats = screen.getByTestId('users_info');
		expect(usersStats).toBeInTheDocument();

		waitFor(() => {
			const table = screen.getByTestId('table-container');
			expect(table).toBeInTheDocument();
		});
	});
});