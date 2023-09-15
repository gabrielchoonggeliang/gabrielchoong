import React from 'react';
import './Blog.css'; // Import your blog's CSS file

class Blog extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state if needed
    this.state = {
      // Your state variables here
    };
  }

  render() {
    return (
      <div className="blog">

        <header>
          <h2>My Recent Blog</h2>
        </header>

        <main>
          <div className="blog-post">
            <h2>Blog Post Title</h2>
            <p> Blog Post </p>
            {/* Add more content for the blog post */}
          </div>
          {/* Add more blog posts as needed */}
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Gabriel Choong</p>
        </footer>

      </div>
    );
  }
}

export default Blog;
