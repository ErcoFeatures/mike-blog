/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = `mutation CreateBlog(
  $input: CreateBlogInput!
  $condition: ModelBlogConditionInput
) {
  createBlog(input: $input, condition: $condition) {
    id
    name
    createdBy
    posts {
      items {
        id
        title
        description
        createdBy
        likes
        createdAt
      }
      nextToken
    }
  }
}
`;
export const updateBlog = `mutation UpdateBlog(
  $input: UpdateBlogInput!
  $condition: ModelBlogConditionInput
) {
  updateBlog(input: $input, condition: $condition) {
    id
    name
    createdBy
    posts {
      items {
        id
        title
        description
        createdBy
        likes
        createdAt
      }
      nextToken
    }
  }
}
`;
export const deleteBlog = `mutation DeleteBlog(
  $input: DeleteBlogInput!
  $condition: ModelBlogConditionInput
) {
  deleteBlog(input: $input, condition: $condition) {
    id
    name
    createdBy
    posts {
      items {
        id
        title
        description
        createdBy
        likes
        createdAt
      }
      nextToken
    }
  }
}
`;
export const createPost = `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
    id
    title
    description
    createdBy
    likes
    createdAt
    blog {
      id
      name
      createdBy
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
        createdAt
        createdBy
        likes
      }
      nextToken
    }
  }
}
`;
export const updatePost = `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
    id
    title
    description
    createdBy
    likes
    createdAt
    blog {
      id
      name
      createdBy
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
        createdAt
        createdBy
        likes
      }
      nextToken
    }
  }
}
`;
export const deletePost = `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
    id
    title
    description
    createdBy
    likes
    createdAt
    blog {
      id
      name
      createdBy
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
        createdAt
        createdBy
        likes
      }
      nextToken
    }
  }
}
`;
export const createComment = `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    content
    createdAt
    createdBy
    likes
    post {
      id
      title
      description
      createdBy
      likes
      createdAt
      blog {
        id
        name
        createdBy
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const updateComment = `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
    id
    content
    createdAt
    createdBy
    likes
    post {
      id
      title
      description
      createdBy
      likes
      createdAt
      blog {
        id
        name
        createdBy
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const deleteComment = `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
    content
    createdAt
    createdBy
    likes
    post {
      id
      title
      description
      createdBy
      likes
      createdAt
      blog {
        id
        name
        createdBy
      }
      comments {
        nextToken
      }
    }
  }
}
`;
