export default function AppForm({ formData, setFormData, handleSubmit }) {
    return (
        <>
            <div className="bg-body-tertiary p-3">
                <form onSubmit={e => handleSubmit(e)}>

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
                    >Submit</button>
                </form>
            </div>
        </>
    )
}