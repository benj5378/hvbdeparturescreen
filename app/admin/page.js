"use client";

export default function Home() {
  
  function postToApi(e) {
    e.preventDefault();  // Don't post by default
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    fetch("/api", {method: "POST", body: JSON.stringify(formJson)});
  }

  return (
    <main style={{width: "80%"}}>
      <form onSubmit={postToApi}>
        <div className="radios">
          <span>
            <input type="radio" id="html" name="locomotive" value="motor" defaultChecked={true}/>
            <label htmlFor="motor">Motor</label>
          </span>
          <span>
            <input type="radio" id="css" name="locomotive" value="damp"/>
            <label htmlFor="damp">Damp</label>
          </span>
        </div>

        <div className="stretch">
          <input name="hours" type="number" defaultValue="12" min="0" max="23"/>
          :
          <input name="minutes" type="number" defaultValue="30" min="0" max="59"/>
        </div>

        <button type="submit">Set</button>
      </form>
    </main>
  );
}
