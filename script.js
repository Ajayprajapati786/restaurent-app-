function save(e){
    e.preventDefault();
    const expense = e.tatget.expense.value;
    console.log(expense);
    const description = e.tatget.description.value;
    const Category = e.tatget.Category.value;
    localStorage.setItem('expense',expense);
    localStorage.setItem('description',description);
    localStorage.setItem('Category',Category);
}