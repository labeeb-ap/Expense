# Expense Tracker API

A simple RESTful API for tracking personal expenses.

## Features

- Add, list, update, and delete expenses
- Filter expenses by category and date
- 

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (local or cloud)

## API Endpoints

| Method | Endpoint | Description              |
|--------|----------|--------------------------|
| POST   | /expenses     | Add expense |
| GET    | /expenses     | List all expenses |
| GET    | /expenses/:id | Get expense by ID |
| PUT    | /expenses/:id | Update expense |
| DELETE | /expenses/:id | Delete expense |



### Installation

```bash
git clone https://github.com/labeeb-ap/Expense.git
cd expense-tracker-api
npm install

### Run the Server
npm start