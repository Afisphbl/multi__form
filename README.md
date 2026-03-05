# Multi-Step Form Website

A responsive multi-step form built with React, React Router, and Context API.

The app guides users through:

1. Personal information
2. Address information
3. Payment information
4. Final summary

It also includes a light/dark theme toggle with persistence via `localStorage`.

## Features

- Four-step form flow with route-based pages (`/step-1` to `/step-4`)
- Shared state management using React Context
- Dynamic progress bar and active step indicators
- Step-by-step validation that enables/disables the `Next` button
- Back/Next navigation controls
- Final summary view with masked card number
- Theme toggle (`light` / `dark`) saved in `localStorage`
- Responsive card layout and animated UI transitions

## Validation Rules

- Step 1 (Personal):

1. `firstName` and `lastName` must be at least 3 characters
2. `email` must include `@` and end with `.com`
3. `phone` must be numeric and 10 digits

- Step 2 (Address):

1. `country`, `city`, and `street` are required
2. `zipcode` is required and must be numeric

- Step 3 (Payment):

1. `cardHolderName` must match `firstName + " " + lastName`
2. `cardNumber` must be numeric and 16 digits
3. `expiryDate` is required
4. `cvv` must be numeric and 3 digits

## Tech Stack

- React
- React Router DOM
- Context API + custom hooks
- Create React App (`react-scripts`)
- CSS modules/files for component styling

## Project Structure

```text
src/
	App.jsx
	index.jsx
	index.css
	context/
		useContextApi.jsx
	custom/
		useData.jsx
		useInput.jsx
	data/
		Data.jsx
	Pages/
		PersonalPage.jsx
		AddressPage.jsx
		PaymentPage.jsx
		Summary.jsx
		Summary.css
	components/
		Input/
			InputField.jsx
			InputField.css
		Navigation/
			NavigationButtons.jsx
			NavigationButtons.css
		progressBar/
			ProgressBar.jsx
			ProgressBar.css
		toggleTheme/
			ToggleTheme.jsx
			ThemeToggle.css
		button/
			Button.jsx
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm start
```

App runs at `http://localhost:3000`.

## Scripts

- `npm start`: Start development server
- `npm run build`: Create production build
- `npm test`: Run tests in watch mode
- `npm run eject`: Eject CRA configuration

## How It Works

- `ContextProvider` stores form data, current step, theme, and navigation actions.
- `useData` validates the current step and controls the `Next` button state.
- `App.jsx` listens to `step` and navigates to the corresponding route.
- Input pages render fields from `src/data/Data.jsx` to keep form definitions centralized.
- `Summary.jsx` displays all entered values, masking card number except last 4 digits.

## Notes

- Theme is applied using a `data-theme` attribute on the root element.
- The `Back` button is hidden on step 1 and `Next` is hidden on step 4.

## Future Improvements

- Add field-level error messages (not just disabled `Next`)
- Support more flexible email validation patterns
- Add persistence for form data across page refresh
- Add unit/integration tests for validation and navigation
