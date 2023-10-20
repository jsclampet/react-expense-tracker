# Expense Tracker

*An app to keep track of all your expenses, written in React/TS, Bootstrap and React-hook-form*

View it [here](https://expense-tracker-omega-navy.vercel.app/)

![preview](https://github.com/jsclampet/react-expense-tracker/blob/main/PREVIEW.png?raw=true)

## Summary
Users can add expenses by entering data into a simple form that gets displayed to the table below.

If the user has previously visited the page and submitted expenses, the 'expenses' state variable will default to the data stored in local storage. Otherwise, if no expenses have been submitted yet, 'expenses' will default to an empty Array, and the table below will only become visible once at least one expense has been added.

I decided to use the 'React-hook-form' library over React's built-in 'useRef' hook to simplify the form validation with less code.

This is the first React App I deployed. From this experience, I learned about the build and compilation process. I came across several options for deployment, including cloudflare (Wrangler CLI), Heroku, Github pages, and ultimately decided on Vercel for ease of use.

## Author
- John Clampet: FullStack Software Developer
- [LinkedIn](https://www.linkedin.com/in/john-clampet-264007122/)
