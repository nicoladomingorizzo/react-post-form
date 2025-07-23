import { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import AppForm from "./components/AppForm";


function App() {

  const apiUrl = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  });



  function handleSubmit(e) {
    e.preventDefault();
    let responseData;
    console.log(formData)
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(json => {
        responseData = json
        console.log(responseData)
        alert(`I dati che hai inoltrato sono: ${JSON.stringify(responseData)}`);
      })
      .catch(error => {
        // Aggiunto anche un alert in caso di errore al momento dell'invio
        alert(`Si è verificato un errore durante l'invio: ${error.message}`);
        console.error("Errore durante l'invio:", error);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <AppHeader />
        <AppForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      </div>
    </>
  )
};

export default App

