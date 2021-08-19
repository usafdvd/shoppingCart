import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app bar without crashing', async () => {
  render(<App />);
  const appBar = await screen.findByTestId("app-bar");
  expect(appBar).toBeInTheDocument();
});
