async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear loading text
    dataContainer.innerHTML = '';

    // Create list
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Fetch error:', error);
  }
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
