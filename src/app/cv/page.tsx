import HeaderNav from "@/components/header-nav";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <HeaderNav />
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* PDF Viewer - Full Screen */}
        <div className="w-full h-screen">
          <iframe
            src="/cv/Anuradha_Pandey_CV.pdf"
            className="w-full h-full border-0"
            title="Anuradha Pandey - Curriculum Vitae"
          >
            <div className="flex flex-col items-center justify-center h-full bg-gray-50 text-gray-500">
              <p className="text-lg font-medium mb-4">Your browser doesn't support PDF viewing</p>
              <a 
                href="/cv/Anuradha_Pandey_CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download CV
              </a>
            </div>
          </iframe>
        </div>
      </div>
    </div>
  );
}