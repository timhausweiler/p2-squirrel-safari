import React from 'react'

export default function EditStory() {
  const [input, setInput] = useState(default_input);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchStories = async () => {
      const res = await api.get(`/${id}`);
      setInput(res.data.fields);
    };
    fetchStories();
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    await api.put(`/${id}`, { fields });
    setInput(default_input);
    navigate(`/story/${id}`);
    // console.log(res.data);
}

  const default_input = {
    "name": "",
    "story": "" 
  }


  return (
    <div>
      <h2>Edit your story</h2>
      <Form 
        input={input}
        handleTextInput={handleTextInput}
        handleSubmit={handleSubmit}
      ></Form>
    </div>
  )
}
