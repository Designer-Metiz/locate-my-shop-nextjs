"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { CalendarDays, Share2, Facebook, Twitter, Linkedin, ArrowLeft, Search, Loader2 } from "lucide-react";
import { PageLoader } from "@/components/ui/page-loader";
import { useBlogPost, useBlogPosts } from "@/hooks/useBlogData";

interface Props { slug?: string }
const BlogDetailPage = ({ slug: slugProp }: Props) => {
  const routeParams = useParams();
  const rawSlug = slugProp ?? (typeof routeParams?.slug === 'string' ? routeParams.slug : Array.isArray(routeParams?.slug) ? routeParams.slug[0] : "");
  let slug = rawSlug;
  try { slug = decodeURIComponent(rawSlug); } catch {}
  const [searchTerm, setSearchTerm] = useState("");
  
  const { post: currentPost, loading, error } = useBlogPost(slug || "");
  const { posts } = useBlogPosts();
  
  const relatedPosts = posts
    .filter(post => post.slug !== slug && post.category === currentPost?.category)
    .slice(0, 3);
  
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) { return (<main className="pt-20"><PageLoader message="Loading article..." /></main>); }

  if (error || !currentPost) {
    return (
      <div className="min-h-screen">
        <main className="pt-20 container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist or has been moved.
          </p>
            <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-8 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{currentPost.category}</Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {currentPost.title}
                </h1>
                
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    <span>{currentPost.date_month} {currentPost.date_day}, {currentPost.date_year}</span>
                  </div>
                  <span>•</span>
                  <span>{currentPost.read_time}</span>
                  {currentPost.author && (
                    <>
                      <span>•</span>
                      <span>by {currentPost.author.name}</span>
                    </>
                  )}
                </div>

                {/* Social Share */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-sm font-medium text-foreground">Share:</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="p-2">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Featured Image */}
                <Card className="overflow-hidden gradient-card border-0 shadow-card mb-8">
                  <img
                    src={currentPost.image_url}
                    alt={currentPost.title}
                    className="object-cover rounded-lg"
                    style={{ width: '834px', height: '384px', margin: '0 auto', display: 'block' }}
                  />
                </Card>

                {/* Article Content */}
                <Card className="gradient-card border-0 shadow-card mb-8">
                  <CardContent className="p-8">
                    <div 
                      className="prose prose-lg max-w-none prose-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-primary/20"
                      dangerouslySetInnerHTML={{ __html: currentPost.content }}
                    />
                  </CardContent>
                </Card>

                {/* Author Section */}
                {currentPost.author && (
                  <Card className="gradient-card border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={currentPost.author.avatar_url} alt={currentPost.author.name} />
                          <AvatarFallback>{currentPost.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 text-foreground">About {currentPost.author.name}</h3>
                          <p className="text-muted-foreground mb-4">{currentPost.author.bio}</p>
                          <div className="flex gap-2">
                            {currentPost.author.twitter_url && (
                              <Button size="sm" variant="outline" asChild>
                                <a href={currentPost.author.twitter_url} target="_blank" rel="noopener noreferrer">
                                  <Twitter className="w-4 h-4" />
                                </a>
                              </Button>
                            )}
                            {currentPost.author.linkedin_url && (
                              <Button size="sm" variant="outline" asChild>
                                <a href={currentPost.author.linkedin_url} target="_blank" rel="noopener noreferrer">
                                  <Linkedin className="w-4 h-4" />
                                </a>
                              </Button>
                            )}
                            {currentPost.author.facebook_url && (
                              <Button size="sm" variant="outline" asChild>
                                <a href={currentPost.author.facebook_url} target="_blank" rel="noopener noreferrer">
                                  <Facebook className="w-4 h-4" />
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* Search */}
                <Card className="gradient-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Search Blog</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary"
                      />
                    </div>
                    {searchTerm && (
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground mb-2">
                          {filteredPosts.length} result(s) found
                        </p>
                        <div className="space-y-2">
                          {filteredPosts.slice(0, 3).map((post) => (
                            <Link key={post.id} href={`/blog/${post.slug}`} className="block p-2 hover:bg-background/50 rounded transition-colors">
                              <p className="text-sm font-medium text-foreground line-clamp-2">{post.title}</p>
                              <p className="text-xs text-muted-foreground mt-1">{post.category}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <Card className="gradient-card border-0 shadow-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 text-foreground">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedPosts.map((post) => (
                          <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                            <div className="flex gap-3">
                              <img
                                src={post.image_url}
                                alt={post.title}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 text-foreground">
                                  {post.title}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {post.date_month} {post.date_day}, {post.date_year}
                                </p>
                                <Badge variant="secondary" className="mt-1 text-xs">
                                  {post.category}
                                </Badge>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogDetailPage;