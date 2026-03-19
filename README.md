# Multi Form

A professional multi-step form application built with React, React Router, and Context API. The app guides users through a structured data-entry flow with validation, navigation controls, theme switching, and a final review page.

## Table of Contents

- Project Overview
- Live Flow
- Core Features
- Validation Rules
- Architecture
- Tech Stack
- Project Structure
- Getting Started
- Available Scripts
- Owner and Repository
- Roadmap

## Project Overview

This project collects user details across four steps:

1. Personal Information
2. Address Information
3. Payment Information
4. Summary

The interface is designed to be responsive and user-friendly, with clear progression indicators and controlled navigation between steps.

## Live Flow

- Step 1 route: /step-1
- Step 2 route: /step-2
- Step 3 route: /step-3
- Step 4 route: /step-4

The app automatically navigates according to the current step in global state.

## Core Features

- Multi-step route-based form workflow
- Global state management with Context and reducer
- Dynamic progress bar with active-step highlighting
- Per-step validation and controlled Next button enable/disable
- Back and Next navigation controls
- Final summary page with masked card number display
- Light and dark theme toggle persisted in local storage
- Reusable form input and button components

## Validation Rules

### Step 1: Personal Information

- First name and last name must each be at least 3 characters
- Email must include @ and end with .com
- Phone must be numeric and exactly 10 digits

### Step 2: Address Information

- Country, city, and street are required
- Zip code is required and must be numeric

### Step 3: Payment Information

- Card holder name must match first name + last name
- Card number must be numeric and exactly 16 digits
- Expiry date is required
- CVV must be numeric and exactly 3 digits

## Architecture

### State Layer

- Context provider stores:
  - Form data sections
  - Current step
  - Next button state
  - Theme
- Reducer handles all state transitions using explicit action types

### Validation Layer

- Custom hook validates active step inputs
- Validation drives next-button availability

### Presentation Layer

- Page components render each step
- Shared input, navigation, progress, and theme components keep the UI modular

## Tech Stack

- React 19
- React Router DOM 6
- Context API and custom React hooks
- Create React App tooling via react-scripts
- Plain CSS modules/files for styling

## Project Structure

```text
multi__form/
	public/
		index.html
	src/
		App.jsx
		index.css
		index.jsx
		components/
			button/
				Button.jsx
			Input/
				InputField.css
				InputField.jsx
			Navigation/
				NavigationButtons.css
				NavigationButtons.jsx
			progressBar/
				ProgressBar.css
				ProgressBar.jsx
			toggleTheme/
				ThemeToggle.css
				ToggleTheme.jsx
		context/
			useContextApi.jsx
		custom/
			useData.jsx
			useInput.jsx
		data/
			Data.jsx
		Pages/
			AddressPage.jsx
			PaymentPage.jsx
			PersonalPage.jsx
			Summary.css
			Summary.jsx
	package.json
	README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

```bash
npm install
```

### Run in Development

```bash
npm start
```

Application URL:

http://localhost:3000

## Available Scripts

- npm start: Runs the app in development mode
- npm run build: Builds the app for production
- npm test: Runs tests in interactive watch mode
- npm run eject: Ejects Create React App configuration

## Owner and Repository

- Owner:Abduselam Seid aka(Afis)
- Repository: https://github.com/Afisphbl/multi__form
- Clone URL: https://github.com/Afisphbl/multi__form.git

## Roadmap

- Add inline field-level validation messages
- Add stronger email and phone validation patterns
- Persist form progress in storage for resume support
- Add unit and integration tests for reducer, hooks, and page flow
- Improve accessibility with additional ARIA labels and keyboard behavior checks
