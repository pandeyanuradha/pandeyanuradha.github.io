import HeaderNav from "@/components/header-nav";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <HeaderNav />
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          
          {/* Blog Posts */}
          <div className="space-y-6">
            {/* Article 1: Help People */}
            <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <img src="https://miro.medium.com/v2/resize:fill:32:32/1*5PN8bc61KZYuJm916NS-Kw.png" alt="Medium" className="w-6 h-6 rounded-full" />
                <span className="text-gray-500 text-sm">Published on Medium</span>
              </div>
              <h2 className="text-2xl font-semibold mb-3">
                <a href="https://medium.com/@anuradha.pandey" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  Help people.
                </a>
              </h2>
              <p className="text-gray-500 text-sm mb-3">April 21, 2022</p>
              <p className="text-gray-700 mb-4">
                This is one piece of advice we've heard for ages, but how many times have you followed it? 
                Sharing my experience where I was helped by others, I reflect on the importance of helping others and making a positive impact in our communities.
              </p>
              <a href="https://medium.com/@anuradha.pandey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                Read on Medium 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </article>
            
            {/* Article 2: Salesforce Interview Experience */}
            <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <img src="https://miro.medium.com/v2/resize:fill:32:32/1*5PN8bc61KZYuJm916NS-Kw.png" alt="Medium" className="w-6 h-6 rounded-full" />
                <span className="text-gray-500 text-sm">Published on Medium</span>
              </div>
              <h2 className="text-2xl font-semibold mb-3">
                <a href="https://medium.com/@anuradha.pandey" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  My Interview Experience with Salesforce
                </a>
              </h2>
              <p className="text-gray-500 text-sm mb-3">October 21, 2021</p>
              <p className="text-gray-700 mb-4">
                A detailed blog on how I cleared different rounds to get selected for a SWE Intern role at Salesforce! 
                Sharing my experience and tips for others preparing for similar interviews.
              </p>
              <a href="https://medium.com/@anuradha.pandey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                Read on Medium 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </article>

            {/* Article 3: GSoC Preparation */}
            <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <img src="https://miro.medium.com/v2/resize:fill:32:32/1*5PN8bc61KZYuJm916NS-Kw.png" alt="Medium" className="w-6 h-6 rounded-full" />
                <span className="text-gray-500 text-sm">Published on Medium</span>
              </div>
              <h2 className="text-2xl font-semibold mb-3">
                <a href="https://medium.com/@anuradha.pandey" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  Road map for GSoC preparation
                </a>
              </h2>
              <p className="text-gray-500 text-sm mb-3">August 31, 2021</p>
              <p className="text-gray-700 mb-4">
                A comprehensive guide for students looking to participate in Google Summer of Code.
                Learnings from my journey of being an Open Source and GSoC '21 contributor. 
              </p>
              <a href="https://medium.com/@anuradha.pandey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                Read on Medium 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </article>
          </div>
          
          {/* Medium Profile Link */}
          <div className="text-center mt-12">
            <a 
              href="https://medium.com/@anuradha.pandey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              Visit My Medium Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}