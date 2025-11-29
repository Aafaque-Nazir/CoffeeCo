'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogsPage() {
    const featuredBlog = {
        id: 1,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200',
        date: 'Oct 12, 2023'
    };

    const blogs = [
        { id: 2, title: 'Lorem Ipsum is simply dummy text of the printing', excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600', date: 'Oct 10, 2023' },
        { id: 3, title: 'Lorem Ipsum is simply dummy text of the printing', excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600', date: 'Oct 08, 2023' },
        { id: 4, title: 'Lorem Ipsum is simply dummy text of the printing', excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600', date: 'Oct 05, 2023' },
        { id: 5, title: 'Lorem Ipsum is simply dummy text of the printing', excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600', date: 'Oct 03, 2023' },
        { id: 6, title: 'Lorem Ipsum is simply dummy text of the printing', excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=600', date: 'Sep 28, 2023' },
        { id: 7, title: 'Lorem Ipsum is simply dummy text of the printing', excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', image: 'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=600', date: 'Sep 25, 2023' },
        { id: 8, title: 'Lorem Ipsum is simply dummy text of the printing', excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=600', date: 'Sep 20, 2023' },
        { id: 9, title: 'Lorem Ipsum is simply dummy text of the printing', excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', image: 'https://images.unsplash.com/photo-1511537632536-b7a48965ce4a?q=80&w=600', date: 'Sep 15, 2023' },
        { id: 10, title: 'Lorem Ipsum is simply dummy text of the printing', excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600', date: 'Sep 12, 2023' },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-black text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[#d97706] text-xs uppercase tracking-widest mb-2">Home / Blogs</p>
                    <h1 className="text-4xl font-bold uppercase tracking-wide">Blogs</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Featured Blog */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative h-96 rounded-lg overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url("${featuredBlog.image}")` }}
                            ></div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4">{featuredBlog.title}</h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {featuredBlog.excerpt}
                            </p>
                            <Link
                                href={`/blogs/${featuredBlog.id}`}
                                className="inline-block bg-[#d97706] text-white px-6 py-3 rounded text-sm font-bold hover:bg-[#b45309] transition-colors uppercase"
                            >
                                Read Article
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-56">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url("${blog.image}")` }}
                                ></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-3 line-clamp-2">{blog.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>
                                <Link
                                    href={`/blogs/${blog.id}`}
                                    className="inline-block bg-[#d97706] text-white px-6 py-2 rounded text-sm font-bold hover:bg-[#b45309] transition-colors uppercase"
                                >
                                    Read Article
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
