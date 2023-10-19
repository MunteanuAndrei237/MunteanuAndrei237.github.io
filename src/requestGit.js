var data
async function fetchData() {

  try {
    const response = await fetch('http://localhost:3001/get-repositories');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    data = await response.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the function to fetch data
fetchData();

// Export a promise that resolves to the data
export const dataPromise = new Promise((resolve) => {
  const checkData = () => {
    if (data) {
      resolve(data);
    } else {
      setTimeout(checkData, 1000); // Check every 100ms until data is available
    }
  };

  checkData();
});

// You can also export the fetchData function if needed
export { fetchData };