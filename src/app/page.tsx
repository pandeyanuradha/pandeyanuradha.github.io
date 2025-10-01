"use client";

import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { sectionOrder, Section } from "@/data/section-order";
import HeaderNav from "@/components/header-nav";
import { WhatsNewSection } from "@/components/whats-new-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <HeaderNav />
      {/* Reduced padding to move content higher */}
      <div className="max-w-screen-lg mx-auto px-8 py-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-8 mb-8 md:mb-0">
            {/* Profile - moved higher and made more compact */}
            <div className="md:sticky top-4 space-y-6">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-8">
            {/* Inspirational Quote - aligned with picture top */}
            <section className="pt-0 -mt-1">
              <blockquote className="font-serif text-xl leading-relaxed text-zinc-800 italic text-center mb-8">
                &ldquo;She believed she could, so she did.&rdquo;
                <footer className="text-sm text-zinc-600 mt-1 font-sans not-italic">
                  ― R.S. Grey
                </footer>
              </blockquote>
            </section>

            {/* About section right after quote */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* What's New Timeline Section */}
            <WhatsNewSection />

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData && newsData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                          News
                        </h2>
                        <div className="space-y-12">
                          {newsData.map((news, index) => (
                            <div key={index}>
                              <NewsEntry news={news} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                          Publications
                        </h2>
                        <div className="space-y-12">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-zinc-200 my-8" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
