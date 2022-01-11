import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../Services/apiConfig";

export default function StoryList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const res = await api.get();
      setStories(res.data.records);
    }
    fetchStories();
}, [])

return (
  <div>
    <h2>Overview of all stories</h2>
    {stories.map((story, index) => {
      return (
        <Link to={`/story/${story.id}`}  key = {index}>
          <div>
            <h3>{story.fields.name}'s story from {story.fields.date}</h3>
          </div>
        </Link>
      );
    })}
  </div>
);
}
