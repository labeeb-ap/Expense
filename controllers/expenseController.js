const Expense = require('../models/Expense');


exports.addExpense = async (req, res) => {
  try {
    const { amount, category, description, date } = req.body;
    const expense = new Expense({ amount, category, description, date });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const { category, date } = req.query;
    const filter = {};

    if (category) {
     
      filter.category = { $regex: `^${category}$`, $options: 'i' };
    }

    if (date) {
      filter.date = { $gte: new Date(date) };
    }

    const expenses = await Expense.find(filter);
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) return res.status(404).json({ error: 'Expense not found' });
    res.json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const updated = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
