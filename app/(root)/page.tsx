import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";


export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>})
{
  const query = (await searchParams).query;

  const posts=[{
    _createdAt:new Date(),
    views: 55,
    author: {_id: 1, name: "John Doe"},
    _id: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDcG7FZjwqwNKgdVjFfYCMrmJq5jZx9QwRg&s",
    category: "Tech",
    title: "We Robot",
  },
  {
    _createdAt: 'Today',
    views: 120,
    author: { _id: 2 , name: "Jane Smith"},
    _id: 2,
    description: "Exploring the latest in artificial intelligence and its applications across industries.",
    image: "https://blog.ipleaders.in/wp-content/uploads/2021/07/startup-with-Company-Suggestion-1-1.jpg",
    category: "Tech",
    title: "AI Revolution",
  },
  {
    _createdAt: '2 days ago',
    views: 89,
    author: { _id: 3 , name: "Alice Johnson"},
    _id: 3,
    description: "A deep dive into modern design trends and how they shape user experience.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fExbgOn1mIgWu96qTzDxmYo5x24SqVjRIr7vJO9aVFraZVlU22WFEVgb2FnW8CRlgQ4&usqp=CAU",
    category: "Design",
    title: "The Shape of Design",
  },
  {
    _createdAt: 'Last week',
    views: 200,
    author: { _id: 4 , name: "Bob Brown"},
    _id: 4,
    description: "How startups are redefining the business landscape with innovation.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQFBlr7fR_JvQQ/feedshare-shrink_800/feedshare-shrink_800/0/1729142219154?e=2147483647&v=beta&t=oEIqWXdqvDxVZpoQiBvvTlq8788EmMi5u-o-nDs_kYo",
    category: "Business",
    title: "Startup Culture 101",
  },
  {
    _createdAt: '3 days ago',
    views: 75,
    author: { _id: 5 , name: "Charlie Green"},
    _id: 5,
    description: "Breaking down the latest smartphone features and which ones really matter.",
    image: "https://via.placeholder.com/150/FFA500/FFFFFF?text=Gadgets",
    category: "Tech",
    title: "Smartphones Unboxed",
  },
  {
    _createdAt: 'Today',
    views: 42,
    author: { _id: 6 , name: "Diana White"},
    _id: 6,
    description: "The importance of mental health awareness in the digital age.",
    image: "https://via.placeholder.com/150/800080/FFFFFF?text=Health",
    category: "Health",
    title: "Mind Over Media",
  }
  ];


  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup,<br/>Connect with Investors</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches</p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "Discover Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length >0 ?(
            posts.map((post: StartupCardType, index: number)=>(
              <StartupCard key={post?.id} post={post} />))
            ) : (
              <p className="no-results">No Startups Found</p>
          )}
        </ul>

      </section>
      
    </>
  );
}
