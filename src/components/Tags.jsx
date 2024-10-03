import '../styles/Logements.css'


function Tags({ tags }) {

  return (
  <div className="tag">
    {tags.map((tag, index) => (
      <span key={index} className="logementTag">{tag}</span>
    ))}
  </div>
  );
}

export default Tags;



