# Next.js 15 - Unexpected state update behavior after navigation

This repository demonstrates an unexpected behavior in a Next.js 15 application. When navigating from the home page to the about page, the about page initially renders with its initial state (counter = 0), then updates to its final state (counter = 10) after a 3-second delay.

## Bug Description

The about page uses the `useEffect` hook with a `setTimeout` to simulate an asynchronous data fetch. The expectation is that the page should render with the final state once the data fetch is complete. However, the page initially renders with the initial state and updates only after the delay, which is unexpected.

## Steps to Reproduce

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to the `/about` page.

## Expected Behavior

The about page should render with `Counter: 10` immediately or at least after the first render without the delay.

## Actual Behavior

The about page initially renders with `Counter: 0` and then updates to `Counter: 10` after a 3-second delay.

## Solution

The solution involves using the `useTransition` hook for managing asynchronous actions and the `useDeferredValue` hook from React to prevent unnecessary renders. The detailed explanation is provided in the `solution` branch.