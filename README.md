# Full Stack Assignment - My App

## Description
This is a full-stack application that displays a table with search, sort, and pagination functionalities. The front-end is built using React JS and the back-end is built using Python/NodeJS. The data is stored in a database of your choice.

## Features
- **Search**: Users can search any text in the search bar on the top right any of the column fields to get the desired result rows.
- **Sort**: Users can sort the table rows based on the columns by clicking on the header. Columns have clear indicators whether the column is unsorted, ascending or descending.
- **Pagination**: Users can view the number of rows as per the page size selected in the dropdown. They can click on the pagination buttons to navigate through the pages.

## How to Use
1. Clone the repository to your local machine.
2. Install the necessary dependencies.
3. Run the server and visit the application on your browser.

## Code Structure
- The front-end code is located in the `client` directory.
- The back-end code is located in the `server` directory.
- Test files are located in the `tests` directory.

## API Contract
The Data Read/Write happens Using APIs. The JSON Contract used is as follows:
- GET `/api/data`: Returns an array of data.
- POST `/api/data`: Adds a new data entry. The request body should be a JSON object containing the data fields.
- PUT `/api/data/:id`: Updates the data entry with the given id. The request body should be a JSON object containing the new data fields.
- DELETE `/api/data/:id`: Deletes the data entry with the given id.

## Testing
The code is robust and test-driven. To run the tests, use the command `npm test` (for JavaScript) or `pytest` (for Python).

## Future Improvements
- Add more interactive elements.
- Improve the design and user interface.
