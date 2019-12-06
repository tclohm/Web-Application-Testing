import React from 'react';
import * as rtl from '@testing-library/react';
import Display from './components/display';
import Dashboard from './components/dashboard';
import App from './App';

afterEach(rtl.cleanup)

test('the app has ball count text', () => {
	const wrapper = rtl.render(<App />);
	const element = wrapper.queryByText(/ball count/i);
	expect(element).toBeInTheDocument();
});

test('it displays the text Strikes', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByText(/strikes/i);
  expect(element).toBeInTheDocument();
});

test('it displayes the text Balls', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByText(/balls/i);
  expect(element) 
});

test("displays the strike number", () => {
	const wrapper = rtl.render(<App />);
	const strike = wrapper.getByTestId(/strike/i)
	expect(strike).toHaveTextContent("0");
});

test("increment strike number", () => {
	const wrapper = rtl.render(<App />);
	rtl.fireEvent.click(wrapper.getByText("STRIKE"));
	expect(wrapper.getByTestId("strike-count")).toHaveTextContent("1");
});

test("reset strike number", () => {
	const wrapper = rtl.render(<App />);
	const button = wrapper.getByText("STRIKE");
	rtl.fireEvent.click(button);
	rtl.fireEvent.click(button);
	rtl.fireEvent.click(button);
	expect(wrapper.getByTestId("strike-count")).toHaveTextContent("0");
});

test("increment ball to one", () => {
	const wrapper = rtl.render(<App />);
	const ballButton = wrapper.getByText("BALL");
	rtl.fireEvent.click(ballButton);
	expect(wrapper.getByTestId("ball-count")).toHaveTextContent("1");
});

test("increment two fouls equal strike", () => {
	const wrapper = rtl.render(<App />);
	const foulButton = wrapper.getByText("FOUL");
	rtl.fireEvent.click(foulButton);
	rtl.fireEvent.click(foulButton);
	expect(wrapper.getByTestId("strike-count")).toHaveTextContent("1");
});

test("four balls reset count", () => {
	const wrapper = rtl.render(<App />);
	const ballButton = wrapper.getByText("BALL");
	rtl.fireEvent.click(ballButton);
	rtl.fireEvent.click(ballButton);
	rtl.fireEvent.click(ballButton);
	rtl.fireEvent.click(ballButton);
	expect(wrapper.getByTestId("ball-count")).toHaveTextContent("0");
})
