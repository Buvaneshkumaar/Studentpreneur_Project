import React, { useEffect, useState } from 'react';

function ShowAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {

    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://localhost:8080/stdDB/announcements'); // Replace with your backend API URL
        setAnnouncements(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div>
      <h1>Announcements</h1>
      {announcements.map((announcement) => (
        <div key={announcement._id}>
          <img src={announcement.imageURL} alt="Announcement" />
          <p>{announcement.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowAnnouncements;