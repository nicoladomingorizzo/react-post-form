import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  });

  return (
    <>
      <div className="container mt-5">
        <h1>Invio dati ad un API</h1>
        <div className="bg-body-tertiary p-3">
          <form>

            {/* Author input */}
            <div className="mb-3">
              <label htmlFor="author" className="form-label">Author</label>
              <input
                name="author"
                placeholder="Insert your name..."
                type="text"
                className="form-control py-2 px-3"
                id="author"
                value={formData.author}
                onChange={e => setFormData({ ...formData, author: e.target.value })} />

              {/* Title input */}
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                name="title"
                placeholder="Insert the title..."
                type="text"
                className="form-control py-2 px-3"
                id="title"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })} />
            </div>

            {/* Body textarea */}
            <div className="my-3">
              <label htmlFor="body" className="form-label">Body</label>
              <textarea
                name='body'
                className="form-control"
                id="body"
                rows="4"
                value={formData.body}
                onChange={e => setFormData({ ...formData, body: e.target.value })}>
              </textarea>
            </div>

            {/*  Public checkbox */}
            <div className="mb-3 form-check">
              <input
                name="public"
                type="checkbox"
                className="form-check-input"
                id="public"
                onChange={e => setFormData({ ...formData, public: e.target.checked })} />
              <label className="form-check-label" htmlFor="public">Public</label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="btn btn-primary"
              onSubmit={''}>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
};

export default App

/*
Oggi creeremo il nostro primo form multifield per inviare dati in POST ad un’API.
Dovremo creare una nuova app React che contenga un form per creare un nuovo post all’interno di un blog.
I dati che il form dovrà inviare sono i seguenti:
author (string) - L’autore del post
title (string) - Il titolo del post
body (string) - Il testo del post
public (boolean) - Se il post deve essere pubblico (true) o una bozza (false)
L’endpoint a cui effettuare la chiamata POST è il seguente: https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts
Questo endpoint, in caso di successo, vi restituisce i dati inviati. Stampateli in console per verificare di essere riusciti ad inviare correttamente tutto!
Bonus
aggiungere e gestire un alert per dare agli utenti un feedback sull’invio del form
*/