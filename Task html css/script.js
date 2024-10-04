
document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 5;
    let currentPage = 1;
    const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
    const itemsContainer = document.getElementById('items');
    const paginationContainer = document.getElementById('pagination');

    function renderItems() {
        itemsContainer.innerHTML = '';
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = items.slice(start, end);

        paginatedItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            itemsContainer.appendChild(li);
        });
    }

    function renderPagination() {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(items.length / itemsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.toggle('disabled', i === currentPage);
            button.addEventListener('click', () => {
                currentPage = i;
                renderItems();
                renderPagination();
            });
            paginationContainer.appendChild(button);
        }
    }

    renderItems();
    renderPagination();
});
