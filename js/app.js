// === Смяна на таб ===
function switchTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(tabId).classList.remove('hidden');
  }
  
  // === Планирани разходи ===
  const plannedItems = JSON.parse(localStorage.getItem('plannedItems')) || [];
  
  function savePlanned() {
    localStorage.setItem('plannedItems', JSON.stringify(plannedItems));
  }
  
  function formatDateWithDay(dateStr) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateStr);
    return date.toLocaleDateString('bg-BG', options);
  }
  
  function renderPlanned() {
    const list = document.getElementById('plannedList');
    const totalSpan = document.getElementById('totalPlanned');
    list.innerHTML = '';
  
    let total = 0;
    plannedItems.forEach((item, index) => {
      total += parseFloat(item.amount);
      const li = document.createElement('li');
      li.textContent = `${item.text} – ${item.amount} лв – ${formatDateWithDay(item.date)}`;
  
      const delBtn = document.createElement('button');
      delBtn.textContent = 'X';
      delBtn.className = 'delete';
      delBtn.onclick = () => {
        plannedItems.splice(index, 1);
        savePlanned();
        renderPlanned();
      };
  
      li.appendChild(delBtn);
      list.appendChild(li);
    });
  
    totalSpan.textContent = total.toFixed(2);
  }
  
  function addPlanned() {
    const text = document.getElementById('plannedText').value.trim();
    const amount = document.getElementById('plannedAmount').value;
    const date = document.getElementById('plannedDate').value;
    if (text && amount && date) {
      plannedItems.push({ text, amount, date });
      savePlanned();
      renderPlanned();
      document.getElementById('plannedText').value = '';
      document.getElementById('plannedAmount').value = '';
      document.getElementById('plannedDate').value = '';
    }
  }
  
  renderPlanned();
  
  // === Разходи ===
  const expenseItems = JSON.parse(localStorage.getItem('expenseItems')) || [];
  
  function saveExpenses() {
    localStorage.setItem('expenseItems', JSON.stringify(expenseItems));
  }
  
  function renderExpenses() {
    const list = document.getElementById('expenseList');
    const totalSpan = document.getElementById('totalExpenses');
    list.innerHTML = '';
  
    let total = 0;
    expenseItems.forEach((item, index) => {
      total += parseFloat(item.amount);
      const li = document.createElement('li');
      li.textContent = `${item.text} – ${item.amount} лв – ${item.date}`;
  
      const delBtn = document.createElement('button');
      delBtn.textContent = 'X';
      delBtn.className = 'delete';
      delBtn.onclick = () => {
        expenseItems.splice(index, 1);
        saveExpenses();
        renderExpenses();
      };
  
      li.appendChild(delBtn);
      list.appendChild(li);
    });
  
    totalSpan.textContent = total.toFixed(2);
  }
  
  function addExpense() {
    const text = document.getElementById('expenseText').value.trim();
    const amount = document.getElementById('expenseAmount').value;
    const date = document.getElementById('expenseDate').value;
    if (text && amount && date) {
      expenseItems.push({ text, amount, date });
      saveExpenses();
      renderExpenses();
      document.getElementById('expenseText').value = '';
      document.getElementById('expenseAmount').value = '';
      document.getElementById('expenseDate').value = '';
    }
  }
  
  renderExpenses();
  
  // === Приходи ===
  const incomeItems = JSON.parse(localStorage.getItem('incomeItems')) || [];
  
  function saveIncome() {
    localStorage.setItem('incomeItems', JSON.stringify(incomeItems));
  }
  
  function renderIncome() {
    const list = document.getElementById('incomeList');
    const totalSpan = document.getElementById('totalIncome');
    list.innerHTML = '';
  
    let total = 0;
    incomeItems.forEach((item, index) => {
      total += parseFloat(item.amount);
      const li = document.createElement('li');
      li.textContent = `${item.text} – ${item.amount} лв – ${item.date}`;
  
      const delBtn = document.createElement('button');
      delBtn.textContent = 'X';
      delBtn.className = 'delete';
      delBtn.onclick = () => {
        incomeItems.splice(index, 1);
        saveIncome();
        renderIncome();
      };
  
      li.appendChild(delBtn);
      list.appendChild(li);
    });
  
    totalSpan.textContent = total.toFixed(2);
  }
  
  function addIncome() {
    const text = document.getElementById('incomeText').value.trim();
    const amount = document.getElementById('incomeAmount').value;
    const date = document.getElementById('incomeDate').value;
    if (text && amount && date) {
      incomeItems.push({ text, amount, date });
      saveIncome();
      renderIncome();
      document.getElementById('incomeText').value = '';
      document.getElementById('incomeAmount').value = '';
      document.getElementById('incomeDate').value = '';
    }
  }
  
  renderIncome();
  
  // === Бележки ===
  const notes = JSON.parse(localStorage.getItem('notes')) || {};
  
  function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
  }
  
  function renderNotes() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
  
    Object.keys(notes).forEach(date => {
      const section = document.createElement('div');
      const heading = document.createElement('h3');
      heading.textContent = date;
      section.appendChild(heading);
  
      notes[date].forEach((text, index) => {
        const note = document.createElement('p');
        note.textContent = text;
  
        const delBtn = document.createElement('button');
        delBtn.textContent = 'X';
        delBtn.className = 'delete';
        delBtn.onclick = () => {
          notes[date].splice(index, 1);
          if (notes[date].length === 0) delete notes[date];
          saveNotes();
          renderNotes();
        };
  
        note.appendChild(delBtn);
        section.appendChild(note);
      });
  
      notesList.appendChild(section);
    });
  }
  
  function addNote() {
    const noteInput = document.getElementById('noteInput');
    const text = noteInput.value.trim();
    if (!text) return;
  
    const date = new Date().toLocaleDateString('bg-BG');
    if (!notes[date]) notes[date] = [];
    notes[date].push(text);
  
    saveNotes();
    renderNotes();
    noteInput.value = '';
  }
  
  renderNotes();
  
