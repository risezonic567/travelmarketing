import React, { useMemo, useState } from "react";
import { blogPosts } from "../../data/blog";
import { NavLink } from "react-router-dom";

import {
  ArrowRight,
  CalendarDays,
  Clock,
  Eye,
  Heart,
  Search,
  Sparkles,
} from "lucide-react";

export default function BlogList() {

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [category, setCategory] = useState("All");
  const [select, setSelect] = useState("newest");

  const postPerPage = 6;

  const categories = [
    "All",
    ...new Set(blogPosts.map((item) => item.category)),
  ];

  const filteredBlogs = useMemo(() => {

    let data = blogPosts.filter((item) => {

      const matchCate =
        category === "All" ||
        item.category === category;

      const matchSearch =
        item.metatitle
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchCate && matchSearch;
    });

    data = [...data].sort((a, b) => {

      if (select === "newest")
        return new Date(b.date) - new Date(a.date);

      if (select === "oldest")
        return new Date(a.date) - new Date(b.date);

      if (select === "views")
        return b.views - a.views;

      if (select === "likes")
        return b.likes - a.likes;

      return 0;
    });

    return data;

  }, [search, category, select]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredBlogs.length / postPerPage)
  );

  const start = (currentPage - 1) * postPerPage;

  const paginatedBlogs = filteredBlogs.slice(
    start,
    start + postPerPage
  );

  const next = () => {
    if (currentPage < totalPages)
      setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage > 1)
      setCurrentPage(currentPage - 1);
  };

  return (
    <>


      <section className="relative overflow-hidden h-[500px] flex items-center justify-center">

        <img
          src="/images/Travelblogbanner.jpg.jpeg"
          alt="Travel Blog Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-yellow-400 mb-6">

            <Sparkles size={18} />

            <span className="text-sm font-medium">
              Latest Insights & Articles
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Explore Our
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              {" "}
              Latest Blogs
            </span>
          </h1>

          <p className="text-gray-200 text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
            Discover digital marketing trends,
            web development guides, SEO tips,
            CRM solutions and business growth
            strategies.
          </p>

          <div className="relative max-w-2xl mx-auto mt-10">

            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search latest blogs..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl px-14 py-5 text-white placeholder:text-gray-300 outline-none focus:border-yellow-400 transition"
            />
          </div>
        </div>
      </section>



      <section className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-4 py-5">

          <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">



            <div className="flex gap-3 overflow-x-auto scrollbar-hide">

              {categories.map((item, id) => (

                <button
                  key={id}
                  onClick={() => {
                    setCategory(item);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                  
                  ${
                    category === item
                      ? "bg-yellow-400 text-white shadow-lg shadow-yellow-400/30"
                      : "bg-gray-100 hover:bg-yellow-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>



            <select
              className="px-5 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-yellow-400"
              onChange={(e) => {
                setSelect(e.target.value);
                setCurrentPage(1);
              }}
              value={select}
            >
              <option value="newest">
                Newest
              </option>

              <option value="oldest">
                Oldest
              </option>

              <option value="likes">
                Most Liked
              </option>

              <option value="views">
                Most Viewed
              </option>
            </select>

          </div>
        </div>
      </section>



      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">



          {paginatedBlogs.length === 0 && (

            <div className="col-span-full text-center py-20">

              <h2 className="text-3xl font-bold text-gray-700">
                No Blogs Found
              </h2>

              <p className="text-gray-500 mt-3">
                Try searching another keyword.
              </p>
            </div>
          )}



          {paginatedBlogs.map((item, index) => (

            <div
              key={index}
              className="group relative bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >



              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.metatitle}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute top-5 left-5">

                  <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl text-white text-xs font-semibold border border-white/20">
                    {item.category}
                  </span>
                </div>
              </div>



              <div className="p-6">



                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 flex-wrap">

                  <span className="flex items-center gap-1">
                    <CalendarDays size={15} />
                    {item.date}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock size={15} />
                    {item.readingTime}
                  </span>
                </div>



                <h2 className="text-2xl font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-yellow-600 transition">

                  {item.metatitle}
                </h2>



                <p className="text-gray-600 mt-4 leading-relaxed line-clamp-3">

                  {item.metadescription}
                </p>



                <div className="flex items-center justify-between mt-6">

                  <div className="flex items-center gap-4 text-sm text-gray-500">

                    <span className="flex items-center gap-1">
                      <Eye size={16} />
                      {item.views}
                    </span>

                    <span className="flex items-center gap-1">
                      <Heart size={16} />
                      {item.likes}
                    </span>
                  </div>

                  <NavLink
                    to={`/blog/${item.slug}`}
                    className="flex items-center gap-2 text-yellow-600 font-semibold hover:gap-3 transition-all"
                  >
                    Read More

                    <ArrowRight size={18} />
                  </NavLink>
                </div>
              </div>



              <div className="absolute inset-0 rounded-[30px] border-2 border-transparent group-hover:border-yellow-400/30 pointer-events-none transition duration-500" />
            </div>
          ))}
        </div>



        {filteredBlogs.length > 0 && (

          <div className="flex justify-center items-center gap-5 mt-16">

            <button
              className={`px-6 py-3 rounded-xl border transition
              
              ${
                currentPage === 1
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-gray-200 hover:bg-gray-100"
              }`}
              onClick={prev}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            <div className="px-6 py-3 rounded-xl bg-yellow-400 text-white font-semibold shadow-lg shadow-yellow-400/30">

              {currentPage} / {totalPages}
            </div>

            <button
              className={`px-6 py-3 rounded-xl transition shadow-lg
              
              ${
                currentPage === totalPages
                  ? "bg-gray-300 text-white cursor-not-allowed"
                  : "bg-yellow-400 text-white hover:bg-yellow-500 shadow-yellow-400/30"
              }`}
              onClick={next}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </>
  );
}