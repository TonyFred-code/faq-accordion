import { useState } from "react";

export default function App() {
  const [activeTabIds, setActiveTabIds] = useState([]);

  const tabs = [
    {
      tabPanel: "What is Frontend Mentor, and how will it help me?",
      id: 1,
      content:
        "Frontend Mentor offers realistic coding challenges to help developers improve their coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building",
    },
    {
      tabPanel: "Is Frontend Mentor free?",
      id: 2,
      content:
        "The majority of our challenges are free, yes. Frontend Mentors also have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.",
    },
    {
      tabPanel: "Can I use Frontend Mentor projects in my portfolio?",
      id: 3,
      content:
        "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!",
    },
    {
      tabPanel: "How can I get help if I'm stuck on a challenge?",
      id: 4,
      content:
        "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions.",
    },
  ];

  function isActiveId(id) {
    return activeTabIds.includes(id);
  }

  function makeActive(id) {
    if (isActiveId(id)) {
      setActiveTabIds(activeTabIds.filter((tabId) => tabId !== id));
      return;
    }

    setActiveTabIds([...activeTabIds, id]);
  }

  return (
    <div className="min-h-screen bg-purple-100 bg-[url(/assets/background-pattern-mobile.svg)] bg-contain md:bg-[url(/assets/background-pattern-desktop.svg)] bg-no-repeat px-4 py-5 flex items-center justify-center">
      <div className="rounded-md bg-white py-6 px-5 space-y-4 max-w-lg">
        <h1 className="font-bold flex gap-4 items-center text-3xl">
          <img src="/assets/icon-star.svg" alt="" className="size-6" />
          <span>FAQs</span>
        </h1>
        <section className="">
          {tabs.map((tab) => {
            const { id, content, tabPanel } = tab;

            const isActive = isActiveId(id);

            return (
              <div
                key={id}
                className="border-b border-purple-100 last:border-none"
              >
                <h2>
                  <button
                    type="button"
                    className="font-semibold hover:text-purple-700 cursor-pointer flex justify-between items-center py-3 gap-3 w-full text-left"
                    onClick={() => makeActive(id)}
                    aria-expanded={isActive}
                    aria-controls={`tab-content-${id}`}
                  >
                    <span className="shrink max-w-5/6 md:max-w-11/12">
                      {tabPanel}
                    </span>
                    <span className="flex size-6">
                      <img
                        src={`${isActive ? "/assets/icon-minus.svg" : "/assets/icon-plus.svg"}`}
                        alt=""
                        className="w-full"
                      />
                    </span>
                  </button>
                </h2>
                <p
                  id={`tab-content-${id}`}
                  className={`${isActive ? "h-fit py-3" : "h-0"} transition-all duration-300 ease-in-out text-purple-600 font-normal overflow-hidden`}
                >
                  {content}
                </p>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
