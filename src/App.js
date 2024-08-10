import { useState } from 'react';
function App() {
    function handleClick() {
        console.log('Button clicked');
        setContent(content + 1)
        if (content === 4) {
            alert(`Count: ${content + 1}`);
        }
    }
    const [content, setContent] = useState(0)
    return (
    <div>
            {content}
            <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
