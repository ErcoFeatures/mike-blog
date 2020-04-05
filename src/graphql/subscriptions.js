/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = `subscription OnCreateBlog {
  onCreateBlog {
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
export const onUpdateBlog = `subscription OnUpdateBlog {
  onUpdateBlog {
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
export const onDeleteBlog = `subscription OnDeleteBlog {
  onDeleteBlog {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
