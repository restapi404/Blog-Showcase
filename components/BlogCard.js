import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow p-4 flex flex-col">
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded mb-4 h-40 object-cover"
      />
      <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{blog.summary}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {blog.tags.map(tag => (
          <span key={tag} className="bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-100 px-2 py-1 rounded text-xs">
            {tag}
          </span>
        ))}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        By {blog.author} • {blog.date}
      </div>
      <Link
        href={`/blog/${blog.id}`}
        className="mt-auto text-blue-600 dark:text-blue-400 hover:underline"
      >
        Read More
      </Link>
    </div>
  );
}