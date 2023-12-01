var data;

async function fetchDataWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        return response.json();
      }
    } catch (error) {
      console.error(`Error fetching data (attempt ${i + 1}):`, error.message);

      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
  throw new Error("Max retries reached");
}

async function fetchData() {
  try {
    data = await fetchDataWithRetry(
      "https://expressapp-23dx.onrender.com/get-repositories"
    );
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchData();

export const dataPromise = new Promise((resolve) => {
  const checkData = () => {
    if (data) {
      resolve(data);
    } else {
      setTimeout(checkData, 1000);
    }
  };

  checkData();
});

export { fetchData };
