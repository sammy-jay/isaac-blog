import React from 'react';
import Article from '../../components/article/Article';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl="https://res.cloudinary.com/techwithtols/image/upload/v1647522599/isaac_blog/blog02_djcwcm.png"
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl="https://res.cloudinary.com/techwithtols/image/upload/v1647522599/isaac_blog/blog01_lrb9xz.png"
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl="https://res.cloudinary.com/techwithtols/image/upload/v1647522558/isaac_blog/blog03_lq6gyd.png"
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl="https://res.cloudinary.com/techwithtols/image/upload/v1647522605/isaac_blog/blog04_cfovxg.png"
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl="https://res.cloudinary.com/techwithtols/image/upload/v1647522575/isaac_blog/blog05_fbxu0y.png"
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </div>
  </div>
);

export default Blog;
