import React, {useState} from 'react';

const Conversation = ({params}) => {
  if (!params) {
    params = {
      name: "Mustafa Shikora",
      company: "SV Angel"
    }
  }

  // Initialize state
  const [companyRep, updateCompanyRep] = useState(params.name);
  const [company, updateCompany] = useState(params.company);
  // Threads structure maps companies to specific conversations with those companies: {company: [{name: "", message: ""}]}
  const [threads, updateThreads] = useState({});

  // Update state when params change from new URL
  if (params.name !== companyRep) {
    updateCompanyRep(params.name);
  }
  if (params.company !== company) {
    updateCompany(params.company);
  }

  const onKeyPress = (event) => {
    // If enter is pressed
    if (event.keyCode === 13) {
      const message = event.target.value;
      event.preventDefault();
      document.getElementById("text-bar").value = "";
      var name = "Brian Thompson";
      // Initialize threads[company] if empty
      if (!threads[company]) {
        threads[company] = []
      } else {
        // Toggle name back between two for demo purposes
        let latestName = threads[company][threads[company].length - 1].name;
        if (latestName === "Brian Thompson") {
          name = companyRep;
        }
      }
      // Append text input to thread for current company
      threads[company] = [
        ...threads[company],
        {name, message}
      ];
      updateThreads({
        ...threads,
      });
    }
  };

  return (
    <>
      <div className="conversation">
        <div className="conversation-header">
          <p className="name">{companyRep}</p>
          <p className="company">{company}</p>
        </div>
        {threads[company] && threads[company].map((thread) => {
            return (
              <>
                <div className="conversation-section">
                  <p className="name">{thread.name}</p>
                  <p className="message">{thread.message}</p>
                </div>
              </>
            )
          })
        }
        <textarea rows="4" id="text-bar" placeholder="Write a message..." onKeyDown={onKeyPress}></textarea>
      </div>
    </>
  );
}

export default Conversation;